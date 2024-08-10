// Toggle Dark Mode on Button Click
document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("dark-mode-toggle");

    const header = document.querySelector("header");
    const body = document.body;
    const logoSpan = document.querySelector(".logo span");
    const navLinks = document.querySelectorAll(".nav-links a");
    const navLinksDropdown = document.querySelectorAll(".nav-links .dropdown-content a");
    const navLinksButton = document.querySelectorAll(".nav-links .dark-mode-btn button");
    const navLinksSvg = document.querySelectorAll(".nav-links .dark-mode-btn button svg");
    const main = document.querySelector("main");
    const title = document.querySelectorAll(".title");

    const lightIcon = document.getElementById("light-icon");
    const darkIcon = document.getElementById("dark-icon");

    // Check if dark mode is preferred by user
    let darkMode;

    // Set default
    darkIcon.style.display = "block";
    lightIcon.style.display = "none";

    // Add event listener for toggle button
    toggleButton.addEventListener("click", function () {
        // Toggle dark mode
        darkMode = !darkMode;

        // Update icons based on dark mode state
        if (darkMode) {
            lightIcon.style.display = "none";
            darkIcon.style.display = "block";
        } else {
            lightIcon.style.display = "block";
            darkIcon.style.display = "none";
        }

        body.classList.toggle("dark-mode");
        header.classList.toggle("dark-mode");
        logoSpan.classList.toggle("dark-mode");
        navLinks.forEach((link) => link.classList.toggle("dark-mode"));
        navLinksButton.forEach((link) => link.classList.toggle("dark-mode"));
        navLinksSvg.forEach((link) => link.classList.toggle("dark-mode"));
        navLinksDropdown.forEach((drop) => drop.classList.toggle("dark-mode"));
        main.classList.toggle("dark-mode");
        title.forEach((block) => block.classList.toggle("dark-mode"));
    });
});
