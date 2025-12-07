import { auth, db } from '../authentication/firebase.js';
import { onAuthStateChanged } from 'firebase/auth';
import { getDoc, doc } from 'firebase/firestore';

// Only run auth guard on protected pages (not on login/register page)
const isLoginPage = window.location.pathname.includes('index.html') || 
                     window.location.pathname.endsWith('/') || 
                     window.location.pathname === '/' ||
                     window.location.href.includes('index.html');

if (!isLoginPage && !window.__authGuardInitialized) {
  // Prevent multiple initializations
  window.__authGuardInitialized = true;
  
  let hasRedirected = false;
  let userDataLoaded = false;
  
  // Set up auth listener once
  onAuthStateChanged(auth, async (user) => {
    // Prevent redirect loops
    if (hasRedirected) return;
    
    if (!user) {
      // User not authenticated - redirect to login (only once)
      hasRedirected = true;
      const redirectPath = window.location.pathname.includes('/dist/') 
        ? '/index.html' 
        : (window.location.pathname.includes('/dashboard/') || 
           window.location.pathname.includes('/assets/') || 
           window.location.pathname.includes('/maintenance/') ||
           window.location.pathname.includes('/inspection/') ||
           window.location.pathname.includes('/qrcode/'))
          ? '../index.html'
          : './index.html';
      
      // Small delay to prevent immediate redirect loops
      setTimeout(() => {
        if (!window.location.pathname.includes('index.html')) {
          window.location.replace(redirectPath);
        }
      }, 100);
      return;
    }
    
    // User is authenticated - load role data once
    if (!userDataLoaded && !sessionStorage.getItem('userRole')) {
      userDataLoaded = true;
      try {
        const userDoc = await getDoc(doc(db, "users", user.uid));
        if (userDoc.exists()) {
          const userData = userDoc.data();
          const role = userData.role || 'user';
          console.log("User role:", role);
          // Store role in sessionStorage for easy access
          sessionStorage.setItem('userRole', role);
          sessionStorage.setItem('userName', userData.fullName || user.email);
        }
      } catch (error) {
        console.error("Error loading user data:", error);
      }
    }
  });
}

