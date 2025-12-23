// Theme Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
    const themeToggleBtn = document.getElementById('themeToggle');
    const currentThemeSpan = document.getElementById('currentTheme');
    const body = document.body;
    
    // Check for saved theme preference or default to dark
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    
    // Toggle theme on button click
    themeToggleBtn.addEventListener('click', function() {
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
        
        // Update CSS variables for immediate feedback
        updateThemeVariables(theme);
    }
    
    function updateThemeVariables(theme) {
        const root = document.documentElement;
        
        if (theme === 'light') {
            root.style.setProperty('--transition-speed', '0.3s');
        } else {
            root.style.setProperty('--transition-speed', '0.3s');
        }
    }
    
    // Update theme-aware elements on theme change
    function updateThemeAwareElements() {
        // This function can be extended to update any theme-specific elements
        const themeCards = document.querySelectorAll('.color-item, .font-card, .style-card');
        themeCards.forEach(card => {
            card.style.backgroundColor = getComputedStyle(document.documentElement)
                .getPropertyValue('--bg-secondary').trim();
        });
    }
    
    // Listen for theme changes (for future extensibility)
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.attributeName === 'class') {
                updateThemeAwareElements();
            }
        });
    });
    
    observer.observe(body, { attributes: true });
    
    // Initialize theme-aware elements
    updateThemeAwareElements();
});

// Additional theme-related utilities
function getCurrentTheme() {
    return document.body.classList.contains('dark-theme') ? 'dark' : 'light';
}

// Example: Function to apply theme to dynamically added elements
function applyThemeToElement(element) {
    const theme = getCurrentTheme();
    if (theme === 'dark') {
        element.classList.add('dark-theme-element');
        element.classList.remove('light-theme-element');
    } else {
        element.classList.add('light-theme-element');
        element.classList.remove('dark-theme-element');
    }
}

// Log theme changes for debugging
console.log('Design System Theme Toggle loaded successfully!');
console.log('Current theme saved in localStorage:', localStorage.getItem('theme'));