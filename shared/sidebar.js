// Sidebar toggle functionality - shared across all pages
export function initSidebarToggle() {
  const sidebar = document.getElementById('sidebar');
  const toggleBtn = document.getElementById('sidebar-toggle-btn');
  const toggleIcon = document.getElementById('toggle-icon');
  
  if (!sidebar || !toggleBtn || !toggleIcon) {
    return; // Sidebar elements not found
  }
  
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
    sidebar.classList.toggle('collapsed');
    
    // Update icon and save state
    if (sidebar.classList.contains('collapsed')) {
      toggleIcon.textContent = '→';
      localStorage.setItem('sidebarCollapsed', 'true');
    } else {
      toggleIcon.textContent = '☰';
      localStorage.setItem('sidebarCollapsed', 'false');
    }
    
    // Update app-shell class
    const appShell = document.querySelector('.app-shell');
    if (appShell) {
      if (sidebar.classList.contains('collapsed')) {
        appShell.classList.add('has-collapsed-sidebar');
      } else {
        appShell.classList.remove('has-collapsed-sidebar');
      }
    }
  });
}

