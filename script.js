document.addEventListener('DOMContentLoaded', () => {
    // Select all major elements to animate
    const elements = document.querySelectorAll('.container > *');
    
    // Function to create floating animation
    const floatElement = (element, index) => {
        // Set initial state
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        
        // Animate with delay based on index
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
            
            // Add subtle hover effect after initial animation
            element.addEventListener('mouseover', () => {
                element.style.transform = 'translateY(-5px) scale(1.02)';
                element.style.transition = 'all 0.3s ease';
            });
            
            element.addEventListener('mouseout', () => {
                element.style.transform = 'translateY(0) scale(1)';
                element.style.transition = 'all 0.3s ease';
            });
        }, 100 * (index + 1));
    };
    
    // Apply animation to each element
    elements.forEach(floatElement);
    
    // Add a sparkle effect to the h1
    const title = document.querySelector('h1');
    setInterval(() => {
        const sparkle = document.createElement('span');
        sparkle.innerHTML = '✨';
        sparkle.style.position = 'absolute';
        sparkle.style.left = Math.random() * title.offsetWidth + 'px';
        sparkle.style.top = Math.random() * title.offsetHeight + 'px';
        sparkle.style.animation = 'sparkle 1.5s linear forwards';
        title.style.position = 'relative';
        title.appendChild(sparkle);
        
        setTimeout(() => sparkle.remove(), 1500);
    }, 2000);
});

// Add sparkle animation to stylesheet
const style = document.createElement('style');
style.textContent = `
@keyframes sparkle {
    0% {
        transform: scale(0) rotate(0deg);
        opacity: 0;
    }
    50% {
        transform: scale(1) rotate(180deg);
        opacity: 1;
    }
    100% {
        transform: scale(0) rotate(360deg);
        opacity: 0;
    }
}
`;