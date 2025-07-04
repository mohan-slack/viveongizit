
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
        parallaxRef.current.style.transform = `translateY(${scrollValue * 0.1}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-cream-50 to-cream-100">
      <HeroBackground />
      
      <div className="container relative z-10 mx-auto px-4 py-8 pt-20 md:py-16 md:pt-32">
        <HeroContent />
        
        <div ref={parallaxRef} className="relative mt-6 md:mt-10 pb-16">
          <HeroProductGrid className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default EnhancedHeroSection;
