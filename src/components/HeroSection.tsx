
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
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="block text-white">THE FUTURE IS</span>
            <span className="gradient-text">VIVEON</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Experience the next generation of wearable technology with our cutting-edge earbuds and smart rings. Designed for the future, built for today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-viveon-red hover:bg-viveon-red/80 text-white px-8 py-6 text-lg">
              EXPLORE EARBUDS
            </Button>
            <Button variant="outline" className="border-viveon-neon-blue text-viveon-neon-blue hover:bg-viveon-neon-blue/10 px-8 py-6 text-lg group">
              DISCOVER RINGS
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
        
        {/* Floating Products Preview */}
        <div className="mt-16 md:mt-24 flex justify-center">
          <div className="relative">
            {/* Earbuds */}
            <div className="absolute -left-16 md:-left-32 top-12 w-32 md:w-48 h-32 md:h-48 bg-black/40 backdrop-blur-md rounded-full p-4 border border-viveon-neon-blue/30 animate-float" style={{ animationDelay: '0.5s' }}>
              <div className="w-full h-full rounded-full bg-gradient-to-br from-black to-gray-900 flex items-center justify-center">
                <div className="text-center">
                  <span className="text-viveon-neon-blue text-xs md:text-sm">QUANTUM</span>
                  <p className="text-white font-bold text-sm md:text-base">EARBUDS</p>
                </div>
              </div>
            </div>
            
            {/* Main Product */}
            <div className="w-48 md:w-64 h-48 md:h-64 bg-black/50 backdrop-blur-lg rounded-full p-6 border border-viveon-red/50 animate-pulse">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-viveon-dark to-black flex items-center justify-center">
                <span className="text-viveon-red font-bold text-lg md:text-xl tracking-wider">VIVEON</span>
              </div>
            </div>
            
            {/* Smart Ring */}
            <div className="absolute -right-16 md:-right-32 top-12 w-32 md:w-48 h-32 md:h-48 bg-black/40 backdrop-blur-md rounded-full p-4 border border-viveon-neon-purple/30 animate-float" style={{ animationDelay: '1s' }}>
              <div className="w-full h-full rounded-full bg-gradient-to-br from-black to-gray-900 flex items-center justify-center">
                <div className="text-center">
                  <span className="text-viveon-neon-purple text-xs md:text-sm">NEXUS</span>
                  <p className="text-white font-bold text-sm md:text-base">SMART RING</p>
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
