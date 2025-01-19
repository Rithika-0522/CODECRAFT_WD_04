


document.querySelectorAll('.container a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Toggle navigation menu on small screens
const header = document.querySelector('.header');
const menuToggle = document.createElement('div');
menuToggle.className = 'menu-toggle';
menuToggle.innerHTML = '&#9776;'; // Hamburger icon
header.appendChild(menuToggle);

menuToggle.addEventListener('click', () => {
    const container = document.querySelector('.container');
    container.classList.toggle('active'); // Toggle active class for the menu
});

// Close menu when clicking a link (for mobile users)
document.querySelectorAll('.container a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.container').classList.remove('active');
    });
});

// Scroll animations - Reveal elements as user scrolls
const revealElements = document.querySelectorAll('.Home, .skills, .about, .edu, .contact-form');

function revealOnScroll() {
    const scrollPosition = window.innerHeight;
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < scrollPosition - 100) {
            element.classList.add('reveal');
        } else {
            element.classList.remove('reveal');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);

window.addEventListener('load', revealOnScroll);

