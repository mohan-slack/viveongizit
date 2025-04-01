
import React, { useEffect, useRef } from 'react';
import { Sparkle, Flame, Star, Headphones, Glasses, Ring } from 'lucide-react';

const DynamicBackground: React.FC = () => {
  const backgroundRef = useRef<HTMLDivElement>(null);

  // Create dynamic elements on mount
  useEffect(() => {
    if (!backgroundRef.current) return;
    
    // Create dynamic elements
    const createElements = () => {
      // Clear any existing elements
      if (backgroundRef.current) {
        while (backgroundRef.current.firstChild) {
          backgroundRef.current.removeChild(backgroundRef.current.firstChild);
        }
      }
      
      // Calculate number of elements based on screen size
      const width = window.innerWidth;
      const height = window.innerHeight;
      const elementCount = Math.floor((width * height) / 30000); // Adjust density here
      
      for (let i = 0; i < elementCount; i++) {
        createRandomElement();
      }
    };

    // Create a single random element
    const createRandomElement = () => {
      if (!backgroundRef.current) return;
      
      const element = document.createElement('div');
      const size = Math.random() * 30 + 10; // Random size between 10px and 40px
      
      // Random position within viewport
      const posX = Math.random() * window.innerWidth;
      const posY = Math.random() * window.innerHeight;
      
      // Random animation duration and delay
      const duration = Math.random() * 15 + 15; // 15-30 seconds
      const delay = Math.random() * 5;
      
      // Set element styling
      element.style.position = 'absolute';
      element.style.left = `${posX}px`;
      element.style.top = `${posY}px`;
      element.style.width = `${size}px`;
      element.style.height = `${size}px`;
      element.style.zIndex = '0';
      element.style.opacity = `${Math.random() * 0.2 + 0.1}`; // Low opacity: 0.1-0.3
      element.style.color = getRandomColor();
      element.style.pointerEvents = 'none'; // Make sure it doesn't interfere with clicks
      
      // Add animation
      element.style.animation = `float ${duration}s ease-in-out ${delay}s infinite`;
      
      // Randomly choose element type (now including tech gadgets)
      const elementType = Math.floor(Math.random() * 6);
      switch (elementType) {
        case 0:
          element.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sparkle"><path d="M12 3v18"/><path d="M3 12h18"/><path d="m12 3 4 4"/><path d="m12 3-4 4"/><path d="m12 21-4-4"/><path d="m12 21 4-4"/><path d="m3 12 4 4"/><path d="m3 12 4-4"/><path d="m21 12-4 4"/><path d="m21 12-4-4"/></svg>`;
          break;
        case 1:
          element.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`;
          break;
        case 2:
          element.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-flame"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>`;
          break;
        case 3: // Headphones (wireless earbuds)
          element.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-headphones"><path d="M3 14h2a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h2"/></svg>`;
          break;
        case 4: // Glasses (smart eyewear)
          element.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-glasses"><circle cx="6" cy="15" r="4"/><circle cx="18" cy="15" r="4"/><path d="M14 15a2 2 0 0 0-2-2 2 2 0 0 0-2 2"/><path d="M2.5 13 5 7c.7-1.3 1.4-2 3-2"/><path d="M21.5 13 19 7c-.7-1.3-1.5-2-3-2"/></svg>`;
          break;
        case 5: // Ring (smart ring)
          element.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-ring"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>`;
          break;
      }
      
      backgroundRef.current.appendChild(element);
    };

    // Random color generator with a focus on brand palette
    const getRandomColor = () => {
      const colors = [
        'rgba(255, 58, 47, 0.7)',    // viveon-red
        'rgba(0, 255, 255, 0.7)',    // viveon-neon-blue
        'rgba(155, 48, 255, 0.7)',   // viveon-neon-purple
      ];
      return colors[Math.floor(Math.random() * colors.length)];
    };

    // Initial creation
    createElements();
    
    // Recreate on window resize
    const handleResize = () => {
      createElements();
    };
    
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div 
      ref={backgroundRef} 
      className="fixed inset-0 pointer-events-none z-0"
      aria-hidden="true"
    />
  );
};

export default DynamicBackground;
