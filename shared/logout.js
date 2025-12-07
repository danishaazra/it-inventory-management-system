import { auth } from '../authentication/firebase.js';
import { signOut } from 'firebase/auth';

// Initialize logout button handler
export function initLogout() {
  const logoutBtn = document.getElementById('logout-btn');
  
  if (!logoutBtn) {
    return; // Logout button not found on this page
  }
  
  logoutBtn.addEventListener('click', async () => {
    try {
      await signOut(auth);
      // Determine correct path to index.html based on current location
      const currentPath = window.location.pathname;
      let redirectPath = '/index.html';
      
      // If we're in a subdirectory, adjust path
      if (currentPath.includes('/dashboard/') || 
          currentPath.includes('/assets/') || 
          currentPath.includes('/maintenance/') ||
          currentPath.includes('/inspection/') ||
          currentPath.includes('/qrcode/')) {
        redirectPath = '../index.html';
      } else if (currentPath.includes('/dist/')) {
        redirectPath = '/index.html';
      } else {
        redirectPath = './index.html';
      }
      
      window.location.replace(redirectPath);
    } catch (error) {
      console.error('Logout error:', error);
      alert('Error logging out. Please try again.');
    }
  });
}

