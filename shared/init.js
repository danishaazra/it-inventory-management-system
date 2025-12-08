// Shared initialization for all protected pages
// This removes duplication across all feature pages

import './urlSecurity.js'; // Clear URL parameters first for security
import './authGuard.js';
import { initSidebarToggle } from './sidebar.js';
import { initUserHeader } from './userHeader.js';
import { initLogout } from './logout.js';
import { initNavigation } from './navigation.js';

// Initialize all shared components
export function initSharedComponents() {
  initSidebarToggle();
  initUserHeader();
  initLogout();
  initNavigation();
}

// Auto-initialize when imported
initSharedComponents();

