document.addEventListener("DOMContentLoaded", function () {
    const htmlInput = document.getElementById("html");
    const cssInput = document.getElementById("css");
    const jsInput = document.getElementById("js");

    // Load saved data on page load
    htmlInput.value = localStorage.getItem("htmlCode") || "";
    cssInput.value = localStorage.getItem("cssCode") || "";
    jsInput.value = localStorage.getItem("jsCode") || "";

    // Function to save data
    function saveToLocalStorage() {
        localStorage.setItem("htmlCode", htmlInput.value);
        localStorage.setItem("cssCode", cssInput.value);
        localStorage.setItem("jsCode", jsInput.value);
    }

    // Add event listeners to save changes automatically
    htmlInput.addEventListener("input", saveToLocalStorage);
    cssInput.addEventListener("input", saveToLocalStorage);
    jsInput.addEventListener("input", saveToLocalStorage);
});

















