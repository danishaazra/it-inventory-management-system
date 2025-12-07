import { auth, db } from '../authentication/firebase.js';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { getDoc, getDocs, doc, collection, addDoc, query, limit } from 'firebase/firestore';
import * as XLSX from 'xlsx';

// Enable offline persistence for better performance (non-blocking)
// This runs in background and won't block page load
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
const addAssetBtnTable = document.getElementById('add-asset-btn-table');
const addAssetMenuTable = document.getElementById('add-asset-menu-table');
const assetFileInput = document.getElementById('asset-file-input');
const assetTableBody = document.getElementById('asset-table-body');
const locationDescriptionSelect = document.getElementById('add-locationDescription');
const locationDescriptionCustom = document.getElementById('add-locationDescription-custom');
const toggleCustomLocation = document.getElementById('toggle-custom-location');

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

function bindAddAssetDropdown(trigger, menu) {
  if (!trigger || !menu) return;

  trigger.addEventListener('click', (e) => {
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
      if (assetFileInput) {
        assetFileInput.click();
      }
    }
    menu.classList.remove('open');
  });

  document.addEventListener('click', () => {
    menu.classList.remove('open');
  });
}

bindAddAssetDropdown(addAssetBtnTable, addAssetMenuTable);

// Add Asset Modal Functions
const addModalOverlay = document.getElementById('add-modal-overlay');
const closeAddModalBtn = document.getElementById('close-add-modal-btn');
const cancelAddBtn = document.getElementById('cancel-add-btn');
const addAssetForm = document.getElementById('add-asset-form');
const saveAddBtn = document.getElementById('save-add-btn');

// Cache for location descriptions (10 minutes)
let locationDescriptionsCache = null;
let locationDescriptionsCacheTime = 0;
const CACHE_DURATION = 10 * 60 * 1000; // 10 minutes

// Load locations from inspection task names to populate dropdown
// This ensures consistency: asset.locationDescription should match inspection task names
async function loadMaintenanceLocations() {
  if (!locationDescriptionSelect) return;
  
  // Check cache first
  const now = Date.now();
  if (locationDescriptionsCache && (now - locationDescriptionsCacheTime) < CACHE_DURATION) {
    populateLocationDropdown(locationDescriptionsCache);
    return;
  }
  
  // Show loading state
  if (locationDescriptionSelect) {
    const loadingOption = document.createElement('option');
    loadingOption.value = '';
    loadingOption.textContent = 'Loading locations...';
    loadingOption.disabled = true;
    locationDescriptionSelect.innerHTML = '';
    locationDescriptionSelect.appendChild(loadingOption);
  }
  
  try {
    const startTime = performance.now();
    const locations = new Set();
    
    // Load maintenance and assets in parallel with limits for better performance
    // Limit queries to reduce data transfer
    const maintenanceQuery = query(collection(db, 'maintenance'), limit(100));
    const assetsQuery = query(collection(db, 'assets'), limit(500));
    const [maintenanceSnap, assetsSnap] = await Promise.all([
      getDocs(maintenanceQuery).catch(err => {
        console.error('Error loading maintenance:', err);
        return { docs: [], empty: true, forEach: () => {} }; // Return empty snapshot on error
      }),
      getDocs(assetsQuery).catch(err => {
        console.error('Error loading assets:', err);
        return { docs: [], empty: true, forEach: () => {} }; // Return empty snapshot on error
      })
    ]);
    
    // Get all inspection task names from maintenance (these are the location descriptions)
    maintenanceSnap.forEach((docSnap) => {
      const m = docSnap.data();
      // Inspection tasks are the location descriptions
      const inspectionTasks = Array.isArray(m.inspectionTasks) 
        ? m.inspectionTasks 
        : (typeof m.inspectionTasks === 'string' ? m.inspectionTasks.split('\n').filter(t => t.trim()) : []);
      
      inspectionTasks.forEach(task => {
        if (task && task.trim() !== '') {
          locations.add(task.trim());
        }
      });
    });
    
    // Also get locations from existing assets' locationDescription (for consistency)
    assetsSnap.forEach((docSnap) => {
      const asset = docSnap.data();
      if (asset.locationDescription && asset.locationDescription.trim() !== '') {
        locations.add(asset.locationDescription.trim());
      }
    });
    
    const loadTime = performance.now() - startTime;
    console.log(`Loaded ${locations.size} locations in ${loadTime.toFixed(2)}ms`);
    
    // Update cache
    locationDescriptionsCache = Array.from(locations).sort();
    locationDescriptionsCacheTime = now;
    
    populateLocationDropdown(locationDescriptionsCache);
  } catch (error) {
    console.error('Error loading locations:', error);
    if (locationDescriptionSelect) {
      locationDescriptionSelect.innerHTML = '<option value="">Error loading locations</option>';
    }
  }
}

function populateLocationDropdown(locations) {
  if (!locationDescriptionSelect) return;
  
  // Clear existing options except the first one
  locationDescriptionSelect.innerHTML = '<option value="">Select location...</option>';
  
  // Add locations sorted alphabetically
  locations.forEach(location => {
    const option = document.createElement('option');
    option.value = location;
    option.textContent = location;
    locationDescriptionSelect.appendChild(option);
  });
}

// Toggle custom location input
if (toggleCustomLocation && locationDescriptionCustom) {
  toggleCustomLocation.addEventListener('click', () => {
    if (locationDescriptionCustom.style.display === 'none') {
      locationDescriptionCustom.style.display = 'block';
      toggleCustomLocation.textContent = 'Use dropdown';
      locationDescriptionSelect.value = '';
    } else {
      locationDescriptionCustom.style.display = 'none';
      locationDescriptionCustom.value = '';
      toggleCustomLocation.textContent = '+ Add custom location';
    }
  });
}

function openAddModal() {
  if (addModalOverlay) {
    // Reset form
    if (addAssetForm) {
      addAssetForm.reset();
      // Reset custom location toggle
      if (locationDescriptionCustom) {
        locationDescriptionCustom.style.display = 'none';
      }
      if (toggleCustomLocation) {
        toggleCustomLocation.textContent = '+ Add custom location';
      }
    }
    // Load maintenance locations
    loadMaintenanceLocations();
    addModalOverlay.classList.add('open');
  }
}

function closeAddModal() {
  if (addModalOverlay) {
    addModalOverlay.classList.remove('open');
    if (addAssetForm) {
      addAssetForm.reset();
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

// Handle Add Asset Form Submission
if (addAssetForm) {
  addAssetForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    if (!saveAddBtn) return;

    saveAddBtn.disabled = true;
    saveAddBtn.textContent = 'Adding...';

    try {
      const formData = new FormData(addAssetForm);
      
      // Get location description from dropdown or custom input
      // Normalize to match inspection task names (preserve original case but ensure consistency)
      let locationDesc = locationDescriptionCustom && locationDescriptionCustom.style.display !== 'none'
        ? formData.get('locationDescriptionCustom')?.trim() || ''
        : formData.get('locationDescription')?.trim() || '';
      
      // Try to match with existing inspection task names (case-insensitive) to preserve exact case
      if (locationDesc) {
        const locationDescLower = locationDesc.toLowerCase().trim();
        
        // Use cache if available, otherwise load from database
        let allTasks = [];
        const now = Date.now();
        if (locationDescriptionsCache && (now - locationDescriptionsCacheTime) < CACHE_DURATION) {
          // Use cached data - but we need the exact case, so we still need to query
          // For now, just use the input as-is if cache exists (performance trade-off)
          // If exact case matching is critical, we'd need a separate cache for task names
        } else {
          // Load from database and cache (with limit for performance)
          try {
            const maintenanceQuery = query(collection(db, 'maintenance'), limit(100));
            const maintenanceSnap = await getDocs(maintenanceQuery);
            for (const docSnap of maintenanceSnap.docs) {
              const m = docSnap.data();
              const inspectionTasks = Array.isArray(m.inspectionTasks) 
                ? m.inspectionTasks 
                : (typeof m.inspectionTasks === 'string' ? m.inspectionTasks.split('\n').filter(t => t.trim()) : []);
              
              for (const task of inspectionTasks) {
                if (task && task.trim().toLowerCase() === locationDescLower) {
                  locationDesc = task.trim(); // Use the exact case from inspection task
                  break;
                }
              }
              if (locationDesc !== locationDescLower) break; // Found match, exit loop
            }
          } catch (err) {
            console.warn('Error loading maintenance for location matching:', err);
            // Continue with original locationDesc if query fails
          }
        }
      }

      const assetData = {
        no: formData.get('no')?.trim() || '',
        branchCode: formData.get('branchCode')?.trim() || '',
        assetId: formData.get('assetId')?.trim(),
        assetDescription: formData.get('assetDescription')?.trim() || '',
        assetCategory: formData.get('assetCategory')?.trim() || '',
        assetCategoryDescription: formData.get('assetCategoryDescription')?.trim() || '',
        ownerCode: formData.get('ownerCode')?.trim() || '',
        ownerName: formData.get('ownerName')?.trim() || '',
        model: formData.get('model')?.trim() || '',
        brand: formData.get('brand')?.trim() || '',
        status: formData.get('status') || 'Active',
        warrantyPeriod: formData.get('warrantyPeriod')?.trim() || '',
        serialNo: formData.get('serialNo')?.trim() || '',
        location: formData.get('location')?.trim() || '',
        locationDescription: locationDesc,
        area: formData.get('area')?.trim() || '',
        departmentCode: formData.get('departmentCode')?.trim() || '',
        departmentDescription: formData.get('departmentDescription')?.trim() || '',
        condition: formData.get('condition') || '',
        currentUser: formData.get('currentUser')?.trim() || '',
        createdAt: new Date().toISOString(),
      };

      // Remove empty string values
      Object.keys(assetData).forEach(key => {
        if (key !== 'createdAt' && assetData[key] === '') {
          delete assetData[key];
        }
      });

      // Validate required field
      if (!assetData.assetId) {
        alert('Asset ID is required.');
        saveAddBtn.disabled = false;
        saveAddBtn.textContent = 'Add Asset';
        return;
      }

      await addDoc(collection(db, 'assets'), assetData);
      
      // Invalidate location cache since we added a new asset
      locationDescriptionsCache = null;
      locationDescriptionsCacheTime = 0;
      
      alert('Asset added successfully!');
      closeAddModal();
      // Reload asset table
      await loadAssetsIntoTable();
    } catch (error) {
      console.error('Error adding asset:', error);
      alert('Failed to add asset. Please try again.');
    } finally {
      if (saveAddBtn) {
        saveAddBtn.disabled = false;
        saveAddBtn.textContent = 'Add Asset';
      }
    }
  });
}

async function loadAssetsIntoTable() {
  if (!assetTableBody) return;
  
  // Show loading state
  assetTableBody.innerHTML = '<tr><td colspan="8" style="text-align: center; padding: 2rem; color: #666;">Loading assets...</td></tr>';
  
  try {
    const startTime = performance.now();
    // Use query with limit for better performance
    // Limit to 1000 assets initially (adjust based on your needs)
    // Removed orderBy to avoid index requirement - can add back after creating index
    const assetsQuery = query(
      collection(db, 'assets'),
      limit(1000)
    );
    const snap = await getDocs(assetsQuery);
    const loadTime = performance.now() - startTime;
    console.log(`Loaded ${snap.size} assets in ${loadTime.toFixed(2)}ms`);
    
    assetTableBody.innerHTML = '';
    
    if (snap.empty) {
      const tr = document.createElement('tr');
      const td = document.createElement('td');
      td.colSpan = 8;
      td.textContent = 'No assets found. Upload a file to add assets.';
      td.style.color = '#666';
      tr.appendChild(td);
      assetTableBody.appendChild(tr);
      return;
    }

    // Render assets in batches to avoid blocking UI
    const assets = [];
    snap.forEach((docSnap) => {
      assets.push({ id: docSnap.id, data: docSnap.data() });
    });

    // Render first 50 immediately, then batch the rest
    const batchSize = 50;
    const firstBatch = assets.slice(0, batchSize);
    const remaining = assets.slice(batchSize);

    // Render first batch
    firstBatch.forEach(({ id, data: a }) => {
      const tr = document.createElement('tr');
      
      // Create cells using textContent to prevent XSS
      const cells = [
        a.assetId || '',
        a.assetDescription || '',
        a.assetCategoryDescription || a.assetCategory || '',
        a.model || '',
        a.serialNo || '',
        a.location || '',
        a.area || ''
      ];
      
      cells.forEach(cellValue => {
        const td = document.createElement('td');
        td.textContent = cellValue;
        tr.appendChild(td);
      });
      
      // Add action link cell
      const actionTd = document.createElement('td');
      const actionLink = document.createElement('a');
      actionLink.className = 'action-link';
      actionLink.href = `assetdetails.html?id=${encodeURIComponent(id)}`;
      actionLink.textContent = 'View more';
      actionTd.appendChild(actionLink);
      tr.appendChild(actionTd);
      
      assetTableBody.appendChild(tr);
    });

    // Render remaining assets in batches to keep UI responsive
    if (remaining.length > 0) {
      let currentIndex = 0;
      const renderBatch = () => {
        const batch = remaining.slice(currentIndex, currentIndex + batchSize);
        batch.forEach(({ id, data: a }) => {
          const tr = document.createElement('tr');
          
          const cells = [
            a.assetId || '',
            a.assetDescription || '',
            a.assetCategoryDescription || a.assetCategory || '',
            a.model || '',
            a.serialNo || '',
            a.location || '',
            a.area || ''
          ];
          
          cells.forEach(cellValue => {
            const td = document.createElement('td');
            td.textContent = cellValue;
            tr.appendChild(td);
          });
          
          const actionTd = document.createElement('td');
          const actionLink = document.createElement('a');
          actionLink.className = 'action-link';
          actionLink.href = `assetdetails.html?id=${encodeURIComponent(id)}`;
          actionLink.textContent = 'View more';
          actionTd.appendChild(actionLink);
          tr.appendChild(actionTd);
          
          assetTableBody.appendChild(tr);
        });
        
        currentIndex += batchSize;
        if (currentIndex < remaining.length) {
          // Use requestAnimationFrame for smooth rendering
          requestAnimationFrame(renderBatch);
        }
      };
      requestAnimationFrame(renderBatch);
    }
  } catch (err) {
    console.error('Error loading assets:', err);
    assetTableBody.innerHTML = '';
    const tr = document.createElement('tr');
    const td = document.createElement('td');
    td.colSpan = 8;
    td.textContent = 'Failed to load assets. Please refresh.';
    td.style.color = '#b91c1c';
    tr.appendChild(td);
    assetTableBody.appendChild(tr);
  }
}

// Handle Excel file upload and push rows to Firestore
if (assetFileInput) {
  assetFileInput.addEventListener('change', async (e) => {
    const file = e.target.files[0];
    if (!file) return;

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

      // Assume fixed column order as provided:
      // No, Branch Code, Asset ID, Asset Description, Asset Category,
      // Asset Category Description, Owner Code, Owner Name, Model, Brand,
      // Status, Warranty Period, Serial No, Location, Location Description, Area,
      // Department Code, Department Description, Condition, Current User
      const dataRows = rows.slice(1);
      const assetsCol = collection(db, 'assets');

      const writes = dataRows
        .filter(r => r && r.length > 0 && String(r[2] || '').trim() !== '')
        .map((r) => {
          const asset = {
            no: String(r[0] ?? '').trim(),
            branchCode: String(r[1] ?? '').trim(),
            assetId: String(r[2] ?? '').trim(),
            assetDescription: String(r[3] ?? '').trim(),
            assetCategory: String(r[4] ?? '').trim(),
            assetCategoryDescription: String(r[5] ?? '').trim(),
            ownerCode: String(r[6] ?? '').trim(),
            ownerName: String(r[7] ?? '').trim(),
            model: String(r[8] ?? '').trim(),
            brand: String(r[9] ?? '').trim(),
            status: String(r[10] ?? '').trim(),
            warrantyPeriod: String(r[11] ?? '').trim(),
            serialNo: String(r[12] ?? '').trim(),
            location: String(r[13] ?? '').trim(),
            locationDescription: String(r[14] ?? '').trim(),
            area: String(r[15] ?? '').trim(),
            departmentCode: String(r[16] ?? '').trim(),
            departmentDescription: String(r[17] ?? '').trim(),
            condition: String(r[18] ?? '').trim(),
            currentUser: String(r[19] ?? '').trim(),
            sourceFile: file.name,
            createdAt: new Date().toISOString(),
          };
          return addDoc(assetsCol, asset);
        });

      // Invalidate location cache after bulk upload
      locationDescriptionsCache = null;
      locationDescriptionsCacheTime = 0;

      if (writes.length === 0) {
        alert('No valid asset rows found in the file.');
        return;
      }

      await Promise.all(writes);
      alert(`Successfully uploaded ${writes.length} assets.`);
      await loadAssetsIntoTable();
    } catch (err) {
      console.error('Error importing assets file:', err);
      alert('Failed to import file. Please check the format and try again.');
    } finally {
      assetFileInput.value = '';
    }
  });
}

// Initial table load
loadAssetsIntoTable();

// Sidebar toggle functionality
const sidebar = document.getElementById('sidebar');
const toggleBtn = document.getElementById('sidebar-toggle-btn');
const toggleIcon = document.getElementById('toggle-icon');

if (sidebar && toggleBtn && toggleIcon) {
  // Load saved state from localStorage
  const savedState = localStorage.getItem('sidebarCollapsed');
  if (savedState === 'true') {
    sidebar.classList.add('collapsed');
    toggleIcon.textContent = '→';
  } else {
    toggleIcon.textContent = '☰';
  }
  
  // Toggle on button click
  toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    sidebar.classList.toggle('collapsed');
    
    // Update icon and save state
    if (sidebar.classList.contains('collapsed')) {
      toggleIcon.textContent = '→';
      localStorage.setItem('sidebarCollapsed', 'true');
    } else {
      toggleIcon.textContent = '☰';
      localStorage.setItem('sidebarCollapsed', 'false');
    }
  });
}

// Logout handler
const logoutBtn = document.getElementById('logout-btn');
if (logoutBtn) {
  logoutBtn.addEventListener('click', async () => {
    try {
      await signOut(auth);
      window.location.href = '../index.html';
    } catch (error) {
      console.error("Logout error:", error);
      alert('Error logging out. Please try again.');
    }
  });
}
