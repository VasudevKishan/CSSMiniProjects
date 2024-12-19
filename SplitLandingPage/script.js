const left = document.querySelector(".left");
const right = document.querySelector(".right");
const container = document.querySelector(".container");

function addClassToContainer(classname) {
    container.classList.add(classname);
}

function removeClassFromContainer(classname) {
    container.classList.remove(classname);
}

function handleMouseEnterLeft() {
    addClassToContainer("hover-left");
}

function handleMouseLeaveLeft() {
    removeClassFromContainer("hover-left");
}

function handleMouseEnterRight() {
    addClassToContainer("hover-right");
}

function handleMouseLeaveRight() {
    removeClassFromContainer("hover-right");
}

function removeHoverEventListeners() {
    left.removeEventListener("mouseenter", handleMouseEnterLeft);
    left.removeEventListener("mouseleave", handleMouseLeaveLeft);
    right.removeEventListener("mouseenter", handleMouseEnterRight);
    right.removeEventListener("mouseleave", handleMouseLeaveRight);
}

// Function to check screen width and conditionally remove listeners
function checkScreenWidth() {
    if (window.innerWidth < 800) {
        removeHoverEventListeners();
    } else {
        // Optionally, re-add the event listeners if needed
        left.addEventListener("mouseenter", handleMouseEnterLeft);
        left.addEventListener("mouseleave", handleMouseLeaveLeft);
        right.addEventListener("mouseenter", handleMouseEnterRight);
        right.addEventListener("mouseleave", handleMouseLeaveRight);
    }
}

// Add a resize listener to handle screen width changes
window.addEventListener("resize", checkScreenWidth);

// Initial check
checkScreenWidth();

