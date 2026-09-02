document.addEventListener('DOMContentLoaded', function() {
  const navTree = document.querySelector('.nav-tree');
  if (!navTree) return;

  // Only enable collapse on mobile
  const isMobile = window.matchMedia('(max-width: 768px)').matches;
  if (!isMobile) return;

  // Close details when a navigation link is clicked (except the root ~)
  document.querySelectorAll('.nav-tree a:not(.nav-home)').forEach(link => {
    link.addEventListener('click', function() {
      navTree.open = false;
    });
  });

  // Close navigation on pointer/touch down
  let pointerStartY = 0;

  const handlePointerDown = function(e) {
    if (e.pointerType === 'touch' || e.pointerType === 'pen') {
      pointerStartY = e.clientY;
    }
  };

  const handlePointerMove = function(e) {
    if (!navTree.open) return;
    if (e.pointerType !== 'touch' && e.pointerType !== 'pen') return;

    const currentY = e.clientY;
    const pointerDelta = pointerStartY - currentY; // Positive = moving down

    // Close on downward movement (10px threshold)
    if (pointerDelta > 10) {
      navTree.open = false;
    }
  };

  // Handle scroll on any scrollable element
  const handleScroll = function() {
    if (!navTree.open) return;
    navTree.open = false;
  };

  // Listen for pointer events (modern, cross-browser touch handling)
  document.addEventListener('pointerdown', handlePointerDown, { passive: true, capture: true });
  document.addEventListener('pointermove', handlePointerMove, { passive: true, capture: true });
  window.addEventListener('pointerdown', handlePointerDown, { passive: true, capture: true });
  window.addEventListener('pointermove', handlePointerMove, { passive: true, capture: true });

  // Listen for scroll events on main-content element
  const mainContent = document.querySelector('.main-content');
  if (mainContent) {
    mainContent.addEventListener('scroll', handleScroll, { passive: true });
  }

  // Listen for scroll on sidebar
  const sidebar = document.querySelector('.sidebar-left');
  if (sidebar) {
    sidebar.addEventListener('scroll', handleScroll, { passive: true });
  }

  // Also listen on body and document
  if (document.body) {
    document.body.addEventListener('scroll', handleScroll, { passive: true });
  }
  document.addEventListener('scroll', handleScroll, { passive: true });
  window.addEventListener('scroll', handleScroll, { passive: true });
});
