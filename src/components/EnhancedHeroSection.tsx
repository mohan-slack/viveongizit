
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
        parallaxRef.current.style.transform = `translateY(${scrollValue * 0.3}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-viveon-darker">
      <HeroBackground />
      
      <div className="container relative z-10 mx-auto px-4 py-20 pt-40">
        <HeroContent />
        
        <div ref={parallaxRef} className="relative mt-12 flex justify-center items-center">
          <HeroProductGrid />
        </div>
      </div>
    </div>
  );
};

export default EnhancedHeroSection;
