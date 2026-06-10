// Tab switching functionality for shops section
document.querySelectorAll('.tab-btn').forEach(button => {
    button.addEventListener('click', () => {
        const region = button.getAttribute('data-region');
        
        // Remove active class from all tabs and contents
        document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.region-content').forEach(content => content.classList.remove('active'));
        
        // Add active class to clicked tab and corresponding content
        button.classList.add('active');
        document.getElementById(region).classList.add('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Newsletter form submission
document.querySelector('.newsletter-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value;
    
    // Simple validation
    if (email.trim()) {
        alert(`Thank you for subscribing with ${email}! Check your email for confirmation.`);
        e.target.reset();
    } else {
        alert('Please enter a valid email address.');
    }
});

// Add scroll animation to cards
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards for animation
document.querySelectorAll('.price-card, .test-card, .shop-card, .blog-card, .mission-card, .why-card, .value-item, .weekly-card, .country-card, .problem-item, .solution-card, .why-item, .contact-info').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(card);
});

// Mobile menu toggle (if needed for smaller screens)
function setupMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    const navbar = document.querySelector('.navbar');
    
    // Create menu toggle button
    if (window.innerWidth <= 768) {
        const toggleBtn = document.createElement('button');
        toggleBtn.className = 'menu-toggle';
        toggleBtn.innerHTML = '☰';
        toggleBtn.style.cssText = 'background: none; border: none; color: white; font-size: 1.5rem; cursor: pointer; display: none;';
        
        if (navMenu && !document.querySelector('.menu-toggle')) {
            navbar.querySelector('.container').appendChild(toggleBtn);
        }
    }
}

// Initialize on page load
window.addEventListener('load', setupMobileMenu);

// Add active link highlighting in navigation
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            currentSection = section.getAttribute('id');
        }
    });
    
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.style.color = 'white';
        if (link.getAttribute('href').includes(currentSection)) {
            link.style.color = '#d4a574';
        }
    });
});