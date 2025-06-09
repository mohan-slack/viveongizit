
import React from 'react';
import { motion } from 'framer-motion';

interface HeroProductGridProps {
  className?: string;
}

const HeroProductGrid: React.FC<HeroProductGridProps> = ({ className }) => {
  return (
    <div className={className}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
        {/* First card - HUX NEXUS PRO */}
        <motion.div 
          className="relative group" 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="relative">
            <img 
              src="/lovable-uploads/19008984-8282-451e-91c9-266c0d1c364b.png" 
              alt="HUX NEXUS PRO - Unique Artisanal Design Smart Ring" 
              className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105 filter brightness-110 contrast-110" 
            />
            <div className="absolute bottom-4 left-4 right-4">
              <h3 className="text-white text-xl font-bold drop-shadow-lg">HUX NEXUS PRO</h3>
              <p className="text-viveon-neon-blue/90 mt-1 drop-shadow-lg">Unique Artisanal Design</p>
            </div>
          </div>
        </motion.div>
        
        {/* Second card - HUX SONIC ELITE */}
        <motion.div 
          className="relative group" 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="relative">
            <img 
              src="/lovable-uploads/29776c52-7359-45a6-83ce-18a42ea0b8aa.png" 
              alt="HUX SONIC ELITE - Advanced High Accuracy Sensors" 
              className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105 filter brightness-110 contrast-110" 
            />
            <div className="absolute bottom-4 left-4 right-4">
              <h3 className="text-white text-xl font-bold drop-shadow-lg">HUX SONIC ELITE</h3>
              <p className="text-viveon-neon-blue/90 mt-1 drop-shadow-lg">Advanced High Accuracy Sensors</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroProductGrid;
