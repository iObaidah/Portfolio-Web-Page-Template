// Theme Toggle Functionality
document.addEventListener('DOMContentLoaded', function () {
    const themeToggleBtn = document.getElementById('themeToggle');
    const currentThemeSpan = document.getElementById('currentTheme');
    const body = document.body;

    // Check for saved theme preference or default to dark
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);

    // Toggle theme on button click
    themeToggleBtn.addEventListener('click', function () {
        const currentTheme = body.classList.contains('dark-theme') ? 'dark' : 'light';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    });

    function setTheme(theme) {
        // Remove both classes first
        body.classList.remove('light-theme', 'dark-theme');

        // Add the selected theme class
        body.classList.add(theme === 'dark' ? 'dark-theme' : 'light-theme');

        // Update button text and icon
        const icon = themeToggleBtn.querySelector('i');
        const text = themeToggleBtn.querySelector('.toggle-text');

        if (theme === 'dark') {
            icon.className = 'fas fa-moon';
            text.textContent = 'Dark Mode';
            currentThemeSpan.textContent = 'Dark';
        } else {
            icon.className = 'fas fa-sun';
            text.textContent = 'Light Mode';
            currentThemeSpan.textContent = 'Light';
        }

        // Save theme preference to localStorage
        localStorage.setItem('theme', theme);
    }

    // Log theme changes for debugging
    console.log('Design System Theme Toggle loaded successfully!');
    console.log('Current theme saved in localStorage:', localStorage.getItem('theme'));
});


window.onload = function () {
    alert("⚠️ IMPORTANT NOTICE ⚠️\n\n The website is under construction.");
};