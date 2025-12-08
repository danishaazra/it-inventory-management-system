// Import shared components first (includes authGuard)
import '../shared/init.js';

import { app, auth, db } from '../authentication/firebase.js';
import { onAuthStateChanged } from 'firebase/auth';
import { getDoc, getDocs, doc, collection, addDoc, query, limit } from 'firebase/firestore';
import { getFunctions } from 'firebase/functions';
import * as XLSX from 'xlsx';

// Enable offline persistence for better performance (non-blocking)
(async () => {
  try {
    const { enableIndexedDbPersistence } = await import('firebase/firestore');
    await enableIndexedDbPersistence(db);
    console.log('Firestore persistence enabled');
  } catch (err) {
    // Silently fail - persistence is optional
    if (err.code !== 'failed-precondition' && err.code !== 'unimplemented') {
      console.warn('Persistence setup failed:', err.message);
    }
  }
})();

// HTML escaping utility to prevent XSS attacks
function escapeHtml(text) {
  if (text == null || text === undefined) return '';
  const div = document.createElement('div');
  div.textContent = String(text);
  return div.innerHTML;
}

const nameEl = document.getElementById('user-name');
const avatarEl = document.getElementById('user-avatar');
const maintenanceTableBody = document.getElementById('maintenance-table-body');
const addMaintenanceBtn = document.getElementById('add-maintenance-btn');
const addMaintenanceMenu = document.getElementById('add-maintenance-menu');
const maintenanceFileInput = document.getElementById('maintenance-file-input');
const addModalOverlay = document.getElementById('add-modal-overlay');
const closeAddModalBtn = document.getElementById('close-add-modal-btn');
const cancelAddBtn = document.getElementById('cancel-add-btn');
const addMaintenanceForm = document.getElementById('add-maintenance-form');
const saveAddBtn = document.getElementById('save-add-btn');
const addFrequencySelect = document.getElementById('add-frequency');
const addScheduleContainer = document.getElementById('add-schedule-container');
const addScheduleCalendar = document.getElementById('add-schedule-calendar');

let currentUser = null;
let functionsInstance = null;

// Initialize Functions instance once auth is ready
onAuthStateChanged(auth, async (user) => {
  currentUser = user;
  if (!user) {
    functionsInstance = null;
    return;
  }
  
  // Initialize Functions instance when user is authenticated
  if (!functionsInstance) {
    functionsInstance = getFunctions(app, 'us-central1');
    console.log('Functions instance initialized for user:', user.uid);
  }

  try {
    let displayName = user.email || 'User';
    const userDoc = await getDoc(doc(db, 'users', user.uid));
    if (userDoc.exists()) {
      const userData = userDoc.data();
      displayName = userData.fullName || userData.name || user.email || 'User';
    }

    if (nameEl) nameEl.textContent = displayName;
    if (avatarEl) {
      const initial = displayName.trim().charAt(0).toUpperCase();
      avatarEl.textContent = initial || 'U';
    }
  } catch (error) {
    console.error('Error loading user data for header:', error);
    const fallback = (user && (user.displayName || user.email)) || 'User';
    if (nameEl) nameEl.textContent = fallback;
    if (avatarEl) {
      const initial = fallback.trim().charAt(0).toUpperCase();
      avatarEl.textContent = initial || 'U';
    }
  }

  // Load maintenance schedule after user is authenticated
  try {
    await loadMaintenanceSchedule();
  } catch (error) {
    console.error('Error loading maintenance schedule:', error);
  }
});

function getFrequencyClass(frequency) {
  if (!frequency) return '';
  const f = frequency.toLowerCase();
  if (f.includes('weekly')) return 'frequency-weekly';
  if (f.includes('monthly')) return 'frequency-monthly';
  if (f.includes('quarterly')) return 'frequency-quarterly';
  return '';
}

async function loadMaintenanceSchedule() {
  console.log('Loading maintenance schedule...');
  if (!maintenanceTableBody) {
    console.error('maintenanceTableBody element not found!');
    return;
  }
  
  maintenanceTableBody.innerHTML = '';
  
  // Show loading state
  const loadingTr = document.createElement('tr');
  const loadingTd = document.createElement('td');
  loadingTd.colSpan = 4;
  loadingTd.textContent = 'Loading...';
  loadingTd.style.textAlign = 'center';
  loadingTd.style.padding = '2rem';
  loadingTd.style.color = '#666';
  loadingTr.appendChild(loadingTd);
  maintenanceTableBody.appendChild(loadingTr);

  try {
    console.log('Fetching maintenance items from Firestore...');
    const startTime = performance.now();
    // Use query with limit for better performance
    const maintenanceQuery = query(collection(db, 'maintenance'), limit(1000));
    const snap = await getDocs(maintenanceQuery);
    const loadTime = performance.now() - startTime;
    console.log(`Maintenance items fetched: ${snap.size} in ${loadTime.toFixed(2)}ms`);
    
    // Remove loading message
    maintenanceTableBody.innerHTML = '';
    
    if (snap.empty) {
      const tr = document.createElement('tr');
      const td = document.createElement('td');
      td.colSpan = 5;
      td.textContent = 'No maintenance items found. Click "Add Maintenance" to add one.';
      td.style.color = '#666';
      td.style.textAlign = 'center';
      td.style.padding = '2rem';
      tr.appendChild(td);
      maintenanceTableBody.appendChild(tr);
      return;
    }

    snap.forEach((docSnap) => {
      const m = docSnap.data();
      const inspectionTasks = m.inspectionTasks || '';
      const tasksList = Array.isArray(inspectionTasks) 
        ? inspectionTasks 
        : (typeof inspectionTasks === 'string' ? inspectionTasks.split('\n').filter(t => t.trim()) : []);
      
      console.log('Processing maintenance item:', docSnap.id, m);
      
      const tr = document.createElement('tr');
      const frequencyClass = getFrequencyClass(m.frequency);
      
      // Create cells using textContent to prevent XSS
      const branchTd = document.createElement('td');
      branchTd.textContent = m.branch || '';
      tr.appendChild(branchTd);
      
      const locationTd = document.createElement('td');
      locationTd.textContent = m.location || '';
      tr.appendChild(locationTd);
      
      const itemNameTd = document.createElement('td');
      itemNameTd.textContent = m.itemName || '';
      tr.appendChild(itemNameTd);
      
      const frequencyTd = document.createElement('td');
      const frequencyBadge = document.createElement('span');
      frequencyBadge.className = `frequency-badge ${frequencyClass}`;
      frequencyBadge.textContent = m.frequency || '';
      frequencyTd.appendChild(frequencyBadge);
      tr.appendChild(frequencyTd);
      
      const tasksTd = document.createElement('td');
      const tasksLink = document.createElement('a');
      tasksLink.href = `/inspection/inspectiontask.html?id=${encodeURIComponent(docSnap.id)}`;
      tasksLink.className = 'inspection-tasks-link';
      tasksLink.textContent = `View Tasks (${tasksList.length})`;
      tasksTd.appendChild(tasksLink);
      tr.appendChild(tasksTd);
      
      maintenanceTableBody.appendChild(tr);
    });
    
    console.log('Maintenance schedule loaded successfully');
  } catch (err) {
    console.error('Error loading maintenance schedule:', err);
    maintenanceTableBody.innerHTML = '';
    const tr = document.createElement('tr');
    const td = document.createElement('td');
    td.colSpan = 5;
    td.textContent = `Failed to load maintenance schedule: ${err.message}. Please refresh.`;
    td.style.color = '#b91c1c';
    td.style.textAlign = 'center';
    td.style.padding = '2rem';
    tr.appendChild(td);
    maintenanceTableBody.appendChild(tr);
  }
}

// Dropdown menu for Add Maintenance
function bindAddMaintenanceDropdown(btn, menu) {
  if (!btn || !menu) return;

  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    menu.classList.toggle('open');
  });

  menu.addEventListener('click', (e) => {
    const btn = e.target.closest('button[data-action]');
    if (!btn) return;
    const action = btn.getAttribute('data-action');
    if (action === 'manual') {
      openAddModal();
    } else if (action === 'upload') {
      if (maintenanceFileInput) {
        maintenanceFileInput.click();
      }
    }
    menu.classList.remove('open');
  });

  document.addEventListener('click', () => {
    menu.classList.remove('open');
  });
}

bindAddMaintenanceDropdown(addMaintenanceBtn, addMaintenanceMenu);

// Calendar generation functions
function generateCalendar(frequency, container, selectedDates = {}) {
  container.innerHTML = '';
  
  const currentYear = new Date().getFullYear();
  const yearSelect = document.createElement('select');
  yearSelect.className = 'calendar-year-select';
  
  // Generate year options (current year and next 2 years)
  for (let y = currentYear; y <= currentYear + 2; y++) {
    const option = document.createElement('option');
    option.value = y;
    option.textContent = y;
    if (y === currentYear) option.selected = true;
    yearSelect.appendChild(option);
  }
  
  const yearSelectorDiv = document.createElement('div');
  yearSelectorDiv.className = 'calendar-year-selector';
  const yearLabel = document.createElement('label');
  yearLabel.textContent = 'Year: ';
  yearLabel.style.fontWeight = '600';
  yearSelectorDiv.appendChild(yearLabel);
  yearSelectorDiv.appendChild(yearSelect);
  container.appendChild(yearSelectorDiv);
  
  const monthsContainer = document.createElement('div');
  monthsContainer.className = 'calendar-months';
  
  if (frequency === 'Weekly') {
    // Generate calendar for weekly - show all 12 months with weeks
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 
                   'July', 'August', 'September', 'October', 'November', 'December'];
    
    months.forEach((monthName, monthIndex) => {
      const monthDiv = document.createElement('div');
      monthDiv.className = 'calendar-month';
      
      const monthHeader = document.createElement('div');
      monthHeader.className = 'calendar-month-header';
      monthHeader.textContent = monthName;
      monthDiv.appendChild(monthHeader);
      
      const weeksDiv = document.createElement('div');
      weeksDiv.className = 'calendar-weeks';
      
      // Generate 4 weeks per month
      for (let week = 1; week <= 4; week++) {
        const weekDiv = document.createElement('div');
        weekDiv.className = 'calendar-week';
        
        const weekLabel = document.createElement('div');
        weekLabel.className = 'calendar-week-label';
        weekLabel.textContent = `Week ${week}:`;
        weekDiv.appendChild(weekLabel);
        
        const dateInput = document.createElement('input');
        dateInput.type = 'date';
        dateInput.className = 'calendar-date-input';
        dateInput.dataset.month = monthIndex;
        dateInput.dataset.week = week;
        dateInput.dataset.key = `${monthIndex}-${week}`;
        
        // Set default date (first Monday of the week)
        const year = parseInt(yearSelect.value);
        const firstDay = new Date(year, monthIndex, 1).getDay();
        const firstMonday = firstDay === 0 ? 2 : firstDay === 1 ? 1 : 9 - firstDay;
        const weekDate = new Date(year, monthIndex, firstMonday + (week - 1) * 7);
        if (weekDate.getMonth() === monthIndex) {
          dateInput.value = weekDate.toISOString().split('T')[0];
        }
        
        // Set selected date if exists
        const dateKey = `${year}-${monthIndex}-${week}`;
        if (selectedDates[dateKey]) {
          dateInput.value = selectedDates[dateKey];
        }
        
        weekDiv.appendChild(dateInput);
        weeksDiv.appendChild(weekDiv);
      }
      
      monthDiv.appendChild(weeksDiv);
      monthsContainer.appendChild(monthDiv);
    });
  } else if (frequency === 'Monthly') {
    // Generate calendar for monthly - show months with date picker
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 
                   'July', 'August', 'September', 'October', 'November', 'December'];
    
    months.forEach((monthName, monthIndex) => {
      const monthDiv = document.createElement('div');
      monthDiv.className = 'calendar-month';
      
      const monthHeader = document.createElement('div');
      monthHeader.className = 'calendar-month-header';
      monthHeader.textContent = monthName;
      monthDiv.appendChild(monthHeader);
      
      const dateInput = document.createElement('input');
      dateInput.type = 'date';
      dateInput.className = 'calendar-date-input';
      dateInput.dataset.month = monthIndex;
      dateInput.dataset.key = `${monthIndex}`;
      
      // Set default date (1st of the month)
      const year = parseInt(yearSelect.value);
      const defaultDate = new Date(year, monthIndex, 1);
      dateInput.value = defaultDate.toISOString().split('T')[0];
      
      // Set selected date if exists
      const dateKey = `${year}-${monthIndex}`;
      if (selectedDates[dateKey]) {
        dateInput.value = selectedDates[dateKey];
      }
      
      monthDiv.appendChild(dateInput);
      monthsContainer.appendChild(monthDiv);
    });
  } else if (frequency === 'Quarterly') {
    // Generate calendar for quarterly - show quarters with month dropdown selection
    const quarters = [
      { name: 'Q1', months: ['January', 'February', 'March'], monthIndices: [0, 1, 2] },
      { name: 'Q2', months: ['April', 'May', 'June'], monthIndices: [3, 4, 5] },
      { name: 'Q3', months: ['July', 'August', 'September'], monthIndices: [6, 7, 8] },
      { name: 'Q4', months: ['October', 'November', 'December'], monthIndices: [9, 10, 11] }
    ];
    
    quarters.forEach((quarter, qIndex) => {
      const quarterDiv = document.createElement('div');
      quarterDiv.className = 'calendar-quarter';
      
      const quarterLabel = document.createElement('div');
      quarterLabel.className = 'calendar-quarter-label';
      quarterLabel.textContent = quarter.name;
      quarterDiv.appendChild(quarterLabel);
      
      // Create month selector dropdown
      const monthSelectDiv = document.createElement('div');
      monthSelectDiv.style.display = 'flex';
      monthSelectDiv.style.alignItems = 'center';
      monthSelectDiv.style.gap = '0.5rem';
      monthSelectDiv.style.marginBottom = '0.5rem';
      
      const monthLabel = document.createElement('label');
      monthLabel.textContent = 'Select Month:';
      monthLabel.style.minWidth = '100px';
      monthLabel.style.fontSize = '0.85rem';
      monthLabel.style.fontWeight = '600';
      monthSelectDiv.appendChild(monthLabel);
      
      const monthSelect = document.createElement('select');
      monthSelect.className = 'calendar-month-select';
      monthSelect.dataset.quarter = qIndex;
      monthSelect.dataset.key = `${qIndex}`;
      
      // Add default option
      const defaultOption = document.createElement('option');
      defaultOption.value = '';
      defaultOption.textContent = 'Choose month...';
      monthSelect.appendChild(defaultOption);
      
      // Add month options
      quarter.months.forEach((monthName, mIndex) => {
        const monthIndex = quarter.monthIndices[mIndex];
        const option = document.createElement('option');
        option.value = monthIndex;
        option.textContent = monthName;
        monthSelect.appendChild(option);
      });
      
      // Check if there's a selected date for this quarter
      const year = parseInt(yearSelect.value);
      let selectedMonthIndex = null;
      for (let mIndex = 0; mIndex < quarter.months.length; mIndex++) {
        const monthIndex = quarter.monthIndices[mIndex];
        const dateKey = `${year}-${qIndex}-${mIndex}`;
        if (selectedDates[dateKey]) {
          selectedMonthIndex = monthIndex;
          monthSelect.value = monthIndex;
          break;
        }
      }
      
      monthSelectDiv.appendChild(monthSelect);
      
      // Create date input (shown when month is selected)
      const dateInput = document.createElement('input');
      dateInput.type = 'date';
      dateInput.className = 'calendar-date-input';
      dateInput.dataset.quarter = qIndex;
      dateInput.dataset.key = `${qIndex}`;
      dateInput.style.display = selectedMonthIndex !== null ? 'block' : 'none';
      dateInput.style.marginTop = '0.5rem';
      
      // Set date if exists
      if (selectedMonthIndex !== null) {
        for (let mIndex = 0; mIndex < quarter.months.length; mIndex++) {
          const monthIndex = quarter.monthIndices[mIndex];
          if (monthIndex === selectedMonthIndex) {
            const dateKey = `${year}-${qIndex}-${mIndex}`;
            if (selectedDates[dateKey]) {
              dateInput.value = selectedDates[dateKey];
            } else {
              // Default to 1st of selected month
              const defaultDate = new Date(year, selectedMonthIndex, 1);
              dateInput.value = defaultDate.toISOString().split('T')[0];
            }
            break;
          }
        }
      }
      
      // Handle month selection change
      monthSelect.addEventListener('change', () => {
        if (monthSelect.value) {
          const selectedMonthIdx = parseInt(monthSelect.value);
          dateInput.style.display = 'block';
          // Set default date to 1st of selected month
          const defaultDate = new Date(year, selectedMonthIdx, 1);
          dateInput.value = defaultDate.toISOString().split('T')[0];
          
          // Check if there's an existing date for this quarter/month combination
          for (let mIndex = 0; mIndex < quarter.months.length; mIndex++) {
            if (quarter.monthIndices[mIndex] === selectedMonthIdx) {
              const dateKey = `${year}-${qIndex}-${mIndex}`;
              if (selectedDates[dateKey]) {
                dateInput.value = selectedDates[dateKey];
              }
              break;
            }
          }
        } else {
          dateInput.style.display = 'none';
          dateInput.value = '';
        }
      });
      
      quarterDiv.appendChild(monthSelectDiv);
      quarterDiv.appendChild(dateInput);
      monthsContainer.appendChild(quarterDiv);
    });
  }
  
  container.appendChild(monthsContainer);
  
  // Update calendar when year changes
  yearSelect.addEventListener('change', () => {
    generateCalendar(frequency, container, selectedDates);
  });
}

function getSelectedDates(container, frequency, year) {
  const selectedDates = {};
  const dateInputs = container.querySelectorAll('.calendar-date-input');
  
  dateInputs.forEach(input => {
    if (input.value && input.style.display !== 'none') {
      const key = input.dataset.key;
      if (frequency === 'Weekly') {
        const [month, week] = key.split('-');
        selectedDates[`${year}-${month}-${week}`] = input.value;
      } else if (frequency === 'Monthly') {
        const month = key;
        selectedDates[`${year}-${month}`] = input.value;
      } else if (frequency === 'Quarterly') {
        const quarter = parseInt(key);
        // Find which month index within the quarter
        const monthSelect = container.querySelector(`select[data-quarter="${quarter}"]`);
        if (monthSelect && monthSelect.value) {
          const selectedMonthIndex = parseInt(monthSelect.value);
          // Map month index to quarter month index (0-2)
          const quarters = [
            { monthIndices: [0, 1, 2] },
            { monthIndices: [3, 4, 5] },
            { monthIndices: [6, 7, 8] },
            { monthIndices: [9, 10, 11] }
          ];
          const quarterMonths = quarters[quarter].monthIndices;
          const mIndex = quarterMonths.indexOf(selectedMonthIndex);
          if (mIndex !== -1) {
            selectedDates[`${year}-${quarter}-${mIndex}`] = input.value;
          }
        }
      }
    }
  });
  
  return selectedDates;
}

// Show/hide calendar based on frequency selection
if (addFrequencySelect && addScheduleContainer && addScheduleCalendar) {
  addFrequencySelect.addEventListener('change', (e) => {
    const frequency = e.target.value;
    if (frequency) {
      addScheduleContainer.style.display = 'block';
      generateCalendar(frequency, addScheduleCalendar);
    } else {
      addScheduleContainer.style.display = 'none';
      addScheduleCalendar.innerHTML = '';
    }
  });
}

// Add Maintenance Modal Functions
function openAddModal() {
  if (addModalOverlay) {
    if (addMaintenanceForm) {
      addMaintenanceForm.reset();
    }
    addModalOverlay.classList.add('open');
  }
}

function closeAddModal() {
  if (addModalOverlay) {
    addModalOverlay.classList.remove('open');
    if (addMaintenanceForm) {
      addMaintenanceForm.reset();
    }
    if (addScheduleContainer) {
      addScheduleContainer.style.display = 'none';
    }
    if (addScheduleCalendar) {
      addScheduleCalendar.innerHTML = '';
    }
  }
}

if (closeAddModalBtn) {
  closeAddModalBtn.addEventListener('click', closeAddModal);
}

if (cancelAddBtn) {
  cancelAddBtn.addEventListener('click', closeAddModal);
}

if (addModalOverlay) {
  addModalOverlay.addEventListener('click', (e) => {
    if (e.target === addModalOverlay) {
      closeAddModal();
    }
  });
}

// Handle Add Maintenance Form Submission
if (addMaintenanceForm) {
  addMaintenanceForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    if (!saveAddBtn) return;

    saveAddBtn.disabled = true;
    saveAddBtn.textContent = 'Adding...';

    try {
      const formData = new FormData(addMaintenanceForm);
      
      // Get location from text input
      const locationValue = formData.get('location')?.trim() || '';
      
      if (!locationValue) {
        alert('Location is required.');
        saveAddBtn.disabled = false;
        saveAddBtn.textContent = 'Add Maintenance';
        return;
      }
      
      const inspectionTasksText = formData.get('inspectionTasks')?.trim() || '';
      const inspectionTasks = inspectionTasksText.split('\n')
        .map(t => t.trim())
        .filter(t => t.length > 0);
      
      const frequency = formData.get('frequency') || '';
      const year = addScheduleCalendar?.querySelector('.calendar-year-select')?.value || new Date().getFullYear();
      const selectedDates = getSelectedDates(addScheduleCalendar, frequency, parseInt(year));
      
      // Create taskDates array from scheduleDates for easy access per task
      const taskDates = [];
      if (frequency === 'Weekly') {
        // For weekly, map dates to tasks (each task gets dates for all weeks)
        inspectionTasks.forEach((task, taskIndex) => {
          // Each task can have dates for multiple weeks, store first available date
          for (let month = 0; month < 12; month++) {
            for (let week = 1; week <= 4; week++) {
              const dateKey = `${year}-${month}-${week}`;
              if (selectedDates[dateKey]) {
                taskDates[taskIndex] = selectedDates[dateKey];
                break;
              }
            }
            if (taskDates[taskIndex]) break;
          }
        });
      } else if (frequency === 'Monthly') {
        // For monthly, each task gets a date per month
        inspectionTasks.forEach((task, taskIndex) => {
          const monthIndex = taskIndex % 12;
          const dateKey = `${year}-${monthIndex}`;
          taskDates[taskIndex] = selectedDates[dateKey] || '';
        });
      } else if (frequency === 'Quarterly') {
        // For quarterly, each task gets a date per quarter month
        inspectionTasks.forEach((task, taskIndex) => {
          const quarter = Math.floor(taskIndex / 3);
          const monthInQuarter = taskIndex % 3;
          const dateKey = `${year}-${quarter}-${monthInQuarter}`;
          taskDates[taskIndex] = selectedDates[dateKey] || '';
        });
      }

      const maintenanceData = {
        branch: formData.get('branch')?.trim() || '',
        location: locationValue,
        itemName: formData.get('itemName')?.trim() || '',
        frequency: frequency,
        inspectionTasks: inspectionTasks,
        scheduleDates: selectedDates,
        scheduleYear: parseInt(year),
        taskDates: taskDates,
        createdAt: new Date().toISOString(),
      };

      await addDoc(collection(db, 'maintenance'), maintenanceData);
      alert('Maintenance item added successfully!');
      closeAddModal();
      await loadMaintenanceSchedule();
    } catch (error) {
      console.error('Error adding maintenance item:', error);
      alert('Failed to add maintenance item. Please try again.');
    } finally {
      if (saveAddBtn) {
        saveAddBtn.disabled = false;
        saveAddBtn.textContent = 'Add Maintenance';
      }
    }
  });
}

// Handle Excel file upload with AI parsing
if (maintenanceFileInput) {
  maintenanceFileInput.addEventListener('change', async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Check if user is authenticated - use auth.currentUser for most up-to-date state
    const user = auth.currentUser;
    if (!user) {
      alert('You must be logged in to upload files. Please log in and try again.');
      maintenanceFileInput.value = '';
      return;
    }

    // Show loading state
    const originalBtnText = addMaintenanceBtn?.textContent || '';
    if (addMaintenanceBtn) {
      addMaintenanceBtn.disabled = true;
      addMaintenanceBtn.innerHTML = '<span>⏳</span> <span>Processing with AI...</span>';
    }

    try {
      // Read Excel file with full structure preservation
      const arrayBuffer = await file.arrayBuffer();
      const workbook = XLSX.read(arrayBuffer, { type: 'array', cellStyles: true });
      const firstSheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[firstSheetName];
      
      // Get all cells with their addresses and values
      const cellData = [];
      const range = XLSX.utils.decode_range(sheet['!ref'] || 'A1');
      
      // Extract all cells with their addresses (including empty ones for structure)
      for (let row = range.s.r; row <= range.e.r; row++) {
        for (let col = range.s.c; col <= range.e.c; col++) {
          const cellAddress = XLSX.utils.encode_cell({ r: row, c: col });
          const cell = sheet[cellAddress];
          
          cellData.push({
            address: cellAddress,
            row: row + 1,
            col: col + 1,
            value: cell && cell.v !== undefined ? String(cell.v) : '',
            type: cell ? (cell.t || 's') : 's',
            formatted: cell ? (cell.w || String(cell.v || '')) : ''
          });
        }
      }
      
      // Also get merged cells information
      const mergedCells = sheet['!merges'] || [];
      
      // Convert to row-based format for backward compatibility, but with cell info
      const rows = [];
      const maxRow = range.e.r + 1;
      const maxCol = range.e.c + 1;
      
      for (let r = 0; r < maxRow; r++) {
        const row = [];
        for (let c = 0; c < maxCol; c++) {
          const cellAddress = XLSX.utils.encode_cell({ r: r, c: c });
          const cell = sheet[cellAddress];
          row.push(cell ? (cell.w || String(cell.v || '')) : '');
        }
        rows.push(row);
      }

      if (!rows || rows.length === 0) {
        alert('The file appears to be empty.');
        return;
      }

      // Get Firebase ID token
      const token = await user.getIdToken();
      
      if (!token) {
        throw new Error('Failed to get authentication token');
      }

      // Prepare request with rich cell data
      const url = `https://us-central1-${app.options.projectId}.cloudfunctions.net/extractMaintenanceChecklist`;

      // Call AI Cloud Function with both row data and cell structure
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          excelRows: rows,
          cellData: cellData, // Rich cell data with addresses
          mergedCells: mergedCells.map(m => ({
            s: { r: m.s.r, c: m.s.c },
            e: { r: m.e.r, c: m.e.c }
          })),
          sheetName: firstSheetName
        })
      });

      if (!response.ok) {
        const error = await response.text();
        throw new Error(`Function call failed: ${response.status} ${response.statusText} - ${error}`);
      }

      const data = await response.json();

      if (!data.success || !data.items || data.items.length === 0) {
        alert('AI could not extract maintenance data from the file. Please check the file format.');
        return;
      }

      // Save extracted items to Firestore
      const maintenanceCol = collection(db, 'maintenance');
      const writes = data.items.map((item) => {
        const maintenance = {
          branch: item.branch || '',
          location: item.location || '',
          itemName: item.itemName || '',
          frequency: item.frequency || 'Monthly',
          inspectionTasks: item.inspectionTasks || [],
          sourceFile: file.name,
          parsedByAI: true,
          createdAt: new Date().toISOString(),
        };
        return addDoc(maintenanceCol, maintenance);
      });

      await Promise.all(writes);
      alert(`Successfully processed and uploaded ${writes.length} maintenance items using AI!`);
      await loadMaintenanceSchedule();
    } catch (err) {
      console.error('Error importing maintenance file:', err);
      console.error('Error details:', {
        code: err.code,
        message: err.message,
        currentUser: user ? user.uid : 'null',
        hasAuth: !!user,
        authCurrentUser: auth.currentUser ? auth.currentUser.uid : 'null'
      });
      
      // Fallback to manual parsing if AI fails
      if (err.code === 'functions/unavailable' || err.code === 'functions/not-found') {
        alert('AI service is currently unavailable. Please ensure the Cloud Function is deployed.');
      } else if (err.code === 'functions/unauthenticated' || err.message?.includes('authenticated')) {
        alert('Authentication error. Please log out and log back in, then try again.');
      } else if (err.message && err.message.includes('AI')) {
        alert('AI parsing failed. Trying manual parsing...');
        
        // Fallback to original manual parsing
        try {
          const arrayBuffer = await file.arrayBuffer();
          const workbook = XLSX.read(arrayBuffer, { type: 'array' });
          const firstSheetName = workbook.SheetNames[0];
          const sheet = workbook.Sheets[firstSheetName];
          const rows = XLSX.utils.sheet_to_json(sheet, { header: 1, defval: '' });

          if (!rows || rows.length <= 1) {
            alert('The file appears to be empty or missing data rows.');
            return;
          }

          // Expected columns: Branch, Location, Item Name, Frequency, List of Inspection Tasks
          const dataRows = rows.slice(1);
          const maintenanceCol = collection(db, 'maintenance');

          const writes = dataRows
            .filter(r => r && r.length > 0 && String(r[0] || '').trim() !== '')
            .map((r) => {
              const inspectionTasksText = String(r[4] ?? '').trim();
              const inspectionTasks = inspectionTasksText
                .split('\n')
                .map(t => t.trim())
                .filter(t => t.length > 0);

              const maintenance = {
                branch: String(r[0] ?? '').trim(),
                location: String(r[1] ?? '').trim(),
                itemName: String(r[2] ?? '').trim(),
                frequency: String(r[3] ?? '').trim(),
                inspectionTasks: inspectionTasks,
                sourceFile: file.name,
                parsedByAI: false,
                createdAt: new Date().toISOString(),
              };
              return addDoc(maintenanceCol, maintenance);
            });

          if (writes.length === 0) {
            alert('No valid data rows found in the file.');
            return;
          }

          await Promise.all(writes);
          alert(`Successfully uploaded ${writes.length} maintenance items (manual parsing).`);
          await loadMaintenanceSchedule();
        } catch (fallbackErr) {
          console.error('Fallback parsing also failed:', fallbackErr);
          alert('Failed to import file. Please check the format and try again.');
        }
      } else {
        alert('Failed to import file: ' + (err.message || 'Unknown error'));
      }
    } finally {
      maintenanceFileInput.value = '';
      if (addMaintenanceBtn) {
        addMaintenanceBtn.disabled = false;
        addMaintenanceBtn.innerHTML = originalBtnText;
      }
    }
  });
}

// Export calendar functions for use in other files
export { generateCalendar, getSelectedDates };

// Note: loadMaintenanceSchedule() is called inside onAuthStateChanged callback
// to ensure user is authenticated before loading data
