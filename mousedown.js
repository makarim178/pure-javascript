box.onmousedown = function (e) {
  // Get the mouse position relative to the box
  const rect = box.getBoundingClientRect();
  const boundary = container.getBoundingClientRect();
  const offsetX = e.clientX - rect.left;
  const offsetY = e.clientY - rect.top;
  // Set the initial position of the box
  box.style.left = `${e.clientX - offsetX}px`;
  box.style.top = `${e.clientY - offsetY}px`;

  // Add mousemove event listener to move the box
  document.onmousemove = function (e) {
    if (e.clientX - offsetX > 0 && e.clientX + (rect.width - offsetX) < boundary.width) {
      box.style.left = `${e.clientX - offsetX}px`;
    }
    
    if(e.clientY - offsetY > 0 && e.clientY + (rect.height - offsetY) < boundary.height) {
      box.style.top = `${e.clientY - offsetY}px`;
    }
  };

  // Remove mousemove event listener on mouseup
  document.onmouseup = function () {
    document.onmousemove = null;
    document.onmouseup = null;
  };
}