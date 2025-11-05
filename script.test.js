/**
 * @jest-environment jsdom
 */

describe('Animation Functions', () => {
    beforeEach(() => {
        // Set up our document body
        document.body.innerHTML = `
            <div class="container">
                <h1>Test Title</h1>
                <p>Test paragraph</p>
            </div>
        `;
        
        // Load our script
        require('./script.js');
        
        // Trigger DOMContentLoaded
        document.dispatchEvent(new Event('DOMContentLoaded'));
    });

    test('elements are selected and styled correctly', () => {
        const elements = document.querySelectorAll('.container > *');
        
        elements.forEach(element => {
            expect(element.style.transition).toBeDefined();
            expect(element.style.opacity).toBe('0');
            expect(element.style.transform).toContain('translateY(20px)');
        });
    });

    test('sparkle elements are created and cleaned up', () => {
        jest.useFakeTimers();
        
        // Initial state
        expect(document.querySelectorAll('span').length).toBe(0);
        
        // After 2 seconds (sparkle creation)
        jest.advanceTimersByTime(2000);
        expect(document.querySelectorAll('span').length).toBe(1);
        
        // After sparkle removal (1.5 seconds later)
        jest.advanceTimersByTime(1500);
        expect(document.querySelectorAll('span').length).toBe(0);
        
        jest.useRealTimers();
    });
});