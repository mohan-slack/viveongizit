
import React from 'react';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import FuturisticCityscape from './FuturisticCityscape';

const HeroSection: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      <FuturisticCityscape />
      
      <div className="container mx-auto px-4 py-20 z-10">
        <div className="max-w-4xl mx-auto text-center mt-16">
          <h1 className="mb-6">
            <span className="block text-white font-light tracking-wider letter-spacing-wide">THE FUTURE IS</span>
            <span className="gradient-text font-bold tracking-tighter text-7xl md:text-8xl">VIVEON</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto font-light tracking-wide">
            Experience the next generation of wearable technology with our cutting-edge earbuds and smart rings. Designed for the future, built for today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-viveon-red hover:bg-viveon-red/80 text-white px-8 py-6 text-lg font-medium tracking-wide">
              EXPLORE EARBUDS
            </Button>
            <Button variant="outline" className="border-viveon-neon-blue text-viveon-neon-blue hover:bg-viveon-neon-blue/10 px-8 py-6 text-lg font-medium tracking-wide group">
              DISCOVER RINGS
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
        
        {/* Floating Products Preview - Updated with more realistic product representations */}
        <div className="mt-16 md:mt-24 flex justify-center">
          <div className="relative">
            {/* Earbuds Left */}
            <div className="absolute -left-24 md:-left-40 top-8 w-40 md:w-56 h-40 md:h-56 bg-black/40 backdrop-blur-md rounded-2xl p-4 border border-viveon-neon-blue/30 animate-float" style={{ animationDelay: '0.5s' }}>
              <div className="w-full h-full rounded-xl bg-gradient-to-br from-black to-gray-900 flex items-center justify-center overflow-hidden">
                <div className="relative">
                  {/* Earbud Left */}
                  <div className="absolute -left-10 top-5 w-16 h-20 rounded-full bg-black border-2 border-viveon-neon-blue/70 transform rotate-45"></div>
                  {/* Earbud Right */}
                  <div className="absolute left-10 top-5 w-16 h-20 rounded-full bg-black border-2 border-viveon-neon-blue/70 transform -rotate-45"></div>
                  {/* Case Bottom */}
                  <div className="w-36 h-14 rounded-b-2xl bg-gradient-to-r from-gray-900 to-black border-t-0 border-2 border-viveon-neon-blue/50 mt-20 flex items-center justify-center">
                    <span className="text-viveon-neon-blue text-xs font-medium">QUANTUM EARBUDS</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Main VIVEON Logo */}
            <div className="w-48 md:w-64 h-48 md:h-64 bg-black/50 backdrop-blur-lg rounded-full p-6 border border-viveon-red/50 animate-pulse">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-viveon-dark to-black flex items-center justify-center">
                <span className="text-viveon-red font-bold text-lg md:text-xl tracking-wider">VIVEON</span>
              </div>
            </div>
            
            {/* Smart Ring */}
            <div className="absolute -right-24 md:-right-40 top-8 w-40 md:w-56 h-40 md:h-56 bg-black/40 backdrop-blur-md rounded-2xl p-4 border border-viveon-neon-purple/30 animate-float" style={{ animationDelay: '1s' }}>
              <div className="w-full h-full rounded-xl bg-gradient-to-br from-black to-gray-900 flex items-center justify-center">
                <div className="relative">
                  {/* Ring Outer */}
                  <div className="w-28 h-28 rounded-full border-4 border-viveon-neon-purple/70 flex items-center justify-center">
                    {/* Ring Inner */}
                    <div className="w-20 h-20 rounded-full border-2 border-viveon-neon-purple/50 flex items-center justify-center">
                      {/* Ring Center */}
                      <div className="w-12 h-12 rounded-full bg-black border border-viveon-neon-purple/30 flex items-center justify-center">
                        <div className="w-6 h-6 bg-viveon-neon-purple/30 rounded-full animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                  <div className="text-center mt-4">
                    <span className="text-viveon-neon-purple text-xs font-medium">NEXUS SMART RING</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-viveon-darker to-transparent"></div>
    </div>
  );
};

export default HeroSection;
