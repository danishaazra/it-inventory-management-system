// Navigation helper to ensure links work correctly
export function initNavigation() {
  // Fix all sidebar navigation links to use correct paths
  const navItems = document.querySelectorAll('.sidebar-nav .nav-item[href]');
  
  navItems.forEach(item => {
    const href = item.getAttribute('href');
    
    // Only fix relative paths (not absolute paths starting with /)
    if (href && !href.startsWith('/') && !href.startsWith('http')) {
      // Get current page path
      const currentPath = window.location.pathname;
      let newHref = href;
      
      // Determine base path based on current location
      if (currentPath.includes('/dashboard/')) {
        // From dashboard, adjust paths
        if (href === 'dashboard.html') {
          newHref = './dashboard.html';
        } else if (href === 'asset.html') {
          newHref = '../assets/asset.html';
        } else if (href === 'maintenance.html') {
          newHref = '../maintenance/maintenance.html';
        } else if (href === 'qrcode.html') {
          newHref = '../qrcode/qrcode.html';
        }
      } else if (currentPath.includes('/assets/')) {
        // From assets
        if (href === 'dashboard.html') {
          newHref = '../dashboard/dashboard.html';
        } else if (href === 'asset.html') {
          newHref = './asset.html';
        } else if (href === 'maintenance.html') {
          newHref = '../maintenance/maintenance.html';
        } else if (href === 'qrcode.html') {
          newHref = '../qrcode/qrcode.html';
        }
      } else if (currentPath.includes('/maintenance/')) {
        // From maintenance
        if (href === 'dashboard.html') {
          newHref = '../dashboard/dashboard.html';
        } else if (href === 'asset.html') {
          newHref = '../assets/asset.html';
        } else if (href === 'maintenance.html') {
          newHref = './maintenance.html';
        } else if (href === 'qrcode.html') {
          newHref = '../qrcode/qrcode.html';
        }
      } else if (currentPath.includes('/qrcode/')) {
        // From qrcode
        if (href === 'dashboard.html') {
          newHref = '../dashboard/dashboard.html';
        } else if (href === 'asset.html') {
          newHref = '../assets/asset.html';
        } else if (href === 'maintenance.html') {
          newHref = '../maintenance/maintenance.html';
        } else if (href === 'qrcode.html') {
          newHref = './qrcode.html';
        }
      }
      
      if (newHref !== href) {
        item.setAttribute('href', newHref);
      }
    }
  });
}

// Auto-initialize navigation fixes
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initNavigation);
} else {
  initNavigation();
}

