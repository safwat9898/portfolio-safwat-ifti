// ------------------ THEME TOGGLE ------------------
const themeToggleBtn = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;
const sunIcon = document.getElementById('sun-icon');
const moonIcon = document.getElementById('moon-icon');

function updateThemeIcon() {
    const isDark = htmlElement.classList.contains('dark');
    sunIcon.classList.toggle('hidden', isDark);
    moonIcon.classList.toggle('hidden', !isDark);
}

function initializeTheme() {
    const savedTheme = localStorage.getItem('theme');
    htmlElement.classList.toggle('dark', savedTheme === 'dark');
    updateThemeIcon();
}

themeToggleBtn.addEventListener('click', () => {
    htmlElement.classList.toggle('dark');
    const isDark = htmlElement.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    updateThemeIcon();
});

initializeTheme();

// ------------------ GRID OVERLAY TOGGLE ------------------
const gridToggleBtn = document.getElementById('grid-toggle');
const gridOverlay = document.getElementById('grid-overlay');

gridToggleBtn.addEventListener('click', () => {
    gridOverlay.classList.toggle('opacity-0');
    gridOverlay.classList.toggle('opacity-100');
});

// ------------------ PERSONA SECTION ------------------
const personaBtns = document.querySelectorAll('.persona-btn');
const personaContent = document.getElementById('persona-content');

const personaMessages = {
    anyone: "I create meaningful, beautiful designs that put people first.",
    recruiter: "I am an UX/UI designer with 2 years of experience in crafting thoughtful digital experiences.",
    manager: "I care about process as much as pixels. I thrive in collaborative environments.",
    engineer: "I organize Figma files cleanly and understand HTML/CSS for smoother collaboration."
};

personaBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        personaBtns.forEach(b => {
            b.classList.remove('active-persona', 'opacity-100');
            b.classList.add('opacity-40');
        });

        btn.classList.remove('opacity-40');
        btn.classList.add('active-persona', 'opacity-100');

        const target = btn.dataset.target;
        personaContent.style.opacity = '0';

        setTimeout(() => {
            personaContent.textContent = personaMessages[target];
            personaContent.style.opacity = '1';
        }, 300);
    });
});

// ------------------ MOBILE MENU ------------------
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const sidebar = document.querySelector('aside');

mobileMenuBtn?.addEventListener('click', () => {
    sidebar.classList.toggle('hidden');
    sidebar.classList.toggle('flex');
    sidebar.classList.toggle('fixed');
    sidebar.classList.toggle('inset-0');
    sidebar.classList.toggle('bg-white');
    sidebar.classList.toggle('dark:bg-dark');
    sidebar.classList.toggle('z-50');
});
  
