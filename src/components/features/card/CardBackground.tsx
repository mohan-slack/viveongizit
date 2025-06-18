
import React from 'react';
import { motion } from 'framer-motion';

interface CardBackgroundProps {
  glowColor: string;
  selected: boolean;
}

const CardBackground: React.FC<CardBackgroundProps> = ({ glowColor, selected }) => {
  return (
    <>
      {/* Animated gradient background */}
      <motion.div 
        className="absolute inset-0 rounded-2xl opacity-20"
        style={{
          background: `linear-gradient(135deg, ${glowColor.replace('bg-', '').replace('-500', '')} 10%, transparent 50%, ${glowColor.replace('bg-', '').replace('-500', '')} 5%)`
        }}
        animate={{
          opacity: selected ? 0.3 : 0.15,
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      {/* Subtle moving particles effect */}
      <div className="absolute inset-0 overflow-hidden rounded-2xl">
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className={`absolute w-1 h-1 ${glowColor} rounded-full opacity-30`}
            style={{
              left: `${20 + i * 30}%`,
              top: `${10 + i * 20}%`,
            }}
            animate={{
              y: [-10, 10, -10],
              x: [-5, 5, -5],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4 + i,
              ease: "easeInOut",
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>
      
      {/* Enhanced glow effect for selected state */}
      {selected && (
        <motion.div 
          className="absolute -inset-2 rounded-3xl opacity-30 blur-xl"
          style={{
            background: `linear-gradient(45deg, ${glowColor.replace('bg-', '').replace('-500', '')}, transparent, ${glowColor.replace('bg-', '').replace('-500', '')})`
          }}
          animate={{
            opacity: [0.2, 0.4, 0.2],
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
