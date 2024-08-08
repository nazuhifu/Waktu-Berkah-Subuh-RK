// Toggle Dark Mode on Button Click
document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("dark-mode-toggle");
    const logoSpan = document.querySelector(".logo span");
    const body = document.body;
    const header = document.querySelector("header");
    const navLinks = document.querySelectorAll(".nav-links a");
    const main = document.querySelector("main");
    const content = document.querySelector(".content");
    const titleBlocks = document.querySelectorAll(".title-block");
    const ayat = document.querySelectorAll(".ayat");
    const taawudz = document.querySelectorAll(".taawudz");
    const head = document.getElementById("header");
    const lightIcon = document.getElementById("light-icon");
    const darkIcon = document.getElementById("dark-icon");

    // Check if dark mode is preferred by user
    const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    let darkMode = darkModeMediaQuery.matches;

    // Set dark-mode class on body and update icons
    if (darkMode) {
        body.classList.add("dark-mode");
        darkIcon.style.display = "block";
        lightIcon.style.display = "none";
    } else {
        lightIcon.style.display = "block";
        darkIcon.style.display = "none";
    }

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

        main.classList.toggle("dark-mode");
        head.classList.toggle("dark-mode");
        content.classList.toggle("dark-mode");

        titleBlocks.forEach((block) => block.classList.toggle("dark-mode"));
        ayat.forEach((ayat) => ayat.classList.toggle("dark-mode"));
        taawudz.forEach((text) => text.classList.toggle("dark-mode"));

        // Toggle dark-mode class on body
        body.classList.toggle("dark-mode");

        // Toggle dark mode styles for header, nav links, and logo span
        header.classList.toggle("dark-mode");
        navLinks.forEach((link) => link.classList.toggle("dark-mode"));
        logoSpan.classList.toggle("dark-mode");
    });
});
