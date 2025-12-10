// --- 1. THEME TOGGLE LOGIC (Black/White Mode) ---
const themeToggleBtn = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

// Function to initialize theme from local storage
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        htmlElement.classList.add('dark');
    }
}

// Event listener for theme button click
themeToggleBtn.addEventListener('click', () => {
    htmlElement.classList.toggle('dark');
    
    // Save the new preference to local storage
    const isDark = htmlElement.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// Run initialization on load
initializeTheme();


// --- 2. GRID TOGGLE LOGIC ---
const gridToggleBtn = document.getElementById('grid-toggle');
const gridOverlay = document.getElementById('grid-overlay');

gridToggleBtn.addEventListener('click', () => {
    // Toggle between opacity-0 (hidden) and opacity-100 (visible)
    if (gridOverlay.classList.contains('opacity-0')) {
        gridOverlay.classList.remove('opacity-0');
        gridOverlay.classList.add('opacity-100');
    } else {
        gridOverlay.classList.remove('opacity-100');
        gridOverlay.classList.add('opacity-0');
    }
});


// --- 3. PERSONA SECTION LOGIC ---
const personaBtns = document.querySelectorAll('.persona-btn');
const personaContent = document.getElementById('persona-content');

// Define messages for each audience type
const personaMessages = {
    'anyone': "I create meaningful, beautiful designs that put people first.",
    'recruiter': "I am an UX/Ui designer with 2 years of experience in crafting thoughtful digital experiences. I am actively seeking new opportunities that will allow me to grow, expand my skills and contribute meaningful design work.",
    'manager': "I care about process as much as pixels. I thrive in environments that value user research, iterative testing, and collaborative critiques. I am self-directed but love being part of a team.",
    'engineer': "I am comfortable inspecting elements, and I keep my Figma files well-organized with auto-layout, clear layer naming, and thoughtful component structures. I also have a working understanding of HTML/CSS, which helps me collaborate smoothly with developers."
};

personaBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove 'active' styles from all buttons and set new one
        personaBtns.forEach(b => {
            b.classList.remove('active-persona', 'opacity-100');
            b.classList.add('opacity-40');
        });
        btn.classList.remove('opacity-40');
        btn.classList.add('active-persona', 'opacity-100');

        // Get the target audience key
        const target = btn.getAttribute('data-target');
        
        // Update text with a small fade effect for smooth transition
        personaContent.style.opacity = '0';
        
        setTimeout(() => {
            personaContent.textContent = personaMessages[target];
            personaContent.style.opacity = '1';
        }, 300); // Wait for CSS transition on opacity to complete
    });
});

// --- 4. MOBILE MENU TOGGLE ---
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const sidebar = document.querySelector('aside');

mobileMenuBtn.addEventListener('click', () => {
    // Toggle classes to make the sidebar appear full-screen on mobile
    sidebar.classList.toggle('hidden');
    sidebar.classList.toggle('flex');
    sidebar.classList.toggle('fixed');
    sidebar.classList.toggle('inset-0');
    sidebar.classList.toggle('bg-white');
    sidebar.classList.toggle('dark:bg-dark');
    sidebar.classList.toggle('z-50');
});

  
