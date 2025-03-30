// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Header scroll effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetSection.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });

    // Animate product cards when they come into view
    const productCards = document.querySelectorAll('.product-card');
    
    // Intersection Observer for animation on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    productCards.forEach(card => {
        observer.observe(card);
    });

    // Add hover effect for CTA button
    const ctaButton = document.querySelector('.cta');
    ctaButton.addEventListener('mouseenter', function() {
        this.style.animation = 'pulse 1s infinite';
    });
    
    ctaButton.addEventListener('mouseleave', function() {
        this.style.animation = '';
    });

    // Add animation to logo
    const logo = document.querySelector('.logo');
    logo.addEventListener('click', function() {
        this.style.animation = 'rubberBand 1s';
        setTimeout(() => {
            this.style.animation = '';
        }, 1000);
    });
});

// Additional animation keyframes
document.head.insertAdjacentHTML('beforeend', `
<style>
@keyframes pulse {
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.05);
    }
    100% {
        transform: scale(1);
    }
}

@keyframes rubberBand {
    0% {
        transform: scale(1);
    }
    30% {
        transform: scaleX(1.25) scaleY(0.75);
    }
    40% {
        transform: scaleX(0.75) scaleY(1.25);
    }
    50% {
        transform: scaleX(1.15) scaleY(0.85);
    }
    65% {
        transform: scaleX(0.95) scaleY(1.05);
    }
    75% {
        transform: scaleX(1.05) scaleY(0.95);
    }
    100% {
        transform: scale(1);
    }
}
</style>
`);