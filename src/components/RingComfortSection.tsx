import React from 'react';
import ringImage from '@/assets/ring-stylish-comfort.png';

const RingComfortSection: React.FC = () => {
  return (
    <section className="w-full py-16 md:py-20 overflow-hidden bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden group">
          <div className="relative h-[500px] md:h-[600px] lg:h-[700px] xl:h-[800px] overflow-hidden flex items-center justify-center">
            <img
              src={ringImage}
              alt="HUX AURA Smart Ring - Stylish Comfort Design"
              className="w-full h-full object-contain object-center transform group-hover:scale-105 transition-transform duration-1000 ease-out"
            />
            
            {/* Animated glow effect on hover */}
            <div className="absolute inset-0 bg-gradient-radial from-viveon-neon-blue/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RingComfortSection;
