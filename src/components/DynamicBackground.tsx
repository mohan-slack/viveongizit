
import React, { useEffect, useRef } from 'react';
import { Sparkle, Flame, Star, Headphones, Glasses, CircleDot } from 'lucide-react';

const DynamicBackground: React.FC = () => {
  const backgroundRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);
  const shapesRef = useRef<HTMLDivElement>(null);
  
  // Create dynamic particles on mount
  useEffect(() => {
    if (!particlesRef.current) return;
    
    // Create particles
    const createParticles = () => {
      // Clear any existing elements
      if (particlesRef.current) {
        while (particlesRef.current.firstChild) {
          particlesRef.current.removeChild(particlesRef.current.firstChild);
        }
      }
      
      // Calculate number of elements based on screen size
      const width = window.innerWidth;
      const height = window.innerHeight;
      const elementCount = Math.floor((width * height) / 30000); // Adjust density here
      
      for (let i = 0; i < elementCount; i++) {
        createRandomParticle();
      }
    };

    // Create a single random particle
    const createRandomParticle = () => {
      if (!particlesRef.current) return;
      
      const particle = document.createElement('div');
      const size = Math.random() * 20 + 5; // Random size between 5px and 25px
      
      // Random position within viewport
      const posX = Math.random() * window.innerWidth;
      const posY = Math.random() * window.innerHeight;
      
      // Random animation duration and delay
      const duration = Math.random() * 15 + 15; // 15-30 seconds
      const delay = Math.random() * 5;
      
      // Set particle styling
      particle.style.position = 'absolute';
      particle.style.left = `${posX}px`;
      particle.style.top = `${posY}px`;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.zIndex = '0';
      particle.style.opacity = `${Math.random() * 0.15 + 0.05}`; // Low opacity: 0.05-0.2
      particle.style.color = getRandomColor();
      particle.style.pointerEvents = 'none'; // Make sure it doesn't interfere with clicks
      
      // Add animation
      particle.style.animation = `float ${duration}s ease-in-out ${delay}s infinite`;
      
      // Randomly choose particle type
      const particleType = Math.floor(Math.random() * 6);
      switch (particleType) {
        case 0:
          particle.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sparkle"><path d="M12 3v18"/><path d="M3 12h18"/><path d="m12 3 4 4"/><path d="m12 3-4 4"/><path d="m12 21-4-4"/><path d="m12 21 4-4"/><path d="m3 12 4 4"/><path d="m3 12 4-4"/><path d="m21 12-4 4"/><path d="m21 12-4-4"/></svg>`;
          break;
        case 1:
          particle.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`;
          break;
        case 2:
          particle.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-flame"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>`;
          break;
        case 3: // Headphones (wireless earbuds)
          particle.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-headphones"><path d="M3 14h2a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h2"/></svg>`;
          break;
        case 4: // Glasses (smart eyewear)
          particle.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-glasses"><circle cx="6" cy="15" r="4"/><circle cx="18" cy="15" r="4"/><path d="M14 15a2 2 0 0 0-2-2 2 2 0 0 0-2 2"/><path d="M2.5 13 5 7c.7-1.3 1.4-2 3-2"/><path d="M21.5 13 19 7c-.7-1.3-1.5-2-3-2"/></svg>`;
          break;
        case 5: // Smart ring (using CircleDot icon instead of Ring)
          particle.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-dot"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="1"/></svg>`;
          break;
      }
      
      particlesRef.current.appendChild(particle);
    };

    // Create abstract geometric shapes
    const createShapes = () => {
      if (!shapesRef.current) return;
      
      // Clear existing shapes
      if (shapesRef.current) {
        while (shapesRef.current.firstChild) {
          shapesRef.current.removeChild(shapesRef.current.firstChild);
        }
      }
      
      // Number of shapes based on screen size
      const width = window.innerWidth;
      const height = window.innerHeight;
      const shapeCount = Math.floor((width * height) / 100000); // Fewer shapes than particles
      
      for (let i = 0; i < shapeCount; i++) {
        createRandomShape();
      }
    };
    
    const createRandomShape = () => {
      if (!shapesRef.current) return;
      
      const shape = document.createElement('div');
      
      // Random position within viewport
      const posX = Math.random() * window.innerWidth;
      const posY = Math.random() * window.innerHeight;
      
      // Random shape properties
      const shapeType = Math.floor(Math.random() * 4); // 0: circle, 1: square, 2: triangle, 3: line
      const size = Math.random() * 80 + 40; // Larger than particles: 40-120px
      const color = getRandomColor(true); // Get colors with higher opacity for shapes
      const animationDuration = Math.random() * 20 + 20; // 20-40 seconds
      const animationDelay = Math.random() * 10;
      
      // Base styling
      shape.style.position = 'absolute';
      shape.style.left = `${posX}px`;
      shape.style.top = `${posY}px`;
      shape.style.zIndex = '0';
      shape.style.opacity = `${Math.random() * 0.2 + 0.05}`; // Slightly higher opacity range
      shape.style.pointerEvents = 'none';
      shape.style.backdropFilter = 'blur(5px)';
      shape.style.animation = `pulse-glow ${animationDuration}s ease-in-out ${animationDelay}s infinite`;
      
      // Create specific shape type
      switch (shapeType) {
        case 0: // Circle
          shape.style.width = `${size}px`;
          shape.style.height = `${size}px`;
          shape.style.borderRadius = '50%';
          shape.style.border = `1px solid ${color}`;
          shape.style.boxShadow = `0 0 20px ${color}`;
          break;
        case 1: // Square/Rectangle
          shape.style.width = `${size}px`;
          shape.style.height = `${size * 0.8}px`;
          shape.style.border = `1px solid ${color}`;
          shape.style.boxShadow = `0 0 20px ${color}`;
          break;
        case 2: // Triangle (using CSS border trick)
          shape.style.width = '0';
          shape.style.height = '0';
          shape.style.borderLeft = `${size/2}px solid transparent`;
          shape.style.borderRight = `${size/2}px solid transparent`;
          shape.style.borderBottom = `${size}px solid ${color}`;
          shape.style.opacity = `${Math.random() * 0.1 + 0.05}`; // Lower opacity for filled shapes
          break;
        case 3: // Line
          shape.style.width = `${size * 1.5}px`;
          shape.style.height = '1px';
          shape.style.backgroundColor = color;
          shape.style.transform = `rotate(${Math.random() * 180}deg)`;
          shape.style.boxShadow = `0 0 10px ${color}`;
          break;
      }
      
      shapesRef.current.appendChild(shape);
    };

    // Random color generator with a focus on brand palette with optional higher opacity
    const getRandomColor = (isShape = false) => {
      const colors = [
        'rgba(255, 58, 47, ' + (isShape ? '0.8' : '0.7') + ')',    // viveon-red
        'rgba(0, 255, 255, ' + (isShape ? '0.8' : '0.7') + ')',    // viveon-neon-blue
        'rgba(155, 48, 255, ' + (isShape ? '0.8' : '0.7') + ')',   // viveon-neon-purple
        // Adding deeper blues and purples as requested
        'rgba(41, 121, 255, ' + (isShape ? '0.8' : '0.7') + ')',   // deep blue
        'rgba(94, 23, 235, ' + (isShape ? '0.8' : '0.7') + ')',    // rich purple
        'rgba(0, 212, 255, ' + (isShape ? '0.8' : '0.7') + ')',    // bright blue
      ];
      return colors[Math.floor(Math.random() * colors.length)];
    };

    // Initial creation
    createParticles();
    createShapes();
    
    // Recreate on window resize
    const handleResize = () => {
      createParticles();
      createShapes();
    };
    
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0" aria-hidden="true">
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-viveon-darker via-[#141b29] to-[#0d1526] animate-gradient-shift"></div>
      
      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(0, 255, 255, 0.1) 25%, rgba(0, 255, 255, 0.1) 26%, transparent 27%, transparent 74%, rgba(0, 255, 255, 0.1) 75%, rgba(0, 255, 255, 0.1) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(0, 255, 255, 0.1) 25%, rgba(0, 255, 255, 0.1) 26%, transparent 27%, transparent 74%, rgba(0, 255, 255, 0.1) 75%, rgba(0, 255, 255, 0.1) 76%, transparent 77%, transparent)',
        backgroundSize: '80px 80px'
      }}></div>
      
      {/* Flowing gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-viveon-neon-blue/5 rounded-full filter blur-3xl opacity-30 animate-float" style={{animationDuration: '20s', animationDelay: '0s'}}></div>
      <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-viveon-neon-purple/5 rounded-full filter blur-3xl opacity-20 animate-float" style={{animationDuration: '25s', animationDelay: '5s'}}></div>
      <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-viveon-red/5 rounded-full filter blur-3xl opacity-25 animate-float" style={{animationDuration: '30s', animationDelay: '10s'}}></div>
      
      {/* Container for dynamic particle elements */}
      <div ref={particlesRef} className="absolute inset-0"></div>
      
      {/* Container for abstract geometric shapes */}
      <div ref={shapesRef} className="absolute inset-0"></div>
      
      {/* Custom animation styles added as a style element */}
      <style>
        {`
          @keyframes gradient-shift {
            0% { background-position: 0% 50% }
            50% { background-position: 100% 50% }
            100% { background-position: 0% 50% }
          }
        `}
      </style>
    </div>
  );
};

export default DynamicBackground;
