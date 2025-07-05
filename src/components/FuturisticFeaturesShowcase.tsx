
import React from 'react';
import FeatureCardsGrid from './FeatureCardsGrid';

const FuturisticFeaturesShowcase: React.FC = () => {
  return (
    <section id="features" className="relative py-20 lg:py-28 overflow-hidden">
      {/* Enhanced dark tech-style background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-grid-lines opacity-8" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/60" />
        {/* Subtle animated glow effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-viveon-red/3 rounded-full filter blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-viveon-neon-blue/3 rounded-full filter blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <FeatureCardsGrid />
      </div>
    </section>
  );
};

export default FuturisticFeaturesShowcase;
