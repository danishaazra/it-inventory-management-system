// Import shared components first (includes authGuard)
import '../shared/init.js';

import { auth, db } from '../authentication/firebase.js';
import { onAuthStateChanged } from 'firebase/auth';
import { getDoc, doc, collection, query, where, getDocs, updateDoc, deleteDoc, arrayUnion, arrayRemove } from 'firebase/firestore';

const nameEl = document.getElementById('user-name');
const avatarEl = document.getElementById('user-avatar');
const backLink = document.getElementById('back-link');
const assetsRemaining = document.getElementById('assets-remaining');
const daysRemaining = document.getElementById('days-remaining');
const assetsList = document.getElementById('assets-list');
const pageTitle = document.getElementById('page-title');
const addAssetBtn = document.getElementById('add-asset-btn');
const addAssetModalOverlay = document.getElementById('add-asset-modal-overlay');
const closeAddAssetModalBtn = document.getElementById('close-add-asset-modal-btn');
const cancelAddAssetBtn = document.getElementById('cancel-add-asset-btn');
const saveAddAssetBtn = document.getElementById('save-add-asset-btn');
const assetSelectList = document.getElementById('asset-select-list');
const inspectionModalOverlay = document.getElementById('inspection-modal-overlay');
const closeInspectionModalBtn = document.getElementById('close-inspection-modal-btn');
const cancelInspectionBtn = document.getElementById('cancel-inspection-btn');
const saveInspectionBtn = document.getElementById('save-inspection-btn');
const inspectionForm = document.getElementById('inspection-form');
const inspectionNotes = document.getElementById('inspection-notes');

let currentMaintenanceId = null;
let currentTaskIndex = null;
let currentMaintenanceData = null;
let selectedAssetsForTask = [];
let currentInspectionAssetId = null;

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
    
    // Load inspection assets after user is authenticated
    await loadInspectionAssets();
  } catch (error) {
    console.error('Error loading user data:', error);
  }
});

async function loadInspectionAssets() {
  const urlParams = new URLSearchParams(window.location.search);
  const maintenanceId = urlParams.get('maintenanceId');
  const taskIndex = parseInt(urlParams.get('taskIndex') || '0');

  if (!maintenanceId) {
    alert('No maintenance item ID provided.');
    window.location.replace('/maintenance/maintenance.html');
    return;
  }

  currentMaintenanceId = maintenanceId;
  currentTaskIndex = taskIndex;

  try {
    const snap = await getDoc(doc(db, 'maintenance', maintenanceId));
    if (!snap.exists()) {
      alert('Maintenance item not found.');
      window.location.replace('/maintenance/maintenance.html');
      return;
    }

    const m = snap.data();
    currentMaintenanceData = m;

    // Update back link
    if (backLink) {
      backLink.href = `/inspection/inspectiontask.html?id=${encodeURIComponent(maintenanceId)}`;
    }

    // Update page title with task name
    const inspectionTasks = Array.isArray(m.inspectionTasks) 
      ? m.inspectionTasks 
      : (typeof m.inspectionTasks === 'string' ? m.inspectionTasks.split('\n').filter(t => t.trim()) : []);
    if (inspectionTasks[taskIndex] && pageTitle) {
      pageTitle.textContent = inspectionTasks[taskIndex];
    }

    // Calculate days until next maintenance
    const taskDates = m.taskDates || [];
    let taskDateValue = taskDates[taskIndex] || '';
    
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
      
      if (daysRemaining) {
        // Always show as upcoming (never overdue)
        if (daysDiff === 0) {
          daysRemaining.textContent = 'Today';
          daysRemaining.style.color = '#dc2626';
        } else if (daysDiff === 1) {
          daysRemaining.textContent = 'Tomorrow';
          daysRemaining.style.color = '#92400e';
        } else {
          daysRemaining.textContent = `${daysDiff} days remaining`;
          daysRemaining.style.color = '#140958';
        }
      }
    } else {
      if (daysRemaining) {
        daysRemaining.textContent = 'Not scheduled';
        daysRemaining.style.color = '#6b7280';
      }
    }

    // Load manually assigned assets for this inspection task
    await loadInspectionTaskAssets();
  } catch (error) {
    console.error('Error loading inspection assets:', error);
    alert('Failed to load inspection assets. Please try again.');
    window.location.replace('/maintenance/maintenance.html');
  }
}

async function loadInspectionTaskAssets() {
  if (!currentMaintenanceId || currentTaskIndex === null) {
    if (assetsList) {
      assetsList.innerHTML = '<div class="no-assets">No maintenance item or task specified.</div>';
    }
    if (assetsRemaining) {
      assetsRemaining.textContent = '0';
    }
    return;
  }

  try {
    // Get the list of asset IDs assigned to this inspection task
    // Store in maintenance document: inspectionTaskAssets[taskIndex] = [assetId1, assetId2, ...]
    const maintenanceDoc = await getDoc(doc(db, 'maintenance', currentMaintenanceId));
    if (!maintenanceDoc.exists()) {
      if (assetsList) {
        assetsList.innerHTML = '<div class="no-assets">Maintenance item not found.</div>';
      }
      return;
    }

    const maintenanceData = maintenanceDoc.data();
    const inspectionTaskAssets = maintenanceData.inspectionTaskAssets || {};
    const assetIds = inspectionTaskAssets[currentTaskIndex] || [];
    const inspectionData = maintenanceData.inspectionData || {};
    const taskInspectionData = inspectionData[currentTaskIndex] || {};
    selectedAssetsForTask = assetIds;

    if (assetIds.length === 0) {
      if (assetsList) {
        assetsList.innerHTML = '<div class="no-assets">No assets assigned to this inspection task. Click "Add Asset" to select assets.</div>';
      }
      if (assetsRemaining) {
        assetsRemaining.textContent = '0';
      }
      return;
    }

    // Fetch asset details for each assigned asset ID
    const assetsCol = collection(db, 'assets');
    const assetPromises = assetIds.map(assetId => getDoc(doc(assetsCol, assetId)));
    const assetDocs = await Promise.all(assetPromises);
    
    const assignedAssets = [];
    assetDocs.forEach((assetDoc, index) => {
      if (assetDoc.exists()) {
        const assetId = assetIds[index];
        const assetInspection = taskInspectionData[assetId] || null;
        assignedAssets.push({ 
          id: assetId, 
          ...assetDoc.data(),
          inspection: assetInspection
        });
      }
    });

    // Update assets remaining count
    if (assetsRemaining) {
      assetsRemaining.textContent = assignedAssets.length;
    }

    // Display assets in table format
    if (assetsList) {
      assetsList.innerHTML = '';
      
      if (assignedAssets.length === 0) {
        const noAssets = document.createElement('div');
        noAssets.className = 'no-assets';
        noAssets.style.padding = '2rem';
        noAssets.style.textAlign = 'center';
        noAssets.innerHTML = 'No assets assigned. Click "Add Asset" to select assets.';
        assetsList.appendChild(noAssets);
      } else {
        // Create table
        const table = document.createElement('table');
        table.className = 'assets-table';
        
        // Create header
        const thead = document.createElement('thead');
        const headerRow = document.createElement('tr');
        const headers = ['ID', 'Asset Name', 'Category', 'Status', 'Action', 'View More'];
        headers.forEach(headerText => {
          const th = document.createElement('th');
          th.textContent = headerText;
          headerRow.appendChild(th);
        });
        thead.appendChild(headerRow);
        table.appendChild(thead);
        
        // Create body
        const tbody = document.createElement('tbody');
        
        assignedAssets.forEach((asset) => {
          const row = document.createElement('tr');
          
          // ID
          const idCell = document.createElement('td');
          idCell.className = 'asset-id';
          idCell.textContent = asset.assetId || asset.id;
          row.appendChild(idCell);
          
          // Asset Name
          const nameCell = document.createElement('td');
          nameCell.className = 'asset-name';
          nameCell.textContent = asset.assetDescription || asset.assetName || 'N/A';
          row.appendChild(nameCell);
          
          // Category
          const categoryCell = document.createElement('td');
          categoryCell.className = 'asset-category';
          categoryCell.textContent = asset.assetCategoryDescription || asset.assetCategory || 'N/A';
          row.appendChild(categoryCell);
          
          // Status
          const statusCell = document.createElement('td');
          const statusBadge = document.createElement('span');
          if (asset.inspection && asset.inspection.solved === 'yes') {
            statusBadge.className = 'status-badge status-complete';
            statusBadge.textContent = 'Complete';
          } else {
            statusBadge.className = 'status-badge status-open';
            statusBadge.textContent = 'Open';
          }
          statusCell.appendChild(statusBadge);
          row.appendChild(statusCell);
          
          // Action (Inspect button)
          const actionCell = document.createElement('td');
          const inspectBtn = document.createElement('button');
          inspectBtn.className = 'btn-inspect';
          inspectBtn.textContent = 'Inspect';
          inspectBtn.addEventListener('click', async (e) => {
            e.preventDefault();
            e.stopPropagation();
            await openInspectionModal(asset.id, asset.inspection);
          });
          actionCell.appendChild(inspectBtn);
          row.appendChild(actionCell);
          
          // View More button
          const viewMoreCell = document.createElement('td');
          const viewMoreBtn = document.createElement('a');
          viewMoreBtn.href = `/inspection/inspectionassetdetails.html?maintenanceId=${encodeURIComponent(currentMaintenanceId)}&taskIndex=${currentTaskIndex}&assetId=${encodeURIComponent(asset.id)}`;
          viewMoreBtn.className = 'btn-view-more-asset';
          viewMoreBtn.textContent = 'View More';
          viewMoreCell.appendChild(viewMoreBtn);
          row.appendChild(viewMoreCell);
          
          tbody.appendChild(row);
        });
        
        table.appendChild(tbody);
        assetsList.appendChild(table);
      }
    }
  } catch (error) {
    console.error('Error loading assets:', error);
    if (assetsList) {
      assetsList.innerHTML = '<div class="no-assets">Failed to load assets. Please try again.</div>';
    }
  }
}

async function removeAssetFromTask(assetId) {
  if (!currentMaintenanceId || currentTaskIndex === null) return;

  try {
    const maintenanceRef = doc(db, 'maintenance', currentMaintenanceId);
    const maintenanceDoc = await getDoc(maintenanceRef);
    
    if (!maintenanceDoc.exists()) return;

    const maintenanceData = maintenanceDoc.data();
    const inspectionTaskAssets = maintenanceData.inspectionTaskAssets || {};
    const assetIds = inspectionTaskAssets[currentTaskIndex] || [];
    
    // Remove the asset ID from the array
    const updatedAssetIds = assetIds.filter(id => id !== assetId);
    inspectionTaskAssets[currentTaskIndex] = updatedAssetIds;

    await updateDoc(maintenanceRef, {
      inspectionTaskAssets: inspectionTaskAssets
    });

    // Reload the assets list
    await loadInspectionTaskAssets();
  } catch (error) {
    console.error('Error removing asset:', error);
    alert('Failed to remove asset. Please try again.');
  }
}

// Open Add Asset Modal
async function openAddAssetModal() {
  if (!addAssetModalOverlay) return;

  try {
    // Load all registered assets
    const assetsCol = collection(db, 'assets');
    const allAssetsSnap = await getDocs(assetsCol);
    
    const allAssets = [];
    allAssetsSnap.forEach((docSnap) => {
      allAssets.push({ id: docSnap.id, ...docSnap.data() });
    });

    // Populate the selection table
    if (assetSelectList) {
      assetSelectList.innerHTML = '';
      
      if (allAssets.length === 0) {
        const noAssets = document.createElement('div');
        noAssets.className = 'no-assets';
        noAssets.style.padding = '2rem';
        noAssets.style.textAlign = 'center';
        noAssets.textContent = 'No assets registered yet.';
        assetSelectList.appendChild(noAssets);
      } else {
        // Create table
        const table = document.createElement('table');
        table.className = 'asset-select-table';
        
        // Create header
        const thead = document.createElement('thead');
        const headerRow = document.createElement('tr');
        const headers = ['Action', 'ID', 'Asset Name', 'Category', 'View More'];
        headers.forEach(headerText => {
          const th = document.createElement('th');
          th.textContent = headerText;
          headerRow.appendChild(th);
        });
        thead.appendChild(headerRow);
        table.appendChild(thead);
        
        // Create body
        const tbody = document.createElement('tbody');
        
        allAssets.forEach((asset) => {
          const isSelected = selectedAssetsForTask.includes(asset.id);
          
          const row = document.createElement('tr');
          
          // Action (checkbox)
          const actionCell = document.createElement('td');
          const checkbox = document.createElement('input');
          checkbox.type = 'checkbox';
          checkbox.className = 'asset-select-checkbox';
          checkbox.value = asset.id;
          checkbox.checked = isSelected;
          checkbox.id = `asset-${asset.id}`;
          actionCell.appendChild(checkbox);
          row.appendChild(actionCell);
          
          // ID
          const idCell = document.createElement('td');
          idCell.className = 'asset-select-id';
          idCell.textContent = asset.assetId || asset.id;
          row.appendChild(idCell);
          
          // Asset Name
          const nameCell = document.createElement('td');
          nameCell.className = 'asset-select-name';
          nameCell.textContent = asset.assetDescription || asset.assetName || 'N/A';
          row.appendChild(nameCell);
          
          // Category
          const categoryCell = document.createElement('td');
          categoryCell.className = 'asset-select-category';
          categoryCell.textContent = asset.assetCategoryDescription || asset.assetCategory || 'N/A';
          row.appendChild(categoryCell);
          
          // View More button
          const viewMoreCell = document.createElement('td');
          const viewMoreBtn = document.createElement('a');
          viewMoreBtn.href = `../assets/assetdetails.html?id=${encodeURIComponent(asset.id)}`;
          viewMoreBtn.target = '_blank';
          viewMoreBtn.className = 'btn-view-more';
          viewMoreBtn.textContent = 'View More';
          viewMoreCell.appendChild(viewMoreBtn);
          row.appendChild(viewMoreCell);
          
          // Make row clickable (except for checkbox and view more button)
          row.addEventListener('click', (e) => {
            if (e.target !== checkbox && e.target !== viewMoreBtn && e.target !== viewMoreCell) {
              checkbox.checked = !checkbox.checked;
            }
          });
          
          tbody.appendChild(row);
        });
        
        table.appendChild(tbody);
        assetSelectList.appendChild(table);
      }
    }

    addAssetModalOverlay.classList.add('open');
  } catch (error) {
    console.error('Error loading assets for selection:', error);
    alert('Failed to load assets. Please try again.');
  }
}

// Close Add Asset Modal
function closeAddAssetModal() {
  if (addAssetModalOverlay) {
    addAssetModalOverlay.classList.remove('open');
  }
}

// Save selected assets
async function saveSelectedAssets() {
  if (!currentMaintenanceId || currentTaskIndex === null) return;

  try {
    const checkboxes = assetSelectList.querySelectorAll('input[type="checkbox"]:checked');
    const selectedAssetIds = Array.from(checkboxes).map(cb => cb.value);

    const maintenanceRef = doc(db, 'maintenance', currentMaintenanceId);
    const maintenanceDoc = await getDoc(maintenanceRef);
    
    if (!maintenanceDoc.exists()) {
      alert('Maintenance item not found.');
      return;
    }

    const maintenanceData = maintenanceDoc.data();
    const inspectionTaskAssets = maintenanceData.inspectionTaskAssets || {};
    inspectionTaskAssets[currentTaskIndex] = selectedAssetIds;

    await updateDoc(maintenanceRef, {
      inspectionTaskAssets: inspectionTaskAssets
    });

    selectedAssetsForTask = selectedAssetIds;
    closeAddAssetModal();
    await loadInspectionTaskAssets();
    alert(`Successfully added ${selectedAssetIds.length} asset(s) to this inspection task.`);
  } catch (error) {
    console.error('Error saving selected assets:', error);
    alert('Failed to save selected assets. Please try again.');
  }
}

// Event listeners
if (addAssetBtn) {
  addAssetBtn.addEventListener('click', openAddAssetModal);
}

if (closeAddAssetModalBtn) {
  closeAddAssetModalBtn.addEventListener('click', closeAddAssetModal);
}

if (cancelAddAssetBtn) {
  cancelAddAssetBtn.addEventListener('click', closeAddAssetModal);
}

if (saveAddAssetBtn) {
  saveAddAssetBtn.addEventListener('click', saveSelectedAssets);
}

if (addAssetModalOverlay) {
  addAssetModalOverlay.addEventListener('click', (e) => {
    if (e.target === addAssetModalOverlay) {
      closeAddAssetModal();
    }
  });
}

// Inspection Modal Functions
async function openInspectionModal(assetId, existingInspection) {
  if (!inspectionModalOverlay) return;
  
  currentInspectionAssetId = assetId;
  
  // Populate form if inspection exists
  if (existingInspection) {
    if (inspectionNotes) {
      inspectionNotes.value = existingInspection.notes || '';
    }
    if (existingInspection.solved === 'yes') {
      document.getElementById('solved-yes').checked = true;
    } else {
      document.getElementById('solved-no').checked = true;
    }
  } else {
    // Reset form
    if (inspectionForm) {
      inspectionForm.reset();
    }
  }
  
  inspectionModalOverlay.classList.add('open');
}

function closeInspectionModal() {
  if (inspectionModalOverlay) {
    inspectionModalOverlay.classList.remove('open');
    if (inspectionForm) {
      inspectionForm.reset();
    }
    currentInspectionAssetId = null;
  }
}

async function saveInspection() {
  if (!currentMaintenanceId || currentTaskIndex === null || !currentInspectionAssetId) return;

  try {
    const notes = inspectionNotes?.value?.trim() || '';
    const solved = document.querySelector('input[name="solved"]:checked')?.value || '';

    if (!notes) {
      alert('Please enter inspection notes.');
      return;
    }

    if (!solved) {
      alert('Please select if the issue is solved or not.');
      return;
    }

    const maintenanceRef = doc(db, 'maintenance', currentMaintenanceId);
    const maintenanceDoc = await getDoc(maintenanceRef);
    
    if (!maintenanceDoc.exists()) {
      alert('Maintenance item not found.');
      return;
    }

    const maintenanceData = maintenanceDoc.data();
    const inspectionData = maintenanceData.inspectionData || {};
    
    if (!inspectionData[currentTaskIndex]) {
      inspectionData[currentTaskIndex] = {};
    }

    inspectionData[currentTaskIndex][currentInspectionAssetId] = {
      notes: notes,
      solved: solved,
      timestamp: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    await updateDoc(maintenanceRef, {
      inspectionData: inspectionData
    });

    closeInspectionModal();
    await loadInspectionTaskAssets();
    alert('Inspection saved successfully.');
  } catch (error) {
    console.error('Error saving inspection:', error);
    alert('Failed to save inspection. Please try again.');
  }
}

// Inspection modal event listeners
if (closeInspectionModalBtn) {
  closeInspectionModalBtn.addEventListener('click', closeInspectionModal);
}

if (cancelInspectionBtn) {
  cancelInspectionBtn.addEventListener('click', closeInspectionModal);
}

if (inspectionForm) {
  inspectionForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (saveInspectionBtn) {
      saveInspectionBtn.disabled = true;
      saveInspectionBtn.textContent = 'Saving...';
    }
    await saveInspection();
    if (saveInspectionBtn) {
      saveInspectionBtn.disabled = false;
      saveInspectionBtn.textContent = 'Save Inspection';
    }
  });
}

if (inspectionModalOverlay) {
  inspectionModalOverlay.addEventListener('click', (e) => {
    if (e.target === inspectionModalOverlay) {
      closeInspectionModal();
    }
  });
}
