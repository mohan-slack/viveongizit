
import React from 'react';
import { motion } from 'framer-motion';

interface HeroProductGridProps {
  className?: string;
}

const HeroProductGrid: React.FC<HeroProductGridProps> = ({ className }) => {
  return (
    <div className={className}>
      <div className="grid grid-cols-1 gap-8 max-w-6xl mx-auto">
        {/* Improved spacing and layout for better mobile display */}
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
            <img src="/lovable-uploads/701c7baf-bad4-4ac1-a5c8-972935c2f4f7.png" alt="HUX Smart Ring Collection" className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-4">
              <h3 className="text-white text-xl font-bold">HUX NEXUS PRO</h3>
              <p className="text-viveon-neon-blue/80 mt-1">Next-gen wearable technology</p>
            </div>
          </div>
        </motion.div>
        
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
          <div className="absolute -inset-0.5 bg-gradient-to-r from-viveon-neon-purple/70 to-viveon-neon-blue/70 rounded-xl blur opacity-40 group-hover:opacity-60 transition duration-300"></div>
          <div className="relative bg-black rounded-xl overflow-hidden">
            <img src="/lovable-uploads/97d37c64-bc58-45fb-9fae-1199e9856c7e.png" alt="HUX Earbuds Premium Collection" className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-4">
              <h3 className="text-white text-xl font-bold">HUX SONIC ELITE</h3>
              <p className="text-viveon-neon-blue/80 mt-1">Crystal clear sound</p>
            </div>
          </div>
        </motion.div>
        
        <motion.div className="relative group" initial={{
          opacity: 0,
          y: -20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.7
        }}>
          <div className="absolute -inset-0.5 bg-gradient-to-r from-viveon-neon-blue/70 to-viveon-neon-purple/70 rounded-xl blur opacity-40 group-hover:opacity-60 transition duration-300"></div>
          <div className="relative bg-black rounded-xl overflow-hidden">
            <img src="/lovable-uploads/677085e7-aad4-423e-8673-b7c52b1080c3.png" alt="HUX QUANTUM PRO Earbuds" className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-4">
              <h3 className="text-white text-xl font-bold">HUX QUANTUM PRO</h3>
              <p className="text-viveon-neon-blue/80 mt-1">Wear the Future of Wellness</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroProductGrid;
