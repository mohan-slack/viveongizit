
import React, { useEffect, useRef } from 'react';

const ParallaxBackground: React.FC = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const layersRef = useRef<(HTMLDivElement | null)[]>([]);
  
  // Set up parallax scrolling effect
  useEffect(() => {
    // Create the parallax layers
    const layers = layersRef.current;
    
    // Parallax scroll handler
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      // Apply different speeds to different layers
      layers.forEach((layer, index) => {
        if (layer) {
          // Different speeds for different layers
          // First layer moves slowest, deeper layers move faster
          const speed = (index + 1) * 0.1;
          const yPos = scrollY * speed;
          layer.style.transform = `translateY(${yPos}px)`;
        }
      });
    };
    
    // Attach scroll event
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <div ref={parallaxRef} className="fixed inset-0 pointer-events-none z-0" aria-hidden="true">
      {/* Deep background layer - slowest */}
      <div 
        ref={el => { layersRef.current[0] = el; }} 
        className="absolute inset-0 opacity-20"
      >
        {/* Tech-themed SVG pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%239C92AC\' fill-opacity=\'0.1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          backgroundSize: '60px 60px'
        }}></div>
      </div>
      
      {/* Middle layer - medium speed */}
      <div 
        ref={el => { layersRef.current[1] = el; }} 
        className="absolute inset-0 opacity-10"
      >
        {/* Abstract curved lines */}
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,50 C20,30 50,70 100,50" stroke="rgba(155, 48, 255, 0.3)" fill="none" strokeWidth="0.5" />
          <path d="M0,60 C30,40 70,80 100,60" stroke="rgba(0, 255, 255, 0.3)" fill="none" strokeWidth="0.5" />
          <path d="M0,40 C40,60 60,20 100,40" stroke="rgba(255, 58, 47, 0.3)" fill="none" strokeWidth="0.5" />
        </svg>
      </div>
      
      {/* Foreground layer - fastest */}
      <div 
        ref={el => { layersRef.current[2] = el; }} 
        className="absolute inset-0 opacity-15"
      >
        {/* Subtle dots pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}></div>
      </div>
    </div>
  );
};

export default ParallaxBackground;
