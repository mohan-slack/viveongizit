
import React from 'react';
import { motion } from 'framer-motion';
import { ZapIcon } from 'lucide-react';

interface EarbudDockProps {
  animationStage: number;
}

const EarbudDock: React.FC<EarbudDockProps> = ({ animationStage }) => {
  if (animationStage < 1) return null;

  return (
    <motion.div 
      className="absolute"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ 
        type: "spring", 
        stiffness: 260, 
        damping: 20,
        duration: 0.7
      }}
    >
      {/* Earbud Dock */}
      <div className="relative w-48 h-24 bg-gradient-to-r from-gray-900 to-black rounded-xl border border-viveon-neon-blue/30 flex justify-center items-center overflow-hidden">
        {/* Lightning Effects */}
        <motion.div
          className="absolute inset-0 bg-viveon-neon-blue/5"
          animate={{ 
            opacity: [0.1, 0.3, 0.1, 0.5, 0.1],
            scale: [1, 1.05, 1, 1.02, 1]
          }}
          transition={{ 
            duration: 1.5, 
            repeat: 1,
            repeatType: "reverse"
          }}
        />
        
        {/* Left Earbud */}
        <motion.div 
          className="absolute left-6 top-6 w-10 h-12 rounded-full bg-black border-2 border-viveon-neon-blue/60"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        />
        
        {/* Right Earbud - Transforms into U */}
        <motion.div 
          className="absolute right-6 top-6 w-10 h-12 rounded-full bg-black border-2 border-viveon-neon-blue/60"
          initial={{ opacity: 0, y: 10 }}
          animate={{ 
            opacity: animationStage >= 2 ? 0 : 1, 
            y: 0 
          }}
          transition={{ delay: 0.3, duration: 0.5 }}
        />
        
        {/* Lightning Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ 
            opacity: [0, 1, 0.5, 1, 0], 
            scale: [0.5, 1.2, 0.9, 1.1, 0.8] 
          }}
          transition={{ 
            duration: 1, 
            times: [0, 0.2, 0.4, 0.6, 1],
            delay: 0.5
          }}
        >
          <ZapIcon className="text-viveon-neon-blue w-8 h-8" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default EarbudDock;
