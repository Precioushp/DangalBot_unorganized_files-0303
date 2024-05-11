// Check if dark mode was enabled before
var isDarkModeEnabled = localStorage.getItem("darkMode") === "enabled";
if (isDarkModeEnabled) {
    document.body.classList.add("dark-mode");
}

function myFunction() {
    var element = document.body;
    var isDarkMode = element.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", isDarkMode ? "enabled" : "disabled");
}
