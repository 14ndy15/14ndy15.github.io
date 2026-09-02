console.log('[nav.js] Script loaded');

document.addEventListener('DOMContentLoaded', function() {
  console.log('[nav.js] DOMContentLoaded fired');

  const navTree = document.querySelector('.nav-tree');
  if (!navTree) {
    console.log('[nav.js] navTree not found');
    return;
  }

  // Only enable collapse on mobile
  const isMobile = window.matchMedia('(max-width: 768px)').matches;
  console.log('[nav.js] isMobile:', isMobile);
  if (!isMobile) {
    console.log('[nav.js] Desktop mode - collapse disabled');
    return;
  }

  console.log('[nav.js] navTree found, setting up event listeners');

  // Close details when a navigation link is clicked (except the root ~)
  document.querySelectorAll('.nav-tree a:not(.nav-home)').forEach(link => {
    link.addEventListener('click', function() {
      console.log('[nav.js] Link clicked, closing nav');
      navTree.open = false;
    });
  });

  // Close navigation on pointer/touch down
  let pointerStartY = 0;
  let pointerEventCount = 0;

  const handlePointerDown = function(e) {
    if (e.pointerType === 'touch' || e.pointerType === 'pen') {
      pointerStartY = e.clientY;
      console.log('[nav.js] Pointer down at Y:', pointerStartY, '(type:', e.pointerType + ')');
    }
  };

  const handlePointerMove = function(e) {
    if (!navTree.open) return;
    if (e.pointerType !== 'touch' && e.pointerType !== 'pen') return;

    const currentY = e.clientY;
    const pointerDelta = pointerStartY - currentY; // Positive = moving down

    pointerEventCount++;
    console.log(`[nav.js] Pointer move #${pointerEventCount}: startY=${pointerStartY}, currentY=${currentY}, delta=${pointerDelta}, navOpen=${navTree.open}`);

    // Close on downward movement (10px threshold)
    if (pointerDelta > 10) {
      console.log('[nav.js] Downward movement detected:', pointerDelta, 'Closing nav');
      navTree.open = false;
      pointerEventCount = 0;
    }
  };

  // Handle scroll on any scrollable element
  const handleScroll = function(source) {
    return function() {
      if (!navTree.open) return;
      console.log(`[nav.js] Scroll detected on ${source}, closing nav`);
      navTree.open = false;
    };
  };

  // Listen for pointer events (modern, cross-browser touch handling)
  console.log('[nav.js] Adding pointer event listeners');
  document.addEventListener('pointerdown', handlePointerDown, { passive: true, capture: true });
  document.addEventListener('pointermove', handlePointerMove, { passive: true, capture: true });
  window.addEventListener('pointerdown', handlePointerDown, { passive: true, capture: true });
  window.addEventListener('pointermove', handlePointerMove, { passive: true, capture: true });

  // Listen for scroll events on window
  console.log('[nav.js] Adding scroll event listener on window');
  window.addEventListener('scroll', handleScroll('window'), { passive: true });

  // Listen for scroll events on main-content element
  const mainContent = document.querySelector('.main-content');
  if (mainContent) {
    console.log('[nav.js] Adding scroll event listener on main-content');
    mainContent.addEventListener('scroll', handleScroll('main-content'), { passive: true });
  } else {
    console.log('[nav.js] main-content element not found');
  }

  // Listen for scroll on sidebar and its children
  const sidebar = document.querySelector('.sidebar-left');
  if (sidebar) {
    console.log('[nav.js] Adding scroll event listener on sidebar-left');
    sidebar.addEventListener('scroll', handleScroll('sidebar-left'), { passive: true });
  }

  // Also listen on body and document
  console.log('[nav.js] Adding scroll event listener on document.body');
  if (document.body) {
    document.body.addEventListener('scroll', handleScroll('body'), { passive: true });
  }
  document.addEventListener('scroll', handleScroll('document'), { passive: true });

  // Listen on all potential scrollable elements in sidebar
  ['profile', 'nav-tree'].forEach(className => {
    const elements = document.querySelectorAll('.' + className);
    elements.forEach((el, idx) => {
      console.log(`[nav.js] Adding scroll listener to .${className} #${idx}`);
      el.addEventListener('scroll', handleScroll(className), { passive: true });
    });
  });

  // Debug: Check if page is scrollable
  setTimeout(() => {
    const docHeight = document.documentElement.scrollHeight;
    const viewportHeight = window.innerHeight;
    const bodyHeight = document.body.scrollHeight;
    console.log(`[nav.js] Page dimensions: docHeight=${docHeight}, viewportHeight=${viewportHeight}, bodyHeight=${bodyHeight}, scrollable=${docHeight > viewportHeight}`);
    console.log(`[nav.js] Main content element:`, document.querySelector('.main-content'));
  }, 500);
});
