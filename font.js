document.addEventListener("DOMContentLoaded", () => {
    let defaultSize = 16; // Default font size in pixels

    function changeFontSize(action) {
        let root = document.documentElement; // Get the root element (entire website)
        let currentSize = parseFloat(getComputedStyle(root).fontSize); // Get current font size

        if (action === "increase") {
            root.style.fontSize = (currentSize + 2) + "px"; // Increase font size
        } else if (action === "decrease") {
            root.style.fontSize = (currentSize - 2) + "px"; // Decrease font size
        } else if (action === "reset") {
            root.style.fontSize = defaultSize + "px"; // Reset to default size
        }
    }

    // Attach function to window so it works with button clicks
    window.changeFontSize = changeFontSize;
});
