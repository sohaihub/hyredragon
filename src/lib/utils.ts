
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Function to add a counting animation to elements
export function setupCountUpAnimation() {
  const countElements = document.querySelectorAll('.animate-count-up');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target as HTMLElement;
        const targetValue = parseInt(el.getAttribute('data-value') || '0');
        
        let startValue = 0;
        const duration = 2000; // 2 seconds
        const increment = targetValue / (duration / 16); // 60fps
        const startTime = performance.now();
        
        function updateCount(currentTime: number) {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const currentValue = Math.floor(progress * targetValue);
          
          el.innerText = `${currentValue}%`;
          
          if (progress < 1) {
            requestAnimationFrame(updateCount);
          }
        }
        
        requestAnimationFrame(updateCount);
        observer.unobserve(el);
      }
    });
  }, {
    threshold: 0.1
  });
  
  countElements.forEach(el => observer.observe(el));
  
  return observer;
}

// Function to setup highlight animations
export function setupHighlightAnimations() {
  const highlights = document.querySelectorAll('.highlight-quote');
  
  highlights.forEach(highlight => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('highlight-active');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
    
    observer.observe(highlight);
  });
}
