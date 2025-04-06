
import React from 'react';
import { motion } from 'framer-motion';
import { pulseVariants } from './CardAnimations';

interface CardBackgroundProps {
  glowColor: string;
  selected: boolean;
}

const CardBackground: React.FC<CardBackgroundProps> = ({ glowColor, selected }) => {
  return (
    <>
      {/* Background glow effect */}
      <motion.div 
        className={`absolute -z-10 inset-0 opacity-20 ${glowColor} blur-xl rounded-full transform -translate-x-1/4 -translate-y-1/4 w-3/4 h-3/4`}
        variants={pulseVariants}
      />
      
      {/* Particle animation background */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-1 h-1 rounded-full ${glowColor}`}
            initial={{ 
              x: `${Math.random() * 100}%`, 
              y: `${Math.random() * 100}%`, 
              opacity: Math.random() * 0.5 + 0.2 
            }}
            animate={{ 
              x: `${Math.random() * 100}%`, 
              y: `${Math.random() * 100}%`,
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{ 
              duration: Math.random() * 10 + 10, 
              repeat: Infinity,
              ease: "linear" 
            }}
          />
        ))}
      </div>
    </>
  );
};

export default CardBackground;
