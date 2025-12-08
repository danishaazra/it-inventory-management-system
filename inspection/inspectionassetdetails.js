// Import shared components first (includes authGuard)
import '../shared/init.js';

import { auth, db } from '../authentication/firebase.js';
import { onAuthStateChanged } from 'firebase/auth';
import { getDoc, doc, updateDoc } from 'firebase/firestore';

const nameEl = document.getElementById('user-name');
const avatarEl = document.getElementById('user-avatar');
const backLink = document.getElementById('back-link');
const summaryAssetId = document.getElementById('summary-asset-id');
const summaryCategory = document.getElementById('summary-category');
const summaryLocation = document.getElementById('summary-location');
const summaryStatus = document.getElementById('summary-status');
const assetSpecList = document.getElementById('asset-spec-list');
const inspectionSection = document.getElementById('inspection-section');
const inspectionDetailsList = document.getElementById('inspection-details-list');

let currentMaintenanceId = null;
let currentTaskIndex = null;
let currentAssetId = null;
let currentMaintenanceData = null;
let currentAssetData = null;

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
    console.error('Error loading user data:', error);
  }
});

async function loadAssetDetails() {
  const urlParams = new URLSearchParams(window.location.search);
  const maintenanceId = urlParams.get('maintenanceId');
  const taskIndex = parseInt(urlParams.get('taskIndex') || '0');
  const assetId = urlParams.get('assetId');

  if (!maintenanceId || !assetId) {
    alert('Missing required parameters.');
    window.location.replace('/maintenance/maintenance.html');
    return;
  }

  currentMaintenanceId = maintenanceId;
  currentTaskIndex = taskIndex;
  currentAssetId = assetId;

  try {
    // Load maintenance data
    const maintenanceSnap = await getDoc(doc(db, 'maintenance', maintenanceId));
    if (!maintenanceSnap.exists()) {
      alert('Maintenance item not found.');
      window.location.replace('/maintenance/maintenance.html');
      return;
    }
    currentMaintenanceData = maintenanceSnap.data();

    // Load asset data
    const assetSnap = await getDoc(doc(db, 'assets', assetId));
    if (!assetSnap.exists()) {
      alert('Asset not found.');
      window.location.replace('/maintenance/maintenance.html');
      return;
    }
    currentAssetData = assetSnap.data();

    // Update back link
    if (backLink) {
      backLink.href = `/inspection/inspectionassets.html?maintenanceId=${encodeURIComponent(maintenanceId)}&taskIndex=${taskIndex}`;
    }

    // Update summary cards
    if (summaryAssetId) summaryAssetId.textContent = currentAssetData.assetId || 'Not set';
    if (summaryCategory) {
      summaryCategory.textContent = currentAssetData.assetCategoryDescription || currentAssetData.assetCategory || 'Not set';
    }
    if (summaryLocation) {
      summaryLocation.textContent = currentAssetData.locationDescription || currentAssetData.location || 'Not set';
    }
    if (summaryStatus) {
      summaryStatus.textContent = currentAssetData.status || 'Not set';
    }

    // Display simplified asset details
    const fields = [
      { label: 'Asset Description', value: currentAssetData.assetDescription },
      { label: 'Model', value: currentAssetData.model },
      { label: 'Brand', value: currentAssetData.brand },
      { label: 'Serial No.', value: currentAssetData.serialNo },
      { label: 'Owner', value: currentAssetData.ownerName || currentAssetData.ownerCode },
      { label: 'Area', value: currentAssetData.area },
      { label: 'Condition', value: currentAssetData.condition },
    ];

    if (assetSpecList) {
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
    }

    // Load and display inspection details
    await loadInspectionDetails();
  } catch (error) {
    console.error('Error loading asset details:', error);
    alert('Failed to load asset details. Please try again.');
    window.location.replace('/maintenance/maintenance.html');
  }
}

async function loadInspectionDetails() {
  if (!currentMaintenanceId || currentTaskIndex === null || !currentAssetId) {
    if (inspectionSection) {
      inspectionSection.style.display = 'none';
    }
    return;
  }

  try {
    // Get inspection data from maintenance document
    const maintenanceDoc = await getDoc(doc(db, 'maintenance', currentMaintenanceId));
    if (!maintenanceDoc.exists()) {
      if (inspectionSection) {
        inspectionSection.style.display = 'none';
      }
      return;
    }

    const maintenanceData = maintenanceDoc.data();
    const inspectionData = maintenanceData.inspectionData || {};
    const taskInspectionData = inspectionData[currentTaskIndex] || {};
    const assetInspection = taskInspectionData[currentAssetId] || null;

    if (!assetInspection) {
      // No inspection data yet
      if (inspectionSection) {
        inspectionSection.style.display = 'none';
      }
      return;
    }

    // Show inspection section
    if (inspectionSection) {
      inspectionSection.style.display = 'block';
    }

    // Display inspection details
    if (inspectionDetailsList) {
      inspectionDetailsList.innerHTML = '';

      // Status
      const statusRow = document.createElement('div');
      statusRow.className = 'spec-row';
      const statusLabel = document.createElement('div');
      statusLabel.className = 'spec-label';
      statusLabel.textContent = 'Status';
      const statusValue = document.createElement('div');
      statusValue.className = 'spec-value';
      const statusBadge = document.createElement('span');
      statusBadge.className = 'status-badge';
      if (assetInspection.solved === 'yes') {
        statusBadge.className += ' status-complete';
        statusBadge.textContent = 'Complete';
      } else {
        statusBadge.className += ' status-open';
        statusBadge.textContent = 'Open';
      }
      statusValue.appendChild(statusBadge);
      statusRow.appendChild(statusLabel);
      statusRow.appendChild(statusValue);
      inspectionDetailsList.appendChild(statusRow);

      // Notes/Description
      const notesRow = document.createElement('div');
      notesRow.className = 'spec-row';
      notesRow.style.flexDirection = 'column';
      notesRow.style.alignItems = 'flex-start';
      const notesLabel = document.createElement('div');
      notesLabel.className = 'spec-label';
      notesLabel.textContent = 'Description / Notes';
      notesLabel.style.marginBottom = '0.5rem';
      const notesValue = document.createElement('div');
      notesValue.className = 'spec-value';
      notesValue.style.width = '100%';
      const notesDiv = document.createElement('div');
      notesDiv.className = 'inspection-notes';
      notesDiv.textContent = assetInspection.notes || 'No notes provided';
      notesValue.appendChild(notesDiv);
      notesRow.appendChild(notesLabel);
      notesRow.appendChild(notesValue);
      inspectionDetailsList.appendChild(notesRow);

      // Timestamp
      if (assetInspection.timestamp || assetInspection.updatedAt) {
        const timestampRow = document.createElement('div');
        timestampRow.className = 'spec-row';
        const timestampLabel = document.createElement('div');
        timestampLabel.className = 'spec-label';
        timestampLabel.textContent = 'Inspection Date';
        const timestampValue = document.createElement('div');
        timestampValue.className = 'spec-value';
        const timestampSpan = document.createElement('span');
        timestampSpan.className = 'inspection-timestamp';
        
        const timestamp = assetInspection.updatedAt || assetInspection.timestamp;
        if (timestamp) {
          const date = new Date(timestamp);
          const formattedDate = date.toLocaleString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          });
          timestampSpan.textContent = formattedDate;
        } else {
          timestampSpan.textContent = 'Not available';
        }
        
        timestampValue.appendChild(timestampSpan);
        timestampRow.appendChild(timestampLabel);
        timestampRow.appendChild(timestampValue);
        inspectionDetailsList.appendChild(timestampRow);
      }
    }
  } catch (error) {
    console.error('Error loading inspection details:', error);
    if (inspectionSection) {
      inspectionSection.style.display = 'none';
    }
  }
}

loadAssetDetails();
