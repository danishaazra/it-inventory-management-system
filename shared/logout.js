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
      // Always use absolute path to prevent any URL parameters from appearing
      window.location.replace('/index.html');
    } catch (error) {
      console.error('Logout error:', error);
      alert('Error logging out. Please try again.');
    }
  });
}

