const imagen = document.getElementById("popo");

imagen.addEventListener('mousedown', function(event) {
  imagen.style.position = 'absolute';
  imagen.style.zIndex = 1000;

  const initialOffsetX = event.pageX - imagen.getBoundingClientRect().left;
  const initialOffsetY = event.pageY - imagen.getBoundingClientRect().top;

  function onMouseMove(event) {
    const newX = event.pageX - initialOffsetX;
    const newY = event.pageY - initialOffsetY;

    // Ensure image stays within document boundaries (optional)
    imagen.style.left = Math.max(0, Math.min(document.documentElement.clientWidth - imagen.clientWidth, newX)) + 'px';
    imagen.style.top = Math.max(0, Math.min(document.documentElement.clientHeight - imagen.clientHeight, newY)) + 'px';
  }

  document.addEventListener('mousemove', onMouseMove);

  imagen.addEventListener('mouseup', function() {
    document.removeEventListener('mousemove', onMouseMove);
  });

  // Prevent default dragging behavior
  imagen.ondragstart = function() {
    return false;
  };
});