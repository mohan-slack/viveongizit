
import React, { useEffect, useRef } from 'react';
import HeroBackground from './HeroBackground';
import HeroContent from './HeroContent';
import HeroProductGrid from './HeroProductGrid';

const EnhancedHeroSection: React.FC = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollValue = window.scrollY;
        // Reduced parallax effect for better mobile experience
        parallaxRef.current.style.transform = `translateY(${scrollValue * 0.2}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-viveon-darker">
      <HeroBackground />
      
      <div className="container relative z-10 mx-auto px-4 py-12 pt-32 md:py-20 md:pt-40">
        <HeroContent />
        
        <div ref={parallaxRef} className="relative mt-8 md:mt-12">
          <HeroProductGrid className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default EnhancedHeroSection;
