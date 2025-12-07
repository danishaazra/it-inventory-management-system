import { auth, db } from '../authentication/firebase.js';
import { onAuthStateChanged } from 'firebase/auth';
import { getDoc, doc } from 'firebase/firestore';

// Initialize user header (name and avatar) on pages that have it
export function initUserHeader() {
  const userNameEl = document.getElementById('user-name');
  const userAvatarEl = document.getElementById('user-avatar');
  
  if (!userNameEl && !userAvatarEl) {
    return; // Header elements not found on this page
  }
  
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      try {
        let displayName = user.email || 'User';
        const userDoc = await getDoc(doc(db, "users", user.uid));
        if (userDoc.exists()) {
          const userData = userDoc.data();
          displayName = userData.fullName || userData.name || user.email || 'User';
        }
        
        if (userNameEl) {
          userNameEl.textContent = displayName;
        }
        
        if (userAvatarEl) {
          const initial = displayName.trim().charAt(0).toUpperCase();
          userAvatarEl.textContent = initial || 'U';
        }
      } catch (error) {
        console.error("Error loading user data for header:", error);
        const fallbackName = user.displayName || user.email || 'User';
        if (userNameEl) userNameEl.textContent = fallbackName;
        if (userAvatarEl) {
          const initial = fallbackName.trim().charAt(0).toUpperCase();
          userAvatarEl.textContent = initial || 'U';
        }
      }
    }
  });
}

