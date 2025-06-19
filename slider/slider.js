const slider = document.querySelector('.slider');
const thumb = slider.querySelector('.thumb');
thumb.onmousedown = function(event) {
    // Get the initial position of the thumb
    const rect = thumb.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;
    
    // Set the initial position of the thumb
    thumb.style.left = `${event.clientX - offsetX}px`;
    
    // Add mousemove event listener to move the thumb
    document.onmousemove = function(event) {
        const newLeft = event.clientX - offsetX;
        const sliderWidth = slider.clientWidth;
    
        // Ensure the thumb stays within the bounds of the slider
        if (newLeft >= 10 && newLeft <= sliderWidth - rect.width - 10) {
        thumb.style.left = `${newLeft}px`;
        }
    };
    
    // Remove mousemove event listener on mouseup
    document.onmouseup = function() {
        document.onmousemove = null;
        document.onmouseup = null;
    };
}