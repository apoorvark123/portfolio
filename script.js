// DOM Elements
const navbar = document.getElementById('navbar');
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.querySelectorAll('.nav-link');
const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');
const downloadResumeBtn = document.getElementById('download-resume');

// Navigation Toggle
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Active navigation link highlighting
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 100)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Intersection Observer for animations
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

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.service-card, .portfolio-item, .skill-category, .stat-card');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Add staggered animation to portfolio items
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    portfolioItems.forEach((item, index) => {
        item.style.transitionDelay = `${index * 0.1}s`;
    });

    // Add staggered animation to service cards
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1}s`;
    });
});

// Typing effect for hero title
function typeWriter() {
    const heroTitle = document.querySelector('.hero-title');
    if (!heroTitle) return;
    
    const text = heroTitle.innerHTML;
    heroTitle.innerHTML = '';
    let i = 0;
    
    function type() {
        if (i < text.length) {
            heroTitle.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, 50);
        }
    }
    
    setTimeout(type, 500);
}

// Initialize typing effect and animations
document.addEventListener('DOMContentLoaded', () => {
    typeWriter();
    initScrollAnimations();
});

// Scroll-triggered animations
function initScrollAnimations() {
    const sections = document.querySelectorAll('.about, .skills, .services, .portfolio, .contact');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    sections.forEach(section => {
        observer.observe(section);
    });
}

// Enhanced hover effects for cards
document.addEventListener('DOMContentLoaded', () => {
    // Add ripple effect to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // Add floating animation to profile photo
    const profilePhoto = document.querySelector('.profile-photo');
    if (profilePhoto) {
        profilePhoto.style.animation = 'float 3s ease-in-out infinite';
    }
});

// Add floating animation keyframes
const floatingStyles = `
@keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
}

.ripple {
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.6);
    transform: scale(0);
    animation: ripple 0.6s ease-out;
    z-index: 1;
}

@keyframes ripple {
    to {
        transform: scale(4);
        opacity: 0;
    }
}
`;

// Add styles to head
const animationStyleSheet = document.createElement('style');
animationStyleSheet.textContent = floatingStyles;
document.head.appendChild(animationStyleSheet);

// IMPRESSIVE PARTICLE ANIMATION SYSTEM
class ParticleSystem {
    constructor() {
        this.particles = [];
        this.mouseX = 0;
        this.mouseY = 0;
        this.init();
    }

    init() {
        this.createParticles();
        this.animate();
        this.setupMouseTracking();
    }

    createParticles() {
        const particleCount = 50;
        const heroSection = document.querySelector('.hero');
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.cssText = `
                position: absolute;
                width: ${Math.random() * 4 + 1}px;
                height: ${Math.random() * 4 + 1}px;
                background: rgba(255, 255, 255, ${Math.random() * 0.8 + 0.2});
                border-radius: 50%;
                pointer-events: none;
                z-index: 1;
            `;
            
            heroSection.appendChild(particle);
            
            this.particles.push({
                element: particle,
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                size: Math.random() * 3 + 1
            });
        }
    }

    setupMouseTracking() {
        document.addEventListener('mousemove', (e) => {
            this.mouseX = e.clientX;
            this.mouseY = e.clientY;
        });
    }

    animate() {
        this.particles.forEach(particle => {
            // Update position
            particle.x += particle.vx;
            particle.y += particle.vy;
            
            // Mouse interaction
            const dx = this.mouseX - particle.x;
            const dy = this.mouseY - particle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 100) {
                const force = (100 - distance) / 100;
                particle.vx -= (dx / distance) * force * 0.2;
                particle.vy -= (dy / distance) * force * 0.2;
            }
            
            // Boundaries
            if (particle.x < 0 || particle.x > window.innerWidth) particle.vx *= -1;
            if (particle.y < 0 || particle.y > window.innerHeight) particle.vy *= -1;
            
            // Apply position
            particle.element.style.transform = `translate(${particle.x}px, ${particle.y}px)`;
        });
        
        requestAnimationFrame(() => this.animate());
    }
}

// ADVANCED 3D CARD TRANSFORMATIONS
class Card3D {
    constructor() {
        this.cards = document.querySelectorAll('.service-card, .portfolio-item');
        this.init();
    }

    init() {
        this.cards.forEach(card => {
            card.addEventListener('mousemove', (e) => this.handleMouseMove(e, card));
            card.addEventListener('mouseleave', () => this.handleMouseLeave(card));
        });
    }

    handleMouseMove(e, card) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px) scale(1.05)`;
        card.style.boxShadow = `${-rotateY}px ${rotateX}px 30px rgba(255, 107, 157, 0.4)`;
    }

    handleMouseLeave(card) {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0) scale(1)';
        card.style.boxShadow = '';
    }
}

// MORPHING GRADIENT BACKGROUNDS
class MorphingGradient {
    constructor() {
        this.hero = document.querySelector('.hero');
        this.gradients = [
            'linear-gradient(135deg, #ff6b9d 0%, #c9184a 50%, #ff8fab 100%)',
            'linear-gradient(135deg, #ff8fab 0%, #ff6b9d 50%, #c9184a 100%)',
            'linear-gradient(135deg, #c9184a 0%, #ff8fab 50%, #ff6b9d 100%)',
            'linear-gradient(135deg, #ff6b9d 0%, #ffeef8 50%, #c9184a 100%)'
        ];
        this.currentGradient = 0;
        this.init();
    }

    init() {
        setInterval(() => this.morph(), 3000);
    }

    morph() {
        this.currentGradient = (this.currentGradient + 1) % this.gradients.length;
        this.hero.style.background = this.gradients[this.currentGradient];
        this.hero.style.transition = 'background 2s ease';
    }
}

// INTERACTIVE CURSOR EFFECTS
class CursorEffects {
    constructor() {
        this.init();
    }

    init() {
        this.createCursor();
        this.setupCursorTracking();
    }

    createCursor() {
        this.cursor = document.createElement('div');
        this.cursor.className = 'custom-cursor';
        this.cursor.innerHTML = '<div class="cursor-dot"></div><div class="cursor-ring"></div>';
        document.body.appendChild(this.cursor);
    }

    setupCursorTracking() {
        document.addEventListener('mousemove', (e) => {
            this.cursor.style.left = e.clientX + 'px';
            this.cursor.style.top = e.clientY + 'px';
        });
    }
}

// TEXT REVEAL ANIMATIONS
class TextReveal {
    constructor() {
        this.init();
    }

    init() {
        this.revealText('.hero-title', 'slide-up');
        this.revealText('.hero-subtitle', 'slide-up', 200);
        this.revealText('.hero-description', 'slide-up', 400);
    }

    revealText(selector, animation, delay = 0) {
        const element = document.querySelector(selector);
        if (element) {
            element.style.opacity = '0';
            element.style.transform = 'translateY(50px)';
            
            setTimeout(() => {
                element.style.transition = 'all 1s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, delay);
        }
    }
}

// MAGNETIC HOVER EFFECTS
class MagneticHover {
    constructor() {
        this.init();
    }

    init() {
        const buttons = document.querySelectorAll('.btn');
        buttons.forEach(btn => {
            btn.addEventListener('mousemove', (e) => this.handleMagnetic(e, btn));
            btn.addEventListener('mouseleave', () => this.resetMagnetic(btn));
        });
    }

    handleMagnetic(e, btn) {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px) scale(1.05)`;
    }

    resetMagnetic(btn) {
        btn.style.transform = 'translate(0, 0) scale(1)';
    }
}

// Initialize all impressive effects
document.addEventListener('DOMContentLoaded', () => {
    new ParticleSystem();
    new Card3D();
    new MorphingGradient();
    new CursorEffects();
    new TextReveal();
    new MagneticHover();
});

// Add impressive CSS styles
const impressiveStyles = `
.particle {
    mix-blend-mode: screen;
}

.custom-cursor {
    position: fixed;
    width: 20px;
    height: 20px;
    pointer-events: none;
    z-index: 9999;
    transition: transform 0.1s ease;
}

.cursor-dot {
    width: 8px;
    height: 8px;
    background: #ff6b9d;
    border-radius: 50%;
    position: absolute;
    top: 6px;
    left: 6px;
}

.cursor-ring {
    width: 20px;
    height: 20px;
    border: 2px solid #ff6b9d;
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.5;
    animation: cursorPulse 2s infinite;
}

@keyframes cursorPulse {
    0%, 100% { transform: scale(1); opacity: 0.5; }
    50% { transform: scale(1.2); opacity: 0.3; }
}

.service-card, .portfolio-item {
    transform-style: preserve-3d;
    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.btn {
    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.hero-title, .hero-subtitle, .hero-description {
    transform-origin: center;
}
`;

const impressiveStyleSheet = document.createElement('style');
impressiveStyleSheet.textContent = impressiveStyles;
document.head.appendChild(impressiveStyleSheet);

// Simple, working contact form with Formspree
contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Basic validation
    if (!data.name || !data.email || !data.subject || !data.message) {
        showFormMessage('Please fill in all fields', 'error');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        showFormMessage('Please enter a valid email address', 'error');
        return;
    }
    
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    
    // Show loading state
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitBtn.disabled = true;
    
    try {
        // Submit to Formspree
        const response = await fetch(contactForm.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });
        
        if (response.ok) {
            showFormMessage('Message sent successfully! I\'ll get back to you soon.', 'success');
            contactForm.reset();
        } else {
            throw new Error('Form submission failed');
        }
        
    } catch (error) {
        console.error('Error:', error);
        
        // Fallback to mailto
        const subject = encodeURIComponent(`Portfolio Contact: ${data.subject}`);
        const body = encodeURIComponent(
            `Message from Portfolio Website\n\n` +
            `Name: ${data.name}\n` +
            `Email: ${data.email}\n` +
            `Subject: ${data.subject}\n\n` +
            `Message: ${data.message}\n\n` +
            `---\nSent from: ${window.location.href}`
        );
        
        const mailtoLink = `mailto:apoorvark123@gmail.com?subject=${subject}&body=${body}`;
        window.open(mailtoLink, '_blank');
        
        showFormMessage('Opening your email client... Please send the email to complete.', 'success');
        
    } finally {
        // Reset button
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    }
});

// Show form message
function showFormMessage(message, type) {
    formMessage.textContent = message;
    formMessage.className = `form-message ${type}`;
    formMessage.style.display = 'block';
    
    // Hide message after 5 seconds
    setTimeout(() => {
        formMessage.style.display = 'none';
    }, 5000);
}

// Download resume functionality
downloadResumeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    
    // Create a sample resume (in production, this would be a real file)
    const resumeContent = `
Apoorva R K
Software Developer & Web Developer

CONTACT INFORMATION:
Email: apoorvark123@gmail.com
Phone: +91 8904255965
Location: Davangere, India
LinkedIn: linkedin.com/in/apoorva-r-k-769a12356

EDUCATION:
2nd Year CSE Engineering Student
3rd Semester
Computer Science and Engineering

SKILLS:
Programming Languages: Python, Java, JavaScript, HTML/CSS
Core Concepts: Data Structures, Algorithms, Operating Systems, Databases
Web Technologies: React, Node.js, CSS/Tailwind, Git/GitHub

PROJECTS:
1. E-commerce Website - Full-stack platform with React and Node.js
2. Task Management App - Interactive app with drag-and-drop functionality
3. Calculator App - Advanced calculator with scientific functions
4. Weather App - Real-time weather application with API integration
5. Memory Game - Interactive card game with animations
6. Personal Blog - Responsive blog platform with markdown support

SERVICES:
- Software Development
- Web Development
- Frontend Development
- Problem Solving

PROFESSIONAL SUMMARY:
2nd year CSE engineering student passionate about creating innovative solutions through code. 
Specializing in software development and web technologies with strong fundamentals in 
programming languages, data structures, algorithms, and operating systems.
`;
    
    // Create blob and download
    const blob = new Blob([resumeContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Apoorva_RK_Resume.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
    
    // Show success message
    showFormMessage('Resume downloaded successfully!', 'success');
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Counter animation for stats
function animateCounters() {
    const counters = document.querySelectorAll('.stat-card h3');
    const speed = 200;
    
    counters.forEach(counter => {
        const animate = () => {
            const value = +counter.getAttribute('data-target');
            const data = +counter.innerText;
            const time = value / speed;
            
            if (data < value) {
                counter.innerText = Math.ceil(data + time);
                setTimeout(animate, 1);
            } else {
                counter.innerText = value;
            }
        }
        
        // Set target values
        if (counter.innerText.includes('0+')) {
            counter.setAttribute('data-target', '0');
        } else if (counter.innerText.includes('5+')) {
            counter.setAttribute('data-target', '5');
        } else if (counter.innerText.includes('8+')) {
            counter.setAttribute('data-target', '8');
        }
        
        animate();
    });
}

// Trigger counter animation when stats section is visible
const statsSection = document.querySelector('.about-stats');
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

if (statsSection) {
    statsObserver.observe(statsSection);
}

// Add hover effect to portfolio items
document.querySelectorAll('.portfolio-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-15px) scale(1.02)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Add smooth reveal animation to sections
const sections = document.querySelectorAll('section');
const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('section-visible');
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => {
    sectionObserver.observe(section);
});

// Add CSS for section visibility
const style = document.createElement('style');
style.textContent = `
    .section-visible {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
    
    section {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.8s ease, transform 0.8s ease;
    }
`;
document.head.appendChild(style);

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    // Add initial animations
    setTimeout(() => {
        document.querySelector('.hero').classList.add('section-visible');
    }, 100);
    
    // Add loading complete class
    document.body.classList.add('loaded');
});

// Add loading styles
const loadingStyle = document.createElement('style');
loadingStyle.textContent = `
    body.loaded {
        overflow-x: hidden;
    }
    
    .hero {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 1s ease, transform 1s ease;
    }
`;
document.head.appendChild(loadingStyle);

// Console welcome message
console.log('%c Welcome to Apoorva R K Portfolio! ', 'background: #2563eb; color: white; font-size: 16px; padding: 10px; border-radius: 5px;');
console.log('%c Designed and developed with passion! ', 'background: #10b981; color: white; font-size: 14px; padding: 8px; border-radius: 5px;');
