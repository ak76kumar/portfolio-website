// ============================================
// THEME TOGGLE — Dark / Light with persistence
// ============================================

export function initTheme() {
  const toggle = document.getElementById('theme-toggle');
  const toggleIcon = toggle?.querySelector('.theme-toggle__icon');
  
  // Determine initial theme
  const stored = localStorage.getItem('portfolio-theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initialTheme = stored || (prefersDark ? 'dark' : 'light');
  
  document.documentElement.setAttribute('data-theme', initialTheme);
  updateIcon(initialTheme, toggleIcon);
  
  // Toggle handler
  toggle?.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('portfolio-theme', next);
    updateIcon(next, toggleIcon);
  });
  
  // Listen for system preference changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('portfolio-theme')) {
      const theme = e.matches ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', theme);
      updateIcon(theme, toggleIcon);
    }
  });
}

function updateIcon(theme, iconEl) {
  if (!iconEl) return;
  iconEl.textContent = theme === 'dark' ? '☀️' : '🌙';
  iconEl.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`);
}
