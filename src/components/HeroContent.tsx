
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import HuxLogoAnimation from './HuxLogo';

const HeroContent: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto text-center mb-16">
      <motion.h1 
        className="mb-6" 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <span className="block text-white font-light tracking-wider letter-spacing-wide text-lg md:text-xl mb-1">
          INTRODUCING THE FUTURE OF TECH
        </span>
        
        <HuxLogoAnimation />
        
        <span className="block text-sm text-viveon-neon-blue/80 mt-2">by Viveon Gizit Pvt. Ltd.</span>
      </motion.h1>
      
      <motion.p 
        className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto font-light tracking-wide" 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        Reality redefined. HUX NEXUS rings don't just connect—they transform your lifestyle with cutting-edge wearable technology.
      </motion.p>
      
      <motion.div 
        className="flex flex-col sm:flex-row gap-4 justify-center" 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <Button className="bg-viveon-red/90 hover:bg-viveon-red/80 text-white px-8 py-6 text-lg font-medium tracking-wide border border-viveon-red/30 shadow-md rounded-full">
          HUX NEXUS RINGS
        </Button>
        <Button variant="outline" className="border-viveon-neon-blue/70 text-viveon-neon-blue/90 hover:bg-viveon-neon-blue/10 px-8 py-6 text-lg font-medium tracking-wide group shadow-md rounded-full">
          EXPLORE FEATURES
          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </motion.div>
    </div>
  );
};

export default HeroContent;
