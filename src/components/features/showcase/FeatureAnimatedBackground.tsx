
import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface FeatureAnimatedBackgroundProps {
  mousePosition?: { x: number, y: number };
}

const FeatureAnimatedBackground: React.FC<FeatureAnimatedBackgroundProps> = ({ mousePosition = { x: 0, y: 0 } }) => {
  return (
    <div className="absolute inset-0 z-0">
      {/* Grid lines */}
      <div className="absolute inset-0 bg-grid-lines opacity-5" />
      
      {/* Radial gradient following mouse */}
      <motion.div 
        className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-r from-viveon-red/10 via-viveon-neon-purple/10 to-viveon-neon-blue/10 blur-3xl"
        animate={{
          x: mousePosition.x - 250,
          y: mousePosition.y - 250,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 200,
          mass: 0.5
        }}
      />
      
      {/* Floating particles */}
      {Array.from({ length: 30 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-white/30"
          initial={{ 
            x: `${Math.random() * 100}%`, 
            y: `${Math.random() * 100}%`, 
            opacity: Math.random() * 0.5 
          }}
          animate={{ 
            y: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ 
            duration: Math.random() * 20 + 10, 
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      ))}
    </div>
  );
};

export default FeatureAnimatedBackground;
