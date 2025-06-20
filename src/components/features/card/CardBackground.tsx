
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
      {/* Full Feature Image Display - Main Content */}
      {backgroundImage && (
        <div className="absolute inset-0 rounded-2xl overflow-hidden z-10">
          <img 
            src={backgroundImage}
            alt="Feature showcase"
            className="w-full h-full object-cover rounded-2xl"
            style={{
              filter: selected ? 'brightness(1.1) contrast(1.05)' : 'brightness(1.0) contrast(1.0)',
              objectPosition: 'center center',
              objectFit: 'cover'
            }}
          />
        </div>
      )}
      
      {/* Enhanced glow effect for selected state */}
      {selected && (
        <motion.div 
          className="absolute -inset-1 rounded-3xl opacity-20 blur-lg z-0"
          style={{
            background: `linear-gradient(45deg, ${glowColor.replace('bg-', '').replace('-500', '')}, transparent, ${glowColor.replace('bg-', '').replace('-500', '')})`
          }}
          animate={{
            opacity: [0.1, 0.25, 0.1],
            scale: [1, 1.02, 1],
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
