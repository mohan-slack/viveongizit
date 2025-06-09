
import React from 'react';
import { motion } from 'framer-motion';

interface HeroProductGridProps {
  className?: string;
}

const HeroProductGrid: React.FC<HeroProductGridProps> = ({ className }) => {
  return (
    <div className={className}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8 max-w-5xl mx-auto">
        {/* First card - CE01 Smart Ring */}
        <motion.div className="relative group" initial={{
          opacity: 0,
          y: -20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.3
        }}>
          <div className="absolute -inset-0.5 bg-gradient-to-r from-viveon-red/70 to-viveon-neon-purple/70 rounded-xl blur opacity-40 group-hover:opacity-60 transition duration-300"></div>
          <div className="relative bg-black rounded-xl overflow-hidden">
            <div className="aspect-[4/3] flex items-center justify-center bg-gradient-to-b from-gray-900/50 to-black p-8">
              <img 
                src="/lovable-uploads/19008984-8282-451e-91c9-266c0d1c364b.png" 
                alt="HUX NEXUS PRO - Unique Artisanal Design Smart Ring" 
                className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105 filter brightness-110 contrast-110" 
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
              <h3 className="text-white text-xl font-bold">HUX NEXUS PRO</h3>
              <p className="text-viveon-neon-blue/80 mt-1">Unique Artisanal Design</p>
            </div>
          </div>
        </motion.div>
        
        {/* Second card - TM05 Smart Ring */}
        <motion.div className="relative group" initial={{
          opacity: 0,
          y: -20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.5
        }}>
          <div className="absolute -inset-0.5 bg-gradient-to-r from-viveon-neon-blue/70 to-viveon-neon-purple/70 rounded-xl blur opacity-40 group-hover:opacity-60 transition duration-300"></div>
          <div className="relative bg-black rounded-xl overflow-hidden">
            <div className="aspect-[4/3] flex items-center justify-center bg-gradient-to-b from-gray-900/50 to-black p-8">
              <img 
                src="/lovable-uploads/29776c52-7359-45a6-83ce-18a42ea0b8aa.png" 
                alt="HUX SONIC ELITE - Advanced High Accuracy Sensors" 
                className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105 filter brightness-110 contrast-110" 
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
              <h3 className="text-white text-xl font-bold">HUX SONIC ELITE</h3>
              <p className="text-viveon-neon-blue/80 mt-1">Advanced High Accuracy Sensors</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroProductGrid;
