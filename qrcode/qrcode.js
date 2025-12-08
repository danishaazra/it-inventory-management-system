// Import shared components first (includes authGuard)
import '../shared/init.js';

import { auth, db } from '../authentication/firebase.js';
import { onAuthStateChanged } from 'firebase/auth';
import { getDoc, doc, collection, query, where, getDocs, limit } from 'firebase/firestore';
import { Html5Qrcode } from 'html5-qrcode';

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

// Check if we're on HTTPS (required for camera)
if (window.location.protocol !== 'https:' && window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1') {
  console.warn('⚠️ Camera access requires HTTPS. Current protocol:', window.location.protocol);
}

const nameEl = document.getElementById('user-name');
const avatarEl = document.getElementById('user-avatar');
const startScanBtn = document.getElementById('start-scan-btn');
const stopScanBtn = document.getElementById('stop-scan-btn');
const scannerWrapper = document.getElementById('scanner-wrapper');
const qrReader = document.getElementById('qr-reader');
const scanResult = document.getElementById('scan-result');
const scanResultData = document.getElementById('scan-result-data');
const viewDetailsBtn = document.getElementById('view-details-btn');
const inspectBtn = document.getElementById('inspect-btn');
const errorMessage = document.getElementById('error-message');
const verificationModalOverlay = document.getElementById('verification-modal-overlay');
const verificationModal = document.getElementById('verification-modal');
const verificationTitle = document.getElementById('verification-title');
const verificationMessage = document.getElementById('verification-message');
const verificationOkBtn = document.getElementById('verification-ok-btn');

let scannedAssetDocId = null; // Store the asset document ID for navigation
let originalScannedAssetId = null; // Store the original scanned asset ID for verification
let isInspectMode = false; // Track if we're in inspect verification mode

let html5QrCode = null;
let isScanning = false;
let scannedAssetId = null;

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

function showError(message) {
  console.error('Showing error:', message);
  if (errorMessage) {
    errorMessage.textContent = message;
    errorMessage.classList.add('show');
  }
  console.error('Camera Error:', message);
}

function hideError() {
  if (errorMessage) {
    errorMessage.classList.remove('show');
  }
}

async function startScanning() {
  if (isScanning) {
    console.log('Already scanning');
    return;
  }

  try {
    hideError();
    console.log('Starting camera...');
    
    // Check if we're on HTTPS or localhost (required for camera access)
    const isSecure = window.location.protocol === 'https:' || window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (!isSecure) {
      const errorMsg = isMobile 
        ? 'Mobile browsers require HTTPS for camera access. Please deploy to Firebase Hosting (run: npm run deploy) to use the scanner on mobile devices.'
        : 'Camera access requires HTTPS. Please access this page via HTTPS or deploy to Firebase Hosting.';
      showError(errorMsg);
      console.error('Not on HTTPS or localhost');
      
      // Show mobile notice if on mobile
      const mobileNotice = document.getElementById('mobile-notice');
      if (isMobile && mobileNotice) {
        mobileNotice.style.display = 'block';
      }
      return;
    }

    // Show scanner wrapper first (needed for proper initialization)
    scannerWrapper.style.display = 'block';
    
    // Initialize Html5Qrcode
    if (!html5QrCode) {
      console.log('Initializing Html5Qrcode...');
      html5QrCode = new Html5Qrcode("qr-reader");
    }

    // Get available cameras
    console.log('Getting cameras...');
    const devices = await Html5Qrcode.getCameras();
    console.log('Available cameras:', devices);
    
    if (devices && devices.length > 0) {
      // On mobile, prefer back camera (environment), on desktop use any available
      let cameraId = devices[0].id;
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      
      // Try to find back camera on mobile
      if (isMobile) {
        const backCamera = devices.find(device => 
          device.label.toLowerCase().includes('back') || 
          device.label.toLowerCase().includes('rear') ||
          device.label.toLowerCase().includes('environment')
        );
        if (backCamera) {
          cameraId = backCamera.id;
          console.log('Using back camera on mobile:', cameraId);
        } else {
          console.log('Back camera not found by label, using first camera:', cameraId);
        }
      } else {
        console.log('Using camera on desktop:', cameraId);
      }
      
      // Start scanning with video preview
      console.log('Starting scanner...');
      const config = {
        fps: 10,
        qrbox: function(viewfinderWidth, viewfinderHeight) {
          // Make QR box responsive - use 80% of the smaller dimension
          let minEdgePercentage = 0.8;
          let minEdgeSize = Math.min(viewfinderWidth, viewfinderHeight);
          let qrboxSize = Math.floor(minEdgeSize * minEdgePercentage);
          return {
            width: qrboxSize,
            height: qrboxSize
          };
        },
        aspectRatio: 1.0
      };
      
      // Add video constraints for mobile to prefer back camera
      if (isMobile) {
        config.videoConstraints = {
          facingMode: "environment" // Use back camera on mobile
        };
      }
      
      await html5QrCode.start(
        cameraId,
        config,
        onScanSuccess,
        onScanFailure
      );

      console.log('Scanner started successfully');
      isScanning = true;
      startScanBtn.style.display = 'none';
      stopScanBtn.style.display = 'block';
      scanResult.classList.remove('show');
    } else {
      const errorMsg = 'No camera found. Please ensure your device has a camera and grant camera permissions.';
      console.error(errorMsg);
      showError(errorMsg);
      scannerWrapper.style.display = 'none';
    }
  } catch (error) {
    console.error('Error starting scanner:', error);
    console.error('Error details:', {
      name: error.name,
      message: error.message,
      stack: error.stack
    });
    
    let errorMsg = 'Failed to start camera. ';
    if (error.name === 'NotAllowedError' || error.message && error.message.includes('Permission denied')) {
      errorMsg = 'Camera permission denied. Please allow camera access in your browser settings and try again.';
    } else if (error.name === 'NotFoundError' || error.message && error.message.includes('No camera')) {
      errorMsg = 'No camera found. Please ensure your device has a camera.';
    } else if (error.name === 'NotReadableError' || error.message && error.message.includes('NotReadable')) {
      errorMsg = 'Camera is already in use by another application. Please close other apps using the camera.';
    } else if (error.message) {
      errorMsg += error.message;
    } else {
      errorMsg += 'Please check your device camera and try again.';
    }
    showError(errorMsg);
  }
}

async function stopScanning() {
  if (!isScanning || !html5QrCode) return;

  try {
    await html5QrCode.stop();
    await html5QrCode.clear();
    html5QrCode = null;
    isScanning = false;
    scannerWrapper.style.display = 'none';
    startScanBtn.style.display = 'block';
    stopScanBtn.style.display = 'none';
  } catch (error) {
    console.error('Error stopping scanner:', error);
  }
}

async function onScanSuccess(decodedText, decodedResult) {
  // Stop scanning after successful scan
  await stopScanning();

  try {
    // Try to parse as JSON (from our QR code generation)
    let qrData = null;
    try {
      qrData = JSON.parse(decodedText);
    } catch (e) {
      // If not JSON, treat as plain text (could be asset ID)
      qrData = { assetId: decodedText };
    }

    // Display scan result
    if (scanResultData) {
      scanResultData.textContent = JSON.stringify(qrData, null, 2);
    }

    console.log('QR Code Data:', qrData);
    console.log('Asset ID from QR:', qrData.assetId);

    // If in inspect mode, verify the asset matches
    if (isInspectMode && originalScannedAssetId) {
      const currentAssetId = qrData.assetId;
      
      if (currentAssetId === originalScannedAssetId) {
        // Asset matches - show success message
        showVerificationModal('success', 'Asset Verified', 'The scanned QR code matches the asset. You can proceed with inspection.');
        return;
      } else {
        // Asset doesn't match - show error message
        showVerificationModal('error', 'Asset Not Match', 'The scanned QR code does not match the original asset. Please scan the correct QR code.');
        isInspectMode = false;
        return;
      }
    }

    // Try to find asset by assetId
    if (qrData.assetId) {
      scannedAssetId = qrData.assetId;
      
      // Search for asset in Firestore
      const assetsRef = collection(db, 'assets');
      const q = query(assetsRef, where('assetId', '==', qrData.assetId));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        // Asset found - get the document ID
        const assetDoc = querySnapshot.docs[0];
        const assetDocId = assetDoc.id;
        scannedAssetDocId = assetDocId;
        
        // Store the original scanned asset ID for verification
        originalScannedAssetId = qrData.assetId;
        
        console.log('Asset found in database:', assetDocId);
        
        // Show view details button immediately
        if (viewDetailsBtn) {
          viewDetailsBtn.href = `/assets/assetdetails.html?id=${encodeURIComponent(assetDocId)}`;
          viewDetailsBtn.style.display = 'inline-flex';
          viewDetailsBtn.style.visibility = 'visible';
          viewDetailsBtn.style.opacity = '1';
          console.log('View Details button shown, href:', viewDetailsBtn.href);
        }
        
        // Show inspect button immediately (will update link if maintenance found)
        if (inspectBtn) {
          // Change inspect button to trigger scan instead of navigation
          inspectBtn.href = '#';
          inspectBtn.onclick = (e) => {
            e.preventDefault();
            e.stopPropagation();
            startInspectVerification();
            return false;
          };
          inspectBtn.style.display = 'inline-flex';
          inspectBtn.style.visibility = 'visible';
          inspectBtn.style.opacity = '1';
          console.log('Inspect button shown');
        }
        
        // Try to find maintenance records containing this asset (async, non-blocking)
        (async () => {
          try {
            // Use query with limit for better performance
            const maintenanceQuery = query(collection(db, 'maintenance'), limit(1000));
            const maintenanceSnap = await getDocs(maintenanceQuery);
            
            let foundMaintenance = null;
            let foundTaskIndex = null;
            
            // Search through maintenance records to find one containing this asset
            for (const maintDoc of maintenanceSnap.docs) {
              const maintData = maintDoc.data();
              const inspectionTaskAssets = maintData.inspectionTaskAssets || {};
              
              // Check each task's asset list
              for (let taskIdx = 0; taskIdx < Object.keys(inspectionTaskAssets).length; taskIdx++) {
                const assetIds = inspectionTaskAssets[taskIdx] || [];
                if (assetIds.includes(assetDocId)) {
                  foundMaintenance = maintDoc.id;
                  foundTaskIndex = taskIdx;
                  break;
                }
              }
              if (foundMaintenance) break;
            }
            
            // Store maintenance info for later use (after verification)
            if (foundMaintenance !== null && foundTaskIndex !== null && inspectBtn) {
              inspectBtn.dataset.maintenanceId = foundMaintenance;
              inspectBtn.dataset.taskIndex = foundTaskIndex;
              console.log('Maintenance info stored for inspect button');
            }
          } catch (err) {
            console.warn('Error finding maintenance records:', err);
          }
        })();
      } else {
        // Asset not found, but still show the QR data
        if (viewDetailsBtn) {
          viewDetailsBtn.style.display = 'none';
        }
        if (inspectBtn) {
          inspectBtn.style.display = 'none';
        }
      }
    } else {
      // No assetId in QR data
      if (viewDetailsBtn) {
        viewDetailsBtn.style.display = 'none';
      }
      if (inspectBtn) {
        inspectBtn.style.display = 'none';
      }
    }

    scanResult.classList.add('show');
  } catch (error) {
    console.error('Error processing scan result:', error);
    showError('Error processing scan result. Please try again.');
  }
}

function startInspectVerification() {
  if (!originalScannedAssetId) {
    showError('No asset scanned. Please scan an asset first.');
    return;
  }

  // Set inspect mode first
  isInspectMode = true;
  
  // Show verification message and start scanning
  showVerificationModal('info', 'Verify Asset', 'Please scan the QR code again. Make sure the scanned QR code is the same as before.');
  
  // Start scanning again after a short delay to let user read the message
  setTimeout(() => {
    startScanning();
  }, 500);
}

function showVerificationModal(type, title, message) {
  if (!verificationModalOverlay || !verificationModal || !verificationTitle || !verificationMessage) {
    console.error('Verification modal elements not found');
    return;
  }

  // Remove previous type classes
  verificationModal.classList.remove('success', 'error', 'info');
  
  // Add current type class
  if (type === 'success' || type === 'error' || type === 'info') {
    verificationModal.classList.add(type);
  }

  verificationTitle.textContent = title;
  verificationMessage.textContent = message;
  verificationModalOverlay.classList.add('show');
}

function hideVerificationModal() {
  if (verificationModalOverlay) {
    verificationModalOverlay.classList.remove('show');
  }
}

function onScanFailure(error) {
  // Ignore scanning errors (they happen frequently during scanning)
  // Only log if it's not a common scanning error
  if (error && !error.includes('NotFoundException') && !error.includes('No QR code found')) {
    console.debug('Scan error:', error);
  }
}

// Event listeners
if (startScanBtn) {
  startScanBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    console.log('Start camera button clicked');
    // Reset inspect mode when starting a new scan
    isInspectMode = false;
    await startScanning();
  });
} else {
  console.error('Start scan button not found!');
}

if (stopScanBtn) {
  stopScanBtn.addEventListener('click', () => {
    stopScanning();
    // Reset inspect mode when stopping scan
    isInspectMode = false;
  });
}

// Verification modal close handler
if (verificationOkBtn) {
  verificationOkBtn.addEventListener('click', () => {
    const isSuccess = verificationModal.classList.contains('success');
    const isError = verificationModal.classList.contains('error');
    
    hideVerificationModal();
    
    // If verification was successful, navigate to inspection page
    if (isSuccess && inspectBtn) {
      isInspectMode = false;
      const maintenanceId = inspectBtn.dataset.maintenanceId;
      const taskIndex = inspectBtn.dataset.taskIndex;
      
      if (maintenanceId && taskIndex !== undefined) {
        window.location.replace(`/inspection/inspectionassets.html?maintenanceId=${encodeURIComponent(maintenanceId)}&taskIndex=${taskIndex}`);
      } else {
        window.location.replace('/maintenance/maintenance.html');
      }
    } else if (isError) {
      // If error, allow user to try again by clicking inspect button again
      isInspectMode = false;
    }
  });
}

// Close modal when clicking outside
if (verificationModalOverlay) {
  verificationModalOverlay.addEventListener('click', (e) => {
    if (e.target === verificationModalOverlay) {
      hideVerificationModal();
    }
  });
}

// Cleanup on page unload
window.addEventListener('beforeunload', () => {
  if (isScanning) {
    stopScanning();
  }
});

// Custom logout handler to stop scanning before logout
// This overrides the shared logout handler to ensure camera is stopped
const logoutBtn = document.getElementById('logout-btn');
if (logoutBtn) {
  // Remove any existing handlers by cloning the button
  const newLogoutBtn = logoutBtn.cloneNode(true);
  logoutBtn.parentNode.replaceChild(newLogoutBtn, logoutBtn);
  
  newLogoutBtn.addEventListener('click', async () => {
    try {
      if (isScanning) {
        await stopScanning();
      }
      const { signOut } = await import('firebase/auth');
      await signOut(auth);
      window.location.replace('/index.html');
    } catch (error) {
      console.error("Logout error:", error);
      alert('Error logging out. Please try again.');
    }
  });
}
