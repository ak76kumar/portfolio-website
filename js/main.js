// ============================================
// MAIN — Module orchestrator
// ============================================

import { initTheme } from './theme.js';
import { initScroll } from './scroll.js';
import { initTerminal } from './terminal.js';
import { initTilt } from './tilt.js';

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initScroll();
  initTerminal();
  initTilt();
});
