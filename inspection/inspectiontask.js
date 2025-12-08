// Import shared components first (includes authGuard)
import '../shared/init.js';

import { auth, db } from '../authentication/firebase.js';
import { onAuthStateChanged } from 'firebase/auth';
import { getDoc, doc, updateDoc, deleteDoc, collection, query, where, getDocs } from 'firebase/firestore';

// HTML escaping utility to prevent XSS attacks
function escapeHtml(text) {
  if (text == null || text === undefined) return '';
  const div = document.createElement('div');
  div.textContent = String(text);
  return div.innerHTML;
}

const nameEl = document.getElementById('user-name');
const avatarEl = document.getElementById('user-avatar');
const summaryBranch = document.getElementById('summary-branch');
const summaryLocation = document.getElementById('summary-location');
const summaryItemName = document.getElementById('summary-itemName');
const summaryFrequency = document.getElementById('summary-frequency');
const tasksList = document.getElementById('tasks-list');
const addTaskBtn = document.getElementById('add-task-btn');
const addTaskModalOverlay = document.getElementById('add-task-modal-overlay');
const closeAddTaskModalBtn = document.getElementById('close-add-task-modal-btn');
const cancelAddTaskBtn = document.getElementById('cancel-add-task-btn');
const addTaskForm = document.getElementById('add-task-form');
const saveAddTaskBtn = document.getElementById('save-add-task-btn');
const addTaskScheduleContainer = document.getElementById('add-task-schedule-container');
const addTaskScheduleCalendar = document.getElementById('add-task-schedule-calendar');
const inspectionActionsBtn = document.getElementById('inspection-actions-btn');
const inspectionActionsMenu = document.getElementById('inspection-actions-menu');
const editMaintenanceBtn = document.getElementById('edit-maintenance-btn');
const deleteMaintenanceBtn = document.getElementById('delete-maintenance-btn');
const editModalOverlay = document.getElementById('edit-modal-overlay');
const closeModalBtn = document.getElementById('close-modal-btn');
const cancelEditBtn = document.getElementById('cancel-edit-btn');
const editMaintenanceForm = document.getElementById('edit-maintenance-form');
const saveEditBtn = document.getElementById('save-edit-btn');
const editFrequencySelect = document.getElementById('edit-frequency');
const editScheduleContainer = document.getElementById('edit-schedule-container');
const editScheduleCalendar = document.getElementById('edit-schedule-calendar');

let currentMaintenanceId = null;
let currentMaintenanceData = null;

onAuthStateChanged(auth, async (user) => {
  if (!user) return;

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
});

function getFrequencyClass(frequency) {
  if (!frequency) return '';
  const f = frequency.toLowerCase();
  if (f.includes('weekly')) return 'frequency-weekly';
  if (f.includes('monthly')) return 'frequency-monthly';
  if (f.includes('quarterly')) return 'frequency-quarterly';
  return '';
}

// Calendar generation functions (same as maintenance.html)
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
        
        const year = parseInt(yearSelect.value);
        const firstDay = new Date(year, monthIndex, 1).getDay();
        const firstMonday = firstDay === 0 ? 2 : firstDay === 1 ? 1 : 9 - firstDay;
        const weekDate = new Date(year, monthIndex, firstMonday + (week - 1) * 7);
        if (weekDate.getMonth() === monthIndex) {
          dateInput.value = weekDate.toISOString().split('T')[0];
        }
        
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
      
      const year = parseInt(yearSelect.value);
      const defaultDate = new Date(year, monthIndex, 1);
      dateInput.value = defaultDate.toISOString().split('T')[0];
      
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

async function loadInspectionTasks() {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('id');

  if (!id) {
    alert('No maintenance item ID provided.');
    window.location.replace('/maintenance/maintenance.html');
    return;
  }

  currentMaintenanceId = id;

  try {
    const snap = await getDoc(doc(db, 'maintenance', id));
    if (!snap.exists()) {
      alert('Maintenance item not found.');
      window.location.replace('/maintenance/maintenance.html');
      return;
    }

    const m = snap.data();
    currentMaintenanceData = m;

    // Update summary cards
    if (summaryBranch) summaryBranch.textContent = m.branch || 'Not set';
    if (summaryLocation) summaryLocation.textContent = m.location || 'Not set';
    if (summaryItemName) summaryItemName.textContent = m.itemName || 'Not set';
    
    if (summaryFrequency) {
      summaryFrequency.innerHTML = ''; // Clear previous content
      const frequency = m.frequency || 'Not set';
      const frequencyClass = getFrequencyClass(frequency);
      if (frequencyClass) {
        const badge = document.createElement('span');
        badge.className = `frequency-badge ${frequencyClass}`;
        badge.textContent = frequency;
        summaryFrequency.appendChild(badge);
      } else {
        summaryFrequency.textContent = frequency;
      }
    }

    // Load inspection tasks
    if (tasksList) {
      tasksList.innerHTML = '';
      
      // Handle both array and string formats defensively
      let inspectionTasks = m.inspectionTasks || [];
      if (typeof inspectionTasks === 'string') {
        inspectionTasks = inspectionTasks.split('\n').filter(t => t.trim());
      } else if (!Array.isArray(inspectionTasks)) {
        inspectionTasks = [];
      }
      
      if (!inspectionTasks || inspectionTasks.length === 0) {
        const li = document.createElement('li');
        li.className = 'no-tasks';
        li.textContent = 'No inspection tasks found.';
        tasksList.appendChild(li);
      } else {
        inspectionTasks.forEach((task, index) => {
          const li = document.createElement('li');
          li.className = 'task-item';
          
          const taskNumber = document.createElement('div');
          taskNumber.className = 'task-number';
          taskNumber.textContent = index + 1;
          li.appendChild(taskNumber);
          
          const taskContent = document.createElement('div');
          taskContent.className = 'task-text';
          taskContent.style.flex = '1';
          
          const taskText = document.createElement('div');
          taskText.style.fontSize = '1rem';
          taskText.style.fontWeight = '600';
          taskText.style.marginBottom = '0.5rem';
          taskText.textContent = task; // Use textContent to prevent XSS
          taskContent.appendChild(taskText);
          
          // Add date display
          const taskDates = m.taskDates || [];
          let taskDateValue = taskDates[index] || '';
          
          const taskDate = document.createElement('div');
          taskDate.className = 'task-date';
          
          const dateInfo = document.createElement('div');
          dateInfo.className = 'task-date-info';
          
          if (taskDateValue) {
            const dateObj = new Date(taskDateValue);
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            const dateOnly = new Date(dateObj.getFullYear(), dateObj.getMonth(), dateObj.getDate());
            let daysDiff = Math.ceil((dateOnly - today) / (1000 * 60 * 60 * 24));
            
            // If date has passed, calculate next occurrence based on frequency
            let nextDate = dateObj;
            const frequency = m.frequency || 'Monthly';
            
            if (daysDiff < 0) {
              // Calculate next occurrence
              if (frequency === 'Weekly') {
                // Add 7 days until we get a future date
                while (nextDate <= today) {
                  nextDate = new Date(nextDate.getTime() + 7 * 24 * 60 * 60 * 1000);
                }
              } else if (frequency === 'Monthly') {
                // Add 1 month until we get a future date
                while (nextDate <= today) {
                  nextDate = new Date(nextDate.getFullYear(), nextDate.getMonth() + 1, nextDate.getDate());
                }
              } else if (frequency === 'Quarterly') {
                // Add 3 months until we get a future date
                while (nextDate <= today) {
                  nextDate = new Date(nextDate.getFullYear(), nextDate.getMonth() + 3, nextDate.getDate());
                }
              }
              
              // Recalculate days difference with next date
              const nextDateOnly = new Date(nextDate.getFullYear(), nextDate.getMonth(), nextDate.getDate());
              daysDiff = Math.ceil((nextDateOnly - today) / (1000 * 60 * 60 * 24));
            }
            
            const dateValue = document.createElement('div');
            dateValue.className = 'task-date-value';
            dateValue.textContent = `Upcoming: ${nextDate.toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}`;
            dateInfo.appendChild(dateValue);
            
            // Always show as upcoming (never overdue)
            const daysRemaining = document.createElement('div');
            daysRemaining.className = 'task-days-remaining';
            if (daysDiff === 0) {
              daysRemaining.textContent = 'Today';
              daysRemaining.style.background = '#fee2e2';
              daysRemaining.style.color = '#991b1b';
            } else if (daysDiff === 1) {
              daysRemaining.textContent = 'Tomorrow';
              daysRemaining.style.background = '#fef3c7';
              daysRemaining.style.color = '#92400e';
            } else {
              daysRemaining.textContent = `${daysDiff} days remaining`;
              daysRemaining.style.background = '#dbeafe';
              daysRemaining.style.color = '#1e40af';
            }
            dateInfo.appendChild(daysRemaining);
          } else {
            const noDate = document.createElement('div');
            noDate.className = 'task-date-label';
            noDate.textContent = 'No date scheduled';
            noDate.style.color = '#9ca3af';
            dateInfo.appendChild(noDate);
          }
          
          taskDate.appendChild(dateInfo);
          
          // Button container
          const buttonContainer = document.createElement('div');
          buttonContainer.style.display = 'flex';
          buttonContainer.style.gap = '0.5rem';
          buttonContainer.style.alignItems = 'center';
          
          // Edit Calendar button
          const editCalendarBtn = document.createElement('button');
          editCalendarBtn.type = 'button';
          editCalendarBtn.className = 'task-date-edit-btn';
          editCalendarBtn.textContent = 'Edit Calendar';
          editCalendarBtn.style.cursor = 'pointer';
          editCalendarBtn.addEventListener('click', () => {
            const frequency = m.frequency || 'Monthly';
            const scheduleDates = m.scheduleDates || {};
            const scheduleYear = m.scheduleYear || new Date().getFullYear();
            openTaskDateModal(index, task, taskDateValue, frequency, scheduleDates, scheduleYear);
          });
          buttonContainer.appendChild(editCalendarBtn);
          
          // View more button
          const viewMoreBtn = document.createElement('a');
          viewMoreBtn.href = `/inspection/inspectionassets.html?maintenanceId=${encodeURIComponent(currentMaintenanceId)}&taskIndex=${index}`;
          viewMoreBtn.className = 'task-date-edit-btn';
          viewMoreBtn.textContent = 'View more';
          viewMoreBtn.style.textDecoration = 'none';
          viewMoreBtn.style.display = 'inline-block';
          buttonContainer.appendChild(viewMoreBtn);
          
          taskDate.appendChild(buttonContainer);
          taskContent.appendChild(taskDate);
          li.appendChild(taskContent);
          
          tasksList.appendChild(li);
        });
      }
    }
  } catch (error) {
    console.error('Error loading inspection tasks:', error);
    alert('Failed to load inspection tasks. Please try again.');
    window.location.replace('/maintenance/maintenance.html');
  }
}

// Add Task Modal Functions
function openAddTaskModal() {
  console.log('openAddTaskModal called');
  if (!addTaskModalOverlay) {
    console.error('Add Task modal overlay not found!');
    return;
  }
  
  if (addTaskForm) {
    addTaskForm.reset();
  }
  
  // Generate calendar based on maintenance frequency
  if (currentMaintenanceData && addTaskScheduleCalendar && addTaskScheduleContainer) {
    const frequency = currentMaintenanceData.frequency || 'Monthly';
    console.log('Generating calendar for frequency:', frequency);
    addTaskScheduleContainer.style.display = 'block';
    generateCalendar(frequency, addTaskScheduleCalendar);
  } else {
    console.warn('Calendar elements not found:', {
      currentMaintenanceData: !!currentMaintenanceData,
      addTaskScheduleCalendar: !!addTaskScheduleCalendar,
      addTaskScheduleContainer: !!addTaskScheduleContainer
    });
  }
  
  addTaskModalOverlay.classList.add('open');
  console.log('Modal opened');
}

function closeAddTaskModal() {
  if (addTaskModalOverlay) {
    addTaskModalOverlay.classList.remove('open');
    if (addTaskForm) {
      addTaskForm.reset();
    }
    if (addTaskScheduleCalendar) {
      addTaskScheduleCalendar.innerHTML = '';
    }
  }
}

// Add Task button click handler
if (addTaskBtn) {
  addTaskBtn.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Add Task button clicked');
    if (!currentMaintenanceId) {
      alert('Maintenance item not loaded. Please wait for the page to finish loading.');
      return;
    }
    if (!currentMaintenanceData) {
      alert('Maintenance data not loaded. Please wait for the page to finish loading.');
      return;
    }
    console.log('Opening Add Task modal');
    openAddTaskModal();
  });
} else {
  console.error('Add Task button not found!');
}

// Close Add Task Modal handlers
if (closeAddTaskModalBtn) {
  closeAddTaskModalBtn.addEventListener('click', closeAddTaskModal);
}

if (cancelAddTaskBtn) {
  cancelAddTaskBtn.addEventListener('click', closeAddTaskModal);
}

if (addTaskModalOverlay) {
  addTaskModalOverlay.addEventListener('click', (e) => {
    if (e.target === addTaskModalOverlay) {
      closeAddTaskModal();
    }
  });
}

// Handle Add Task Form Submission
if (addTaskForm) {
  addTaskForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    if (!currentMaintenanceId || !currentMaintenanceData) {
      alert('Maintenance item not loaded.');
      return;
    }

    if (!saveAddTaskBtn) return;

    saveAddTaskBtn.disabled = true;
    saveAddTaskBtn.textContent = 'Adding...';

    try {
      const formData = new FormData(addTaskForm);
      const newTaskText = formData.get('taskText')?.trim() || '';

      if (!newTaskText) {
        alert('Please enter a task description.');
        saveAddTaskBtn.disabled = false;
        saveAddTaskBtn.textContent = 'Add Task';
        return;
      }

      // Get current inspection tasks
      let inspectionTasks = currentMaintenanceData.inspectionTasks || [];
      if (typeof inspectionTasks === 'string') {
        inspectionTasks = inspectionTasks.split('\n').filter(t => t.trim());
      } else if (!Array.isArray(inspectionTasks)) {
        inspectionTasks = [];
      }

      // Add new task
      inspectionTasks.push(newTaskText);

      // Get selected date from calendar
      const frequency = currentMaintenanceData.frequency || 'Monthly';
      const year = addTaskScheduleCalendar?.querySelector('.calendar-year-select')?.value || new Date().getFullYear();
      const selectedDates = getSelectedDates(addTaskScheduleCalendar, frequency, parseInt(year));
      
      // Validate that at least one date is selected
      const selectedDateKeys = Object.keys(selectedDates);
      if (selectedDateKeys.length === 0) {
        alert('Please select a date for this task based on the frequency.');
        saveAddTaskBtn.disabled = false;
        saveAddTaskBtn.textContent = 'Add Task';
        return;
      }
      
      // Get the first selected date (for single task, we just need one date)
      let selectedDate = selectedDates[selectedDateKeys[0]] || '';

      // Get current taskDates array
      const taskDates = currentMaintenanceData.taskDates || [];
      
      // Add selected date for new task
      taskDates.push(selectedDate);

      // Update Firestore
      await updateDoc(doc(db, 'maintenance', currentMaintenanceId), {
        inspectionTasks: inspectionTasks,
        taskDates: taskDates,
        updatedAt: new Date().toISOString(),
      });

      alert('Task added successfully!');
      closeAddTaskModal();
      
      // Reload tasks to show the new one
      await loadInspectionTasks();
    } catch (error) {
      console.error('Error adding task:', error);
      alert('Failed to add task. Please try again.');
    } finally {
      if (saveAddTaskBtn) {
        saveAddTaskBtn.disabled = false;
        saveAddTaskBtn.textContent = 'Add Task';
      }
    }
  });
}

// Load assets for the location
async function loadAssetsForLocation(location) {
  const assetsSection = document.getElementById('assets-section');
  const assetsList = document.getElementById('assets-list');
  
  if (!assetsSection || !assetsList) return;
  
  if (!location || location.trim() === '') {
    assetsSection.style.display = 'none';
    return;
  }
  
  try {
    const assetsCol = collection(db, 'assets');
    
    // Query assets by location (try both location and locationDescription)
    const locationQuery = query(
      assetsCol,
      where('location', '==', location)
    );
    
    const snap = await getDocs(locationQuery);
    
    assetsList.innerHTML = '';
    
    if (snap.empty) {
      // Try locationDescription if location didn't match
      const locationDescQuery = query(
        assetsCol,
        where('locationDescription', '==', location)
      );
      const descSnap = await getDocs(locationDescQuery);
      
      if (descSnap.empty) {
        const noAssets = document.createElement('div');
        noAssets.className = 'no-assets';
        noAssets.textContent = `No assets found at location: ${location}`;
        assetsList.appendChild(noAssets);
        assetsSection.style.display = 'block';
        return;
      }
      
      // Use locationDescription results
      descSnap.forEach((docSnap) => {
        const asset = docSnap.data();
        createAssetCard(asset, docSnap.id, assetsList);
      });
    } else {
      snap.forEach((docSnap) => {
        const asset = docSnap.data();
        createAssetCard(asset, docSnap.id, assetsList);
      });
    }
    
    assetsSection.style.display = 'block';
  } catch (error) {
    console.error('Error loading assets:', error);
    const errorMsg = document.createElement('div');
    errorMsg.className = 'no-assets';
    errorMsg.textContent = 'Failed to load assets. Please try again.';
    assetsList.appendChild(errorMsg);
    assetsSection.style.display = 'block';
  }
}

function createAssetCard(asset, assetId, container) {
  const card = document.createElement('div');
  card.className = 'asset-card';
  
  const header = document.createElement('div');
  header.className = 'asset-card-header';
  
  const assetIdDiv = document.createElement('div');
  const assetIdText = document.createElement('div');
  assetIdText.className = 'asset-card-id';
  assetIdText.textContent = asset.assetId || assetId;
  assetIdDiv.appendChild(assetIdText);
  
  if (asset.assetCategoryDescription || asset.assetCategory) {
    const category = document.createElement('div');
    category.className = 'asset-card-category';
    category.textContent = asset.assetCategoryDescription || asset.assetCategory;
    assetIdDiv.appendChild(category);
  }
  
  header.appendChild(assetIdDiv);
  card.appendChild(header);
  
  const details = document.createElement('div');
  details.className = 'asset-card-details';
  
  if (asset.assetDescription) {
    const desc = document.createElement('div');
    desc.className = 'asset-card-detail';
    const descLabel = document.createElement('span');
    descLabel.className = 'asset-card-detail-label';
    descLabel.textContent = 'Description:';
    const descValue = document.createElement('span');
    descValue.className = 'asset-card-detail-value';
    descValue.textContent = asset.assetDescription;
    desc.appendChild(descLabel);
    desc.appendChild(descValue);
    details.appendChild(desc);
  }
  
  if (asset.model) {
    const model = document.createElement('div');
    model.className = 'asset-card-detail';
    const modelLabel = document.createElement('span');
    modelLabel.className = 'asset-card-detail-label';
    modelLabel.textContent = 'Model:';
    const modelValue = document.createElement('span');
    modelValue.className = 'asset-card-detail-value';
    modelValue.textContent = asset.model;
    model.appendChild(modelLabel);
    model.appendChild(modelValue);
    details.appendChild(model);
  }
  
  if (asset.serialNo) {
    const serial = document.createElement('div');
    serial.className = 'asset-card-detail';
    const serialLabel = document.createElement('span');
    serialLabel.className = 'asset-card-detail-label';
    serialLabel.textContent = 'Serial:';
    const serialValue = document.createElement('span');
    serialValue.className = 'asset-card-detail-value';
    serialValue.textContent = asset.serialNo;
    serial.appendChild(serialLabel);
    serial.appendChild(serialValue);
    details.appendChild(serial);
  }
  
  if (asset.status) {
    const status = document.createElement('div');
    status.className = 'asset-card-detail';
    const statusLabel = document.createElement('span');
    statusLabel.className = 'asset-card-detail-label';
    statusLabel.textContent = 'Status:';
    const statusValue = document.createElement('span');
    statusValue.className = 'asset-card-detail-value';
    statusValue.textContent = asset.status;
    status.appendChild(statusLabel);
    status.appendChild(statusValue);
    details.appendChild(status);
  }
  
  card.appendChild(details);
  container.appendChild(card);
}

// Task Date Modal Functions
let currentTaskIndex = null;
let currentTaskName = null;
const taskDateModalOverlay = document.getElementById('task-date-modal-overlay');
const taskDateModalTitle = document.getElementById('task-date-modal-title');
const taskDateModalCalendar = document.getElementById('task-date-modal-calendar');
const closeTaskDateModalBtn = document.getElementById('close-task-date-modal-btn');
const cancelTaskDateBtn = document.getElementById('cancel-task-date-btn');
const saveTaskDateBtn = document.getElementById('save-task-date-btn');

// Function to get dates that should be pre-selected for this specific task
// The calendar will show ALL options (all weeks/months/quarters), but we pre-select only this task's dates
function getTaskSpecificDates(taskIndex, frequency, scheduleDates, taskDates, year) {
  const filteredDates = {};
  const taskDateValue = taskDates && taskDates[taskIndex] ? taskDates[taskIndex] : null;
  
  if (!scheduleDates || Object.keys(scheduleDates).length === 0) {
    // If no scheduleDates, return empty (calendar will show unselected)
    return filteredDates;
  }
  
  // For now, we'll show all scheduleDates that match the year
  // The calendar generator will show all options (weeks 1-4, all months, all quarters)
  // and pre-select the ones that are in scheduleDates
  Object.keys(scheduleDates).forEach(dateKey => {
    const parts = dateKey.split('-');
    const y = parts[0];
    if (y == year) {
      // Include dates for this year - the calendar will show all options
      // but only pre-select the ones that exist in scheduleDates
      filteredDates[dateKey] = scheduleDates[dateKey];
    }
  });
  
  return filteredDates;
}

function openTaskDateModal(taskIndex, taskName, currentDate, frequency, scheduleDates, scheduleYear) {
  currentTaskIndex = taskIndex;
  currentTaskName = taskName;
  
  if (taskDateModalTitle) {
    taskDateModalTitle.textContent = `Edit Calendar: ${taskName}`;
  }
  
  // Generate full calendar with task-specific dates pre-populated
  if (taskDateModalCalendar) {
    taskDateModalCalendar.innerHTML = '';
    
    const year = scheduleYear || new Date().getFullYear();
    const taskDates = currentMaintenanceData?.taskDates || [];
    
    // Filter scheduleDates to show only dates relevant to this task's frequency pattern
    const taskSpecificDates = getTaskSpecificDates(taskIndex, frequency, scheduleDates || {}, taskDates, year);
    
    // Use the same calendar generator as the maintenance form
    // The calendar will show:
    // - Weekly: All weeks 1-4 for each month
    // - Monthly: All 12 months
    // - Quarterly: All 4 quarters
    // Pass task-specific dates to pre-populate the calendar
    generateCalendar(frequency, taskDateModalCalendar, taskSpecificDates);
    
    // Set the year if provided (must be done after generateCalendar)
    setTimeout(() => {
      if (scheduleYear) {
        const yearSelect = taskDateModalCalendar.querySelector('.calendar-year-select');
        if (yearSelect) {
          yearSelect.value = scheduleYear;
          // Trigger change to regenerate calendar with correct year and dates
          const changeEvent = new Event('change', { bubbles: true });
          yearSelect.dispatchEvent(changeEvent);
        }
      }
    }, 100);
  }
  
  if (taskDateModalOverlay) {
    taskDateModalOverlay.classList.add('open');
  }
}

function closeTaskDateModal() {
  if (taskDateModalOverlay) {
    taskDateModalOverlay.classList.remove('open');
  }
  currentTaskIndex = null;
  currentTaskName = null;
}

if (closeTaskDateModalBtn) {
  closeTaskDateModalBtn.addEventListener('click', closeTaskDateModal);
}

if (cancelTaskDateBtn) {
  cancelTaskDateBtn.addEventListener('click', closeTaskDateModal);
}

if (taskDateModalOverlay) {
  taskDateModalOverlay.addEventListener('click', (e) => {
    if (e.target === taskDateModalOverlay) {
      closeTaskDateModal();
    }
  });
}

// Save task date from modal
if (saveTaskDateBtn) {
  saveTaskDateBtn.addEventListener('click', async () => {
    if (currentTaskIndex === null || !currentMaintenanceId || !currentMaintenanceData) {
      alert('No task selected.');
      return;
    }

    // Get selected dates from the calendar
    const frequency = currentMaintenanceData.frequency || 'Monthly';
    const year = taskDateModalCalendar?.querySelector('.calendar-year-select')?.value || new Date().getFullYear();
    const selectedDates = getSelectedDates(taskDateModalCalendar, frequency, parseInt(year));
    
    if (!selectedDates || Object.keys(selectedDates).length === 0) {
      alert('Please select at least one date.');
      return;
    }

    saveTaskDateBtn.disabled = true;
    saveTaskDateBtn.textContent = 'Saving...';

    try {
      // Update scheduleDates with the new selected dates
      const scheduleDates = currentMaintenanceData.scheduleDates || {};
      Object.assign(scheduleDates, selectedDates);
      
      // Update taskDates array - for this specific task, use the first selected date
      const taskDates = currentMaintenanceData.taskDates || [];
      const selectedDateKeys = Object.keys(selectedDates);
      if (selectedDateKeys.length > 0) {
        // Use the first selected date for this task
        taskDates[currentTaskIndex] = selectedDates[selectedDateKeys[0]];
      }
      
      await updateDoc(doc(db, 'maintenance', currentMaintenanceId), {
        scheduleDates: scheduleDates,
        scheduleYear: parseInt(year),
        taskDates: taskDates,
        updatedAt: new Date().toISOString()
      });
      
      // Update local data
      currentMaintenanceData.scheduleDates = scheduleDates;
      currentMaintenanceData.scheduleYear = parseInt(year);
      currentMaintenanceData.taskDates = taskDates;
      
      alert('Calendar saved successfully!');
      closeTaskDateModal();
      
      // Reload the inspection tasks to show updated date
      loadInspectionTasks();
    } catch (error) {
      console.error('Error saving task calendar:', error);
      alert('Failed to save calendar. Please try again.');
    } finally {
      saveTaskDateBtn.disabled = false;
      saveTaskDateBtn.textContent = 'Save Date';
    }
  });
}

// Function to save individual task date (kept for backward compatibility)
async function saveTaskDate(taskIndex, dateValue) {
  if (!currentMaintenanceId || !currentMaintenanceData) return;
  
  try {
    const taskDates = currentMaintenanceData.taskDates || [];
    taskDates[taskIndex] = dateValue;
    
    await updateDoc(doc(db, 'maintenance', currentMaintenanceId), {
      taskDates: taskDates,
      updatedAt: new Date().toISOString()
    });
    
    // Update local data
    currentMaintenanceData.taskDates = taskDates;
    
    // Reload to show updated date
    loadInspectionTasks();
  } catch (error) {
    console.error('Error saving task date:', error);
    alert('Failed to save date. Please try again.');
  }
}

loadInspectionTasks();

// Show/hide calendar in edit form based on frequency
if (editFrequencySelect && editScheduleContainer && editScheduleCalendar) {
  editFrequencySelect.addEventListener('change', (e) => {
    const frequency = e.target.value;
    if (frequency) {
      editScheduleContainer.style.display = 'block';
      const selectedDates = currentMaintenanceData?.scheduleDates || {};
      const year = currentMaintenanceData?.scheduleYear || new Date().getFullYear();
      generateCalendar(frequency, editScheduleCalendar, selectedDates);
    } else {
      editScheduleContainer.style.display = 'none';
      editScheduleCalendar.innerHTML = '';
    }
  });
}

// Three-dot menu toggle
if (inspectionActionsBtn && inspectionActionsMenu) {
  inspectionActionsBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    inspectionActionsMenu.classList.toggle('open');
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!inspectionActionsBtn.contains(e.target) && !inspectionActionsMenu.contains(e.target)) {
      inspectionActionsMenu.classList.remove('open');
    }
  });
}

// Edit maintenance handler
if (editMaintenanceBtn) {
  editMaintenanceBtn.addEventListener('click', () => {
    inspectionActionsMenu.classList.remove('open');
    openEditModal();
  });
}

function openEditModal() {
  if (!currentMaintenanceData || !currentMaintenanceId) {
    alert('Maintenance data not loaded.');
    return;
  }

  // Populate form fields
  document.getElementById('edit-branch').value = currentMaintenanceData.branch || '';
  document.getElementById('edit-location').value = currentMaintenanceData.location || '';
  document.getElementById('edit-itemName').value = currentMaintenanceData.itemName || '';
  const frequency = currentMaintenanceData.frequency || 'Monthly';
  document.getElementById('edit-frequency').value = frequency;
  
  // Handle inspection tasks (array or string)
  let inspectionTasks = currentMaintenanceData.inspectionTasks || [];
  if (typeof inspectionTasks === 'string') {
    inspectionTasks = inspectionTasks.split('\n').filter(t => t.trim());
  } else if (!Array.isArray(inspectionTasks)) {
    inspectionTasks = [];
  }
  document.getElementById('edit-inspectionTasks').value = inspectionTasks.join('\n');

  // Show calendar if frequency is set
  if (frequency && editScheduleContainer && editScheduleCalendar) {
    editScheduleContainer.style.display = 'block';
    const selectedDates = currentMaintenanceData.scheduleDates || {};
    const year = currentMaintenanceData.scheduleYear || new Date().getFullYear();
    generateCalendar(frequency, editScheduleCalendar, selectedDates);
  } else {
    if (editScheduleContainer) {
      editScheduleContainer.style.display = 'none';
    }
  }

  editModalOverlay.classList.add('open');
}

function closeEditModal() {
  editModalOverlay.classList.remove('open');
}

if (closeModalBtn) {
  closeModalBtn.addEventListener('click', closeEditModal);
}

if (cancelEditBtn) {
  cancelEditBtn.addEventListener('click', closeEditModal);
}

if (editModalOverlay) {
  editModalOverlay.addEventListener('click', (e) => {
    if (e.target === editModalOverlay) {
      closeEditModal();
    }
  });
}

// Save edit form
if (editMaintenanceForm) {
  editMaintenanceForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    if (!currentMaintenanceId) {
      alert('No maintenance item selected.');
      return;
    }

    saveEditBtn.disabled = true;
    saveEditBtn.textContent = 'Saving...';

    try {
      const formData = new FormData(editMaintenanceForm);
      const inspectionTasksText = formData.get('inspectionTasks')?.trim() || '';
      const inspectionTasks = inspectionTasksText.split('\n')
        .map(t => t.trim())
        .filter(t => t.length > 0);
      
      const frequency = formData.get('frequency') || 'Monthly';
      const year = editScheduleCalendar?.querySelector('.calendar-year-select')?.value || currentMaintenanceData?.scheduleYear || new Date().getFullYear();
      const selectedDates = getSelectedDates(editScheduleCalendar, frequency, parseInt(year));
      
      // Create taskDates array from scheduleDates
      const taskDates = [];
      if (frequency === 'Weekly') {
        inspectionTasks.forEach((task, taskIndex) => {
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
        inspectionTasks.forEach((task, taskIndex) => {
          const monthIndex = taskIndex % 12;
          const dateKey = `${year}-${monthIndex}`;
          taskDates[taskIndex] = selectedDates[dateKey] || '';
        });
      } else if (frequency === 'Quarterly') {
        inspectionTasks.forEach((task, taskIndex) => {
          const quarter = Math.floor(taskIndex / 3);
          const monthInQuarter = taskIndex % 3;
          const dateKey = `${year}-${quarter}-${monthInQuarter}`;
          taskDates[taskIndex] = selectedDates[dateKey] || '';
        });
      }
      
      // Preserve existing taskDates if they exist and are valid
      const existingTaskDates = currentMaintenanceData?.taskDates || [];
      inspectionTasks.forEach((task, taskIndex) => {
        if (existingTaskDates[taskIndex] && !taskDates[taskIndex]) {
          taskDates[taskIndex] = existingTaskDates[taskIndex];
        }
      });

      const updateData = {
        branch: formData.get('branch')?.trim() || '',
        location: formData.get('location')?.trim() || '',
        itemName: formData.get('itemName')?.trim() || '',
        frequency: frequency,
        inspectionTasks: inspectionTasks,
        scheduleDates: selectedDates,
        scheduleYear: parseInt(year),
        taskDates: taskDates,
        updatedAt: new Date().toISOString(),
      };

      // Validate required fields
      if (!updateData.branch || !updateData.location || !updateData.itemName || inspectionTasks.length === 0) {
        alert('All fields are required. Please fill in all fields.');
        saveEditBtn.disabled = false;
        saveEditBtn.textContent = 'Save Changes';
        return;
      }

      await updateDoc(doc(db, 'maintenance', currentMaintenanceId), updateData);
      alert('Maintenance item updated successfully!');
      closeEditModal();
      // Reload maintenance details
      loadInspectionTasks();
    } catch (error) {
      console.error('Error updating maintenance item:', error);
      alert('Failed to update maintenance item. Please try again.');
    } finally {
      saveEditBtn.disabled = false;
      saveEditBtn.textContent = 'Save Changes';
    }
  });
}

// Delete maintenance handler
if (deleteMaintenanceBtn) {
  deleteMaintenanceBtn.addEventListener('click', async () => {
    inspectionActionsMenu.classList.remove('open');

    if (!currentMaintenanceId) {
      alert('No maintenance item selected.');
      return;
    }

    // Warning confirmation
    const confirmMessage = 'Are you sure you want to delete this maintenance item?\n\nThis action cannot be undone and the maintenance item will be permanently removed from the database.';
    if (!confirm(confirmMessage)) {
      return;
    }

    // Double confirmation
    const doubleConfirm = confirm('⚠️ WARNING: This will permanently delete the maintenance item from the database.\n\nClick OK to confirm deletion.');
    if (!doubleConfirm) {
      return;
    }

    try {
      await deleteDoc(doc(db, 'maintenance', currentMaintenanceId));
      alert('Maintenance item deleted successfully!');
      window.location.replace('/maintenance/maintenance.html');
    } catch (error) {
      console.error('Error deleting maintenance item:', error);
      alert('Failed to delete maintenance item. Please try again.');
    }
  });
}
