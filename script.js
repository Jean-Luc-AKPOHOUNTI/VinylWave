// Parallax effect on scroll
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroSection = document.querySelector('.hero-section');
    const vinylRecord = document.querySelector('.vinyl-record');
    
    if (heroSection) {
        heroSection.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Interactive vinyl click
document.querySelector('.vinyl-record').addEventListener('click', () => {
    const vinyl = document.querySelector('.vinyl-record');
    vinyl.style.animationDuration = '0.8s';
    setTimeout(() => {
        vinyl.style.animationDuration = '3s';
    }, 2000);
});

// Button click effects
document.querySelectorAll('.btn-primary, .btn-secondary').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const ripple = document.createElement('span');
        const rect = btn.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.position = 'absolute';
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.style.background = 'rgba(255, 255, 255, 0.3)';
        ripple.style.borderRadius = '50%';
        ripple.style.transform = 'scale(0)';
        ripple.style.animation = 'ripple 0.6s linear';
        ripple.style.pointerEvents = 'none';
        
        btn.style.position = 'relative';
        btn.style.overflow = 'hidden';
        btn.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// SPA Navigation
function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('section').forEach(section => {
        section.style.display = 'none';
        section.classList.remove('active');
    });
    
    // Show target section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.style.display = 'flex';
        setTimeout(() => targetSection.classList.add('active'), 50);
        
        // Show instructions modal for discover section (only once)
        if (sectionId === 'discover') {
            const hasSeenInstructions = localStorage.getItem('vinylwave-instructions-seen');
            if (!hasSeenInstructions) {
                setTimeout(() => showInstructionsModal(), 500);
            }
        }
    }
}

// Instructions Modal
function showInstructionsModal() {
    const modal = document.getElementById('instructions-modal');
    if (modal) {
        modal.classList.add('show');
    }
}

function hideInstructionsModal() {
    const modal = document.getElementById('instructions-modal');
    if (modal) {
        modal.classList.remove('show');
        // Mark as seen in localStorage
        localStorage.setItem('vinylwave-instructions-seen', 'true');
    }
}

// Setup instructions modal events
function setupInstructionsModal() {
    const modal = document.getElementById('instructions-modal');
    const closeBtn = document.querySelector('.close-instructions');
    const gotItBtn = document.querySelector('.got-it-btn');
    const backdrop = document.querySelector('.modal-backdrop');
    
    if (closeBtn) {
        closeBtn.addEventListener('click', hideInstructionsModal);
    }
    
    if (gotItBtn) {
        gotItBtn.addEventListener('click', hideInstructionsModal);
    }
    
    if (backdrop) {
        backdrop.addEventListener('click', hideInstructionsModal);
    }
    
    // Close with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal && modal.classList.contains('show')) {
            hideInstructionsModal();
        }
    });
}

// Navigation active state
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Remove active class from all links
        document.querySelectorAll('.nav-links a').forEach(l => l.classList.remove('active'));
        // Add active class to clicked link
        this.classList.add('active');
        
        // Get section ID from href
        const sectionId = this.getAttribute('href').substring(1);
        showSection(sectionId);
        
        // Initialize discover page if needed
        if (sectionId === 'discover') {
            setTimeout(() => initCSSCarousel(), 100);
        }
    });
});

// Initialize with home section
window.addEventListener('load', () => {
    showSection('home');
    setupInstructionsModal();
    setupStartListeningButton();
});

// Setup start listening button
function setupStartListeningButton() {
    const startBtn = document.getElementById('start-listening-btn');
    if (startBtn) {
        startBtn.addEventListener('click', () => {
            // Update navigation
            document.querySelectorAll('.nav-links a').forEach(l => l.classList.remove('active'));
            document.querySelector('a[href="#discover"]').classList.add('active');
            
            // Show discover section
            showSection('discover');
            
            // Initialize carousel
            setTimeout(() => initCSSCarousel(), 100);
        });
    }
}



// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});