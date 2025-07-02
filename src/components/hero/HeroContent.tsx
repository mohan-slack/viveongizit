
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { ArrowRight, Zap } from 'lucide-react';
import HuxLogoAnimation from '../HuxLogo';

const HeroContent: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto text-center mb-12">
      {/* Logo with Enhanced Glow Effect */}
      <motion.div 
        className="mb-8 relative"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        whileHover={{ 
          filter: "drop-shadow(0 0 20px rgba(255, 58, 47, 0.8))",
          transition: { duration: 0.3 }
        }}
      >
        <span className="block text-white/80 font-light tracking-[0.2em] text-sm md:text-base mb-2 uppercase">
          Experience The Future
        </span>
        
        <HuxLogoAnimation />
        
        <span className="block text-viveon-neon-blue/70 text-xs md:text-sm mt-3 font-light tracking-wide">
          by Viveon Gizit Pvt. Ltd.
        </span>
      </motion.div>
      
      {/* Enhanced Description */}
      <motion.p 
        className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto font-light leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        Revolutionary wearable technology that transforms your lifestyle. 
        <span className="text-viveon-neon-blue/90 font-medium"> Smart rings </span>
        designed for the future, engineered for today.
      </motion.p>
      
      {/* Enhanced Action Buttons */}
      <motion.div 
        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <Button 
          className="group relative bg-gradient-to-r from-viveon-red/90 to-viveon-red/70 hover:from-viveon-red hover:to-viveon-red/80 text-white px-8 py-6 text-lg font-medium tracking-wide border border-viveon-red/30 shadow-lg shadow-viveon-red/25 rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-viveon-red/40 hover:scale-105"
        >
          <Zap className="mr-2 w-5 h-5 group-hover:animate-pulse" />
          Explore HUX Rings
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-viveon-red/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </Button>
        
        <Button 
          variant="outline" 
          className="group relative border-2 border-viveon-neon-blue/50 px-8 py-6 text-lg font-medium tracking-wide shadow-lg rounded-full bg-black/20 backdrop-blur-sm hover:bg-viveon-neon-blue/10 text-viveon-neon-blue/90 hover:text-viveon-neon-blue transition-all duration-300 hover:border-viveon-neon-blue hover:shadow-xl hover:shadow-viveon-neon-blue/20 hover:scale-105"
        >
          Discover Features
          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
        </Button>
      </motion.div>
    </div>
  );
};

export default HeroContent;
