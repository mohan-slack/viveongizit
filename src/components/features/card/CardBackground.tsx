
import React from 'react';
import { motion } from 'framer-motion';

interface CardBackgroundProps {
  glowColor: string;
  selected: boolean;
  backgroundImage?: string;
}

const CardBackground: React.FC<CardBackgroundProps> = ({ glowColor, selected, backgroundImage }) => {
  return (
    <>
      {/* Feature Image Display - Main Content */}
      {backgroundImage && (
        <div className="absolute inset-4 rounded-xl overflow-hidden z-10">
          <img 
            src={backgroundImage}
            alt="Feature showcase"
            className="w-full h-full object-cover rounded-xl"
            style={{
              filter: selected ? 'brightness(1.1) contrast(1.1)' : 'brightness(0.9) contrast(1.0)'
            }}
          />
          {/* Overlay for better text readability if needed */}
          <div className="absolute inset-0 bg-black/20 rounded-xl" />
        </div>
      )}
      
      {/* Subtle gradient overlay for depth */}
      <motion.div 
        className="absolute inset-0 rounded-2xl opacity-10"
        style={{
          background: `linear-gradient(135deg, ${glowColor.replace('bg-', '').replace('-500', '')} 10%, transparent 50%)`
        }}
        animate={{
          opacity: selected ? 0.2 : 0.1,
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      {/* Enhanced glow effect for selected state */}
      {selected && (
        <motion.div 
          className="absolute -inset-2 rounded-3xl opacity-20 blur-xl z-0"
          style={{
            background: `linear-gradient(45deg, ${glowColor.replace('bg-', '').replace('-500', '')}, transparent, ${glowColor.replace('bg-', '').replace('-500', '')})`
          }}
          animate={{
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity
          }}
        />
      )}
    </>
  );
};

export default CardBackground;
