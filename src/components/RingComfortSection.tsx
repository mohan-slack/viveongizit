import React from 'react';
import ringImage from '@/assets/ring-stylish-original.png';

const RingComfortSection: React.FC = () => {
  return (
    <section className="w-full py-0 overflow-hidden bg-background">
      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          {/* Left: Image Section */}
          <div className="relative bg-black overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-viveon-neon-blue/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="relative h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] overflow-hidden flex items-center justify-center">
              <img
                src={ringImage}
                alt="HUX AURA Smart Ring - Stylish Comfort Design"
                className="w-full h-full object-contain object-center transform group-hover:scale-105 transition-transform duration-1000 ease-out p-8 md:p-12"
              />
              
              {/* Animated glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-radial from-viveon-neon-blue/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>
          </div>

          {/* Right: Content Section */}
          <div className="relative bg-viveon-darker overflow-hidden group border-l border-white/5">
            <div className="absolute inset-0 bg-gradient-to-bl from-viveon-red/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            {/* Background decorative elements */}
            <div className="absolute top-1/4 right-0 w-64 h-64 bg-viveon-neon-blue/5 rounded-full filter blur-[100px] -z-10" />
            <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-viveon-red/5 rounded-full filter blur-[100px] -z-10" />
            
            <div className="relative h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] flex items-center justify-center p-8 md:p-12 lg:p-16">
              <div className="max-w-xl space-y-6 transform group-hover:translate-x-2 transition-transform duration-500">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                  Stylish Comfort Meets High-Tech Design
                </h2>
                
                <p className="text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed">
                  Our ring's curved concave design combines comfort and elegance in a compact form. Made with durable stainless steel, it stays bright and stylish, wear after wear.
                </p>

                {/* Decorative accent line */}
                <div className="w-20 h-1 bg-gradient-to-r from-viveon-red to-viveon-neon-blue transform group-hover:w-32 transition-all duration-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RingComfortSection;
