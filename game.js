let scale = 1;
const mapContainer = document.getElementById("map-container");

function zoomIn() {
    scale *= 1.2;
    mapContainer.style.transform = `scale(${scale})`;
}

function zoomOut() {
    scale /= 1.2;
    mapContainer.style.transform = `scale(${scale})`;
}

function resetView() {
    scale = 1;
    mapContainer.style.transform = `scale(1)`;
}

// Add click event for selecting a starting location
document.getElementById("world-map").addEventListener("click", function(event) {
    const x = event.offsetX;
    const y = event.offsetY;
    alert(`Starting location set at: (${x}, ${y})`);
});
