import React from 'react';
import ringImage from '@/assets/ring-stylish-original.png';

const RingComfortSection: React.FC = () => {
  return (
    <section className="w-full py-0 overflow-hidden bg-viveon-darker">
      <div className="w-full">
        <div className="relative bg-viveon-darker overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-viveon-neon-blue/10 via-transparent to-viveon-red/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          
          {/* Background decorative elements */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-viveon-neon-blue/5 rounded-full filter blur-[120px] -z-10" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-viveon-red/5 rounded-full filter blur-[120px] -z-10" />
          
          <div className="relative h-[500px] md:h-[600px] lg:h-[700px] xl:h-[800px] overflow-hidden flex items-center justify-center">
            <img
              src={ringImage}
              alt="HUX AURA Smart Ring - Stylish Comfort Design"
              className="w-full h-full object-contain object-center transform group-hover:scale-105 transition-transform duration-1000 ease-out px-8 md:px-16 lg:px-24"
            />
            
            {/* Animated glow effect on hover */}
            <div className="absolute inset-0 bg-gradient-radial from-viveon-neon-blue/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RingComfortSection;
