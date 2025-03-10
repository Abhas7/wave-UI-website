// Animation utility functions for interactive elements

// Animate element entrance with fade and slide up
function animateEntrance(element, delay = 0) {
    if (!element) return;
    
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
    }, delay);
}

// Animate wave effect on text
function animateWaveText(element) {
    if (!element) return;
    
    const text = element.textContent;
    element.textContent = '';
    
    // Create individual spans for each letter
    [...text].forEach((char, index) => {
        const span = document.createElement('span');
        span.textContent = char;
        span.style.display = 'inline-block';
        span.style.animationDuration = '0.3s';
        span.style.animationName = 'wave-text';
        span.style.animationIterationCount = 'infinite';
        span.style.animationDirection = 'alternate';
        span.style.animationDelay = `${index * 0.05}s`;
        
        element.appendChild(span);
    });
}

// Animate button with pulse effect
function animateButtonPulse(button) {
    if (!button) return;
    
    button.addEventListener('mouseenter', () => {
        button.classList.add('animate-pulse');
    });
    
    button.addEventListener('mouseleave', () => {
        button.classList.remove('animate-pulse');
    });
}

// Animate counter (for stats, etc.)
function animateCounter(element, targetValue, duration = 2000) {
    if (!element) return;
    
    let startValue = 0;
    const increment = targetValue / (duration / 16);
    let currentValue = startValue;
    
    const counter = setInterval(() => {
        currentValue += increment;
        
        if (currentValue >= targetValue) {
            clearInterval(counter);
            currentValue = targetValue;
        }
        
        element.textContent = Math.floor(currentValue).toLocaleString();
    }, 16);
}

// Initialize intersection observer for revealing elements on scroll
function initScrollAnimations(selector = '.animate-on-scroll', threshold = 0.1) {
    const elements = document.querySelectorAll(selector);
    
    if (!elements.length) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold });
    
    elements.forEach(element => {
        element.style.opacity = '0';
        observer.observe(element);
    });
}

// Export animation functions for use in components
window.waveAnimations = {
    animateEntrance,
    animateWaveText,
    animateButtonPulse,
    animateCounter,
    initScrollAnimations
};
