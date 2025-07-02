
import React, { useEffect, useRef } from 'react';
import HeroBackground from './HeroBackground';
import HeroContent from './HeroContent';
import SmartRingCarousel from './SmartRingCarousel';
import GlassmorphismFeatures from './GlassmorphismFeatures';

const FuturisticHeroSection: React.FC = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollValue = window.scrollY;
        // Subtle parallax effect for performance
        parallaxRef.current.style.transform = `translateY(${scrollValue * 0.05}px)`;
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-viveon-darker via-black to-viveon-dark">
      {/* Futuristic Background Effects */}
      <HeroBackground />
      
      {/* Main Content Container */}
      <div className="container relative z-10 mx-auto px-4 py-8 pt-20 md:py-16 md:pt-32">
        {/* Hero Content */}
        <HeroContent />
        
        {/* Smart Ring Carousel with Parallax */}
        <div ref={parallaxRef} className="relative mt-8 md:mt-16">
          <SmartRingCarousel />
        </div>
        
        {/* Glassmorphism Feature Cards */}
        <div className="mt-16 md:mt-24">
          <GlassmorphismFeatures />
        </div>
      </div>
      
      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-viveon-darker to-transparent z-20"></div>
    </div>
  );
};

export default FuturisticHeroSection;
