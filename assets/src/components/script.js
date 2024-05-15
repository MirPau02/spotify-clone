document.addEventListener('DOMContentLoaded', function() {
    const divisor = document.querySelector('.divisor');
    const lateral = document.querySelector('.lateral');
    const derecha = document.querySelector('.derecha');
    let isResizing = false;
  
    divisor.addEventListener('mousedown', function(e) {
      isResizing = true;
      document.addEventListener('mousemove', resize);
      document.addEventListener('mouseup', stopResize);
    });
  
    function resize(e) {
      if (isResizing) {
        const nuevaAnchura = e.clientX - divisor.getBoundingClientRect().left;
        lateral.style.width = nuevaAnchura + 'px';
        derecha.style.width = `calc(100% - ${nuevaAnchura}px)`;
      }
    }
  
    function stopResize() {
      isResizing = false;
      document.removeEventListener('mousemove', resize);
    }
  });
  