import { auth, db } from '../authentication/firebase.js';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { getDoc, doc, deleteDoc, updateDoc, getDocs, collection, query, limit } from 'firebase/firestore';
import QRCode from 'qrcode';

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
const assetIdMeta = document.getElementById('asset-id-meta');
const assetStatusMeta = document.getElementById('asset-status-meta');
const assetSpecList = document.getElementById('asset-spec-list');
const summaryAssetId = document.getElementById('summary-asset-id');
const summaryCategory = document.getElementById('summary-category');
const summaryLocation = document.getElementById('summary-location');
const summaryOwner = document.getElementById('summary-owner');
const qrCodeSection = document.getElementById('qr-code-section');
const qrCodeContainer = document.getElementById('qr-code-container');
const downloadQrBtn = document.getElementById('download-qr-btn');
let qrCodeDataUrlForDownload = null; // Store QR code data URL for download
const assetActionsBtn = document.getElementById('asset-actions-btn');
const assetActionsMenu = document.getElementById('asset-actions-menu');
const editAssetBtn = document.getElementById('edit-asset-btn');
const deleteAssetBtn = document.getElementById('delete-asset-btn');
const editModalOverlay = document.getElementById('edit-modal-overlay');
const closeModalBtn = document.getElementById('close-modal-btn');
const cancelEditBtn = document.getElementById('cancel-edit-btn');
const editAssetForm = document.getElementById('edit-asset-form');
const saveEditBtn = document.getElementById('save-edit-btn');
const editLocationDescriptionSelect = document.getElementById('edit-locationDescription');
const editLocationDescriptionCustom = document.getElementById('edit-locationDescription-custom');
const toggleCustomLocationEdit = document.getElementById('toggle-custom-location-edit');

let currentAssetId = null;
let currentAssetData = null;

// Cache for location descriptions (10 minutes)
let locationDescriptionsCache = null;
let locationDescriptionsCacheTime = 0;
const CACHE_DURATION = 10 * 60 * 1000; // 10 minutes

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

async function loadAssetDetails() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  if (!id) {
    if (assetSpecList) {
      assetSpecList.innerHTML = '<p class="muted">No asset selected.</p>';
    }
    return;
  }

  currentAssetId = id;

  try {
    const snap = await getDoc(doc(db, 'assets', id));
    if (!snap.exists()) {
      assetSpecList.innerHTML = '<p class="muted">Asset not found.</p>';
      return;
    }

    const a = snap.data();
    if (assetIdMeta) {
      assetIdMeta.textContent = a.assetId
        ? `Asset ID: ${a.assetId} • Serial: ${a.serialNo || 'N/A'}`
        : `Asset document ID: ${id}`;
    }
    if (assetStatusMeta) {
      const statusText = a.status || '';
      if (statusText) {
        const isActive = String(statusText).toLowerCase() === 'active';
        const escapedStatus = escapeHtml(statusText);
        assetStatusMeta.innerHTML = isActive
          ? `Status: <span class="status-active">${escapedStatus}</span>`
          : `Status: ${escapedStatus}`;
      } else {
        assetStatusMeta.textContent = '';
      }
    }

    if (summaryAssetId) summaryAssetId.textContent = a.assetId || 'Not set';
    if (summaryCategory) {
      summaryCategory.textContent = a.assetCategoryDescription || a.assetCategory || 'Not set';
    }
    if (summaryLocation) {
      summaryLocation.textContent = a.locationDescription || a.location || 'Not set';
    }
    if (summaryOwner) {
      summaryOwner.textContent = a.ownerName || a.ownerCode || 'Not set';
    }

    currentAssetData = a;

    const fields = [
      { label: 'Branch Code', value: a.branchCode },
      { label: 'Asset Description', value: a.assetDescription },
      { label: 'Asset Category', value: a.assetCategory },
      { label: 'Asset Category Description', value: a.assetCategoryDescription },
      { label: 'Owner Code', value: a.ownerCode },
      { label: 'Owner Name', value: a.ownerName },
      { label: 'Model', value: a.model },
      { label: 'Brand', value: a.brand },
      { label: 'Warranty Period', value: a.warrantyPeriod },
      { label: 'Location', value: a.location },
      { label: 'Location Description', value: a.locationDescription },
      { label: 'Area', value: a.area },
      { label: 'Department Code', value: a.departmentCode },
      { label: 'Department Description', value: a.departmentDescription },
      { label: 'Condition', value: a.condition },
      { label: 'Current User', value: a.currentUser },
    ];

    assetSpecList.innerHTML = '';
    fields.forEach((f) => {
      const row = document.createElement('div');
      row.className = 'spec-row';
      const labelDiv = document.createElement('div');
      labelDiv.className = 'spec-label';
      labelDiv.textContent = f.label;
      const valueDiv = document.createElement('div');
      valueDiv.className = 'spec-value';
      if (f.value) {
        valueDiv.textContent = f.value;
      } else {
        const span = document.createElement('span');
        span.className = 'muted';
        span.textContent = 'Not set';
        valueDiv.appendChild(span);
      }
      row.appendChild(labelDiv);
      row.appendChild(valueDiv);
      assetSpecList.appendChild(row);
    });

    // Generate QR code with asset ID and details
    await generateQRCode(a);
  } catch (err) {
    console.error('Error loading asset details:', err);
    assetSpecList.innerHTML = '<p class="muted">Failed to load asset details. Please refresh.</p>';
  }
}

async function generateQRCode(assetData) {
  if (!qrCodeContainer || !qrCodeSection) return;

  try {
    // Create QR code data with asset ID and key details
    const qrData = {
      assetId: assetData.assetId || currentAssetId,
      assetDescription: assetData.assetDescription || '',
      assetCategory: assetData.assetCategoryDescription || assetData.assetCategory || '',
      serialNo: assetData.serialNo || '',
      location: assetData.locationDescription || assetData.location || '',
      status: assetData.status || '',
      timestamp: new Date().toISOString()
    };

    // Convert to JSON string for QR code
    const qrDataString = JSON.stringify(qrData);

    // Clear previous QR code
    qrCodeContainer.innerHTML = '';

    // Generate QR code as data URL (image) - larger size for display
    const qrCodeDataUrl = await QRCode.toDataURL(qrDataString, {
      width: 300,
      margin: 2,
      color: {
        dark: '#140958',
        light: '#ffffff'
      }
    });

    // Generate smaller QR code for download (150px instead of 300px)
    qrCodeDataUrlForDownload = await QRCode.toDataURL(qrDataString, {
      width: 150,
      margin: 2,
      color: {
        dark: '#140958',
        light: '#ffffff'
      }
    });

    // Create and display QR code image
    const qrImage = document.createElement('img');
    qrImage.src = qrCodeDataUrl;
    qrImage.alt = 'Asset QR Code';
    qrImage.style.display = 'block';
    qrImage.style.margin = '0 auto';
    qrCodeContainer.appendChild(qrImage);

    // Show download button
    if (downloadQrBtn) {
      downloadQrBtn.style.display = 'inline-flex';
    }

    // Show QR code section
    qrCodeSection.style.display = 'block';
  } catch (error) {
    console.error('Error generating QR code:', error);
    if (qrCodeContainer) {
      qrCodeContainer.innerHTML = '<p class="muted">Failed to generate QR code.</p>';
    }
  }
}

// Download QR code handler
if (downloadQrBtn) {
  downloadQrBtn.addEventListener('click', () => {
    if (!qrCodeDataUrlForDownload) {
      alert('QR code not available for download.');
      return;
    }

    // Get asset ID for filename
    const assetId = currentAssetData?.assetId || currentAssetId || 'asset';
    const filename = `QR_Code_${assetId}_${new Date().toISOString().split('T')[0]}.png`;

    // Create download link
    const link = document.createElement('a');
    link.href = qrCodeDataUrlForDownload;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
}

loadAssetDetails();

// Three-dot menu toggle
if (assetActionsBtn && assetActionsMenu) {
  assetActionsBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    assetActionsMenu.classList.toggle('open');
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!assetActionsBtn.contains(e.target) && !assetActionsMenu.contains(e.target)) {
      assetActionsMenu.classList.remove('open');
    }
  });
}

// Load locations from inspection task names to populate dropdown
// This ensures consistency: asset.locationDescription should match inspection task names
async function loadMaintenanceLocationsForEdit() {
  if (!editLocationDescriptionSelect) return;
  
  // Check cache first
  const now = Date.now();
  if (locationDescriptionsCache && (now - locationDescriptionsCacheTime) < CACHE_DURATION) {
    populateLocationDropdown(locationDescriptionsCache);
    setCurrentLocationValue();
    return;
  }
  
  // Show loading state
  editLocationDescriptionSelect.innerHTML = '<option value="">Loading locations...</option>';
  
  try {
    const startTime = performance.now();
    const locations = new Set();
    
    // Load maintenance and assets in parallel with limits for better performance
    const maintenanceQuery = query(collection(db, 'maintenance'), limit(100));
    const assetsQuery = query(collection(db, 'assets'), limit(500));
    const [maintenanceSnap, assetsSnap] = await Promise.all([
      getDocs(maintenanceQuery).catch(err => {
        console.error('Error loading maintenance:', err);
        return { docs: [], empty: true, forEach: () => {} };
      }),
      getDocs(assetsQuery).catch(err => {
        console.error('Error loading assets:', err);
        return { docs: [], empty: true, forEach: () => {} };
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
    setCurrentLocationValue();
  } catch (error) {
    console.error('Error loading locations:', error);
    editLocationDescriptionSelect.innerHTML = '<option value="">Error loading locations</option>';
  }
}

function populateLocationDropdown(locations) {
  if (!editLocationDescriptionSelect) return;
  
  // Clear existing options
  editLocationDescriptionSelect.innerHTML = '<option value="">Select location...</option>';
  
  // Add locations sorted alphabetically
  locations.forEach(location => {
    const option = document.createElement('option');
    option.value = location;
    option.textContent = location;
    editLocationDescriptionSelect.appendChild(option);
  });
}

function setCurrentLocationValue() {
  if (!currentAssetData || !editLocationDescriptionSelect) return;
  
  if (currentAssetData.locationDescription) {
    editLocationDescriptionSelect.value = currentAssetData.locationDescription;
    // If current value is not in dropdown, show custom input
    if (!editLocationDescriptionSelect.value && currentAssetData.locationDescription) {
      if (editLocationDescriptionCustom) {
        editLocationDescriptionCustom.style.display = 'block';
        editLocationDescriptionCustom.value = currentAssetData.locationDescription;
      }
      if (toggleCustomLocationEdit) {
        toggleCustomLocationEdit.textContent = 'Use dropdown';
      }
    }
  }
}

// Toggle custom location input
if (toggleCustomLocationEdit && editLocationDescriptionCustom) {
  toggleCustomLocationEdit.addEventListener('click', () => {
    if (editLocationDescriptionCustom.style.display === 'none') {
      editLocationDescriptionCustom.style.display = 'block';
      toggleCustomLocationEdit.textContent = 'Use dropdown';
      if (editLocationDescriptionSelect) {
        editLocationDescriptionSelect.value = '';
      }
    } else {
      editLocationDescriptionCustom.style.display = 'none';
      editLocationDescriptionCustom.value = '';
      toggleCustomLocationEdit.textContent = '+ Add custom location';
    }
  });
}

// Edit asset handler
if (editAssetBtn) {
  editAssetBtn.addEventListener('click', () => {
    assetActionsMenu.classList.remove('open');
    openEditModal();
  });
}

function openEditModal() {
  if (!currentAssetData || !currentAssetId) {
    alert('Asset data not loaded.');
    return;
  }

  // Load maintenance locations first
  loadMaintenanceLocationsForEdit();

  // Populate form fields
  document.getElementById('edit-no').value = currentAssetData.no || '';
  document.getElementById('edit-branchCode').value = currentAssetData.branchCode || '';
  document.getElementById('edit-assetId').value = currentAssetData.assetId || '';
  document.getElementById('edit-assetDescription').value = currentAssetData.assetDescription || '';
  document.getElementById('edit-assetCategory').value = currentAssetData.assetCategory || '';
  document.getElementById('edit-assetCategoryDescription').value = currentAssetData.assetCategoryDescription || '';
  document.getElementById('edit-ownerCode').value = currentAssetData.ownerCode || '';
  document.getElementById('edit-ownerName').value = currentAssetData.ownerName || '';
  document.getElementById('edit-model').value = currentAssetData.model || '';
  document.getElementById('edit-brand').value = currentAssetData.brand || '';
  document.getElementById('edit-status').value = currentAssetData.status || 'Active';
  document.getElementById('edit-warrantyPeriod').value = currentAssetData.warrantyPeriod || '';
  document.getElementById('edit-serialNo').value = currentAssetData.serialNo || '';
  document.getElementById('edit-location').value = currentAssetData.location || '';
  // locationDescription is handled in loadMaintenanceLocationsForEdit
  document.getElementById('edit-area').value = currentAssetData.area || '';
  document.getElementById('edit-departmentCode').value = currentAssetData.departmentCode || '';
  document.getElementById('edit-departmentDescription').value = currentAssetData.departmentDescription || '';
  document.getElementById('edit-condition').value = currentAssetData.condition || '';
  document.getElementById('edit-currentUser').value = currentAssetData.currentUser || '';

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
if (editAssetForm) {
  editAssetForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    if (!currentAssetId) {
      alert('No asset selected.');
      return;
    }

    saveEditBtn.disabled = true;
    saveEditBtn.textContent = 'Saving...';

    try {
      const formData = new FormData(editAssetForm);
      const assetIdValue = formData.get('assetId')?.trim() || '';
      
      // Validate required assetId field
      if (!assetIdValue) {
        alert('Asset ID is required and cannot be blank.');
        saveEditBtn.disabled = false;
        saveEditBtn.textContent = 'Save Changes';
        return;
      }

      // Get location description from dropdown or custom input
      // Normalize to match inspection task names (preserve original case but ensure consistency)
      let locationDesc = editLocationDescriptionCustom && editLocationDescriptionCustom.style.display !== 'none'
        ? formData.get('locationDescriptionCustom')?.trim() || ''
        : formData.get('locationDescription')?.trim() || '';
      
      // Try to match with existing inspection task names (case-insensitive) to preserve exact case
      if (locationDesc) {
        const locationDescLower = locationDesc.toLowerCase().trim();
        
        // Use cache if available, otherwise load from database
        const now = Date.now();
        let foundMatch = false;
        
        if (locationDescriptionsCache && (now - locationDescriptionsCacheTime) < CACHE_DURATION) {
          // Check cache first (but we still need exact case from DB)
          // For performance, we'll query with limit if cache exists
        }
        
        // Load from database with limit for performance
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
                foundMatch = true;
                break;
              }
            }
            if (foundMatch) break; // Found match, exit loop
          }
        } catch (err) {
          console.warn('Error loading maintenance for location matching:', err);
          // Continue with original locationDesc if query fails
        }
      }

      const updateData = {
        no: formData.get('no')?.trim() || '',
        branchCode: formData.get('branchCode')?.trim() || '',
        assetId: assetIdValue,
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
        updatedAt: new Date().toISOString(),
      };

      // Remove empty string values (keep only non-empty fields, but always keep assetId)
      Object.keys(updateData).forEach(key => {
        if (key !== 'updatedAt' && key !== 'assetId' && updateData[key] === '') {
          delete updateData[key];
        }
      });

      await updateDoc(doc(db, 'assets', currentAssetId), updateData);
      alert('Asset updated successfully!');
      closeEditModal();
      // Reload asset details
      loadAssetDetails();
    } catch (error) {
      console.error('Error updating asset:', error);
      alert('Failed to update asset. Please try again.');
    } finally {
      saveEditBtn.disabled = false;
      saveEditBtn.textContent = 'Save Changes';
    }
  });
}

// Delete asset handler
if (deleteAssetBtn) {
  deleteAssetBtn.addEventListener('click', async () => {
    assetActionsMenu.classList.remove('open');

    if (!currentAssetId) {
      alert('No asset selected.');
      return;
    }

    // Warning confirmation
    const confirmMessage = 'Are you sure you want to delete this asset?\n\nThis action cannot be undone and the asset will be permanently removed from the database.';
    if (!confirm(confirmMessage)) {
      return;
    }

    // Double confirmation
    const doubleConfirm = confirm('⚠️ WARNING: This will permanently delete the asset from the database.\n\nClick OK to confirm deletion.');
    if (!doubleConfirm) {
      return;
    }

    try {
      await deleteDoc(doc(db, 'assets', currentAssetId));
      alert('Asset deleted successfully!');
      window.location.replace('/assets/asset.html');
    } catch (error) {
      console.error('Error deleting asset:', error);
      alert('Failed to delete asset. Please try again.');
    }
  });
}

// Logout handler
const logoutBtn = document.getElementById('logout-btn');
if (logoutBtn) {
  logoutBtn.addEventListener('click', async () => {
    try {
      await signOut(auth);
      window.location.replace('/index.html');
    } catch (error) {
      console.error("Logout error:", error);
      alert('Error logging out. Please try again.');
    }
  });
}

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
    e.preventDefault();
    
    const isCollapsed = sidebar.classList.contains('collapsed');
    
    // Fade out current icon
    toggleIcon.style.opacity = '0';
    toggleIcon.style.transform = 'scale(0.8)';
    
    // After fade, change icon and fade in
    setTimeout(() => {
      sidebar.classList.toggle('collapsed');
      
      // Update icon based on new state
      if (sidebar.classList.contains('collapsed')) {
        toggleIcon.textContent = '→';
      } else {
        toggleIcon.textContent = '☰';
      }
      
      // Fade in new icon
      setTimeout(() => {
        toggleIcon.style.opacity = '1';
        toggleIcon.style.transform = 'scale(1)';
      }, 50);
      
      // Update app-shell class for layout adjustments
      const appShell = document.querySelector('.app-shell');
      if (appShell) {
        if (sidebar.classList.contains('collapsed')) {
          appShell.classList.add('has-collapsed-sidebar');
        } else {
          appShell.classList.remove('has-collapsed-sidebar');
        }
      }
      
      // Save state
      localStorage.setItem('sidebarCollapsed', sidebar.classList.contains('collapsed') ? 'true' : 'false');
    }, 150);
  });
  
  // Initialize app-shell class on load
  const appShell = document.querySelector('.app-shell');
  if (appShell && sidebar.classList.contains('collapsed')) {
    appShell.classList.add('has-collapsed-sidebar');
  }
  
  // Ensure icon is visible on load
  toggleIcon.style.opacity = '1';
  toggleIcon.style.transform = 'scale(1)';
}
