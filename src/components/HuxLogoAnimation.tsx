import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ZapIcon } from 'lucide-react';

const HuxLogoAnimation: React.FC = () => {
  const [animationComplete, setAnimationComplete] = useState(false);
  const [textColor, setTextColor] = useState(0);
  const [textOpacity, setTextOpacity] = useState(1);

  useEffect(() => {
    if (animationComplete) {
      const colorInterval = setInterval(() => {
        setTextColor(prev => (prev + 0.01) % 3);
      }, 150);

      const opacityInterval = setInterval(() => {
        setTextOpacity(prev => {
          if (prev <= 0.7) return prev + 0.01;
          if (prev >= 1) return prev - 0.01;
          return prev - 0.01;
        });
      }, 100);

      return () => {
        clearInterval(colorInterval);
        clearInterval(opacityInterval);
      };
    }
  }, [animationComplete]);

  const getGradientStyle = () => {
    if (textColor < 1) {
      const ratio = textColor;
      return {
        from: `rgba(255, 58, 47, ${0.9 - 0.2 * ratio * textOpacity})`,
        via: `rgba(155, 48, 255, ${0.8 * textOpacity})`,
        to: `rgba(0, 255, 255, ${0.8 - 0.3 * (1-ratio) * textOpacity})`
      };
    } else if (textColor < 2) {
      const ratio = textColor - 1;
      return {
        from: `rgba(255, 58, 47, ${0.7 * textOpacity})`,
        via: `rgba(155, 48, 255, ${0.8 - 0.2 * ratio * textOpacity})`,
        to: `rgba(0, 255, 255, ${0.8 * textOpacity})`
      };
    } else {
      const ratio = textColor - 2;
      return {
        from: `rgba(255, 58, 47, ${0.7 + 0.2 * ratio * textOpacity})`,
        via: `rgba(155, 48, 255, ${0.6 * textOpacity})`,
        to: `rgba(0, 255, 255, ${0.8 - 0.3 * ratio * textOpacity})`
      };
    }
  };

  const gradientColors = getGradientStyle();
  
  if (animationComplete) {
    return (
      <motion.span 
        className="font-bold tracking-tighter text-7xl md:text-8xl drop-shadow-[0_3px_10px_rgba(255,58,47,0.3)]"
        style={{ 
          backgroundImage: `linear-gradient(to right, ${gradientColors.from}, ${gradientColors.via}, ${gradientColors.to})`,
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          color: 'transparent',
          transition: 'all 1.5s ease-in-out',
        }}
      >
        HUX<span className="text-white text-[0.25em] align-top leading-none">™</span>
      </motion.span>
    );
  }

  return (
    <div className="relative flex justify-center items-center h-28 md:h-32">
      <motion.div 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-10 bg-gradient-to-r from-viveon-dark to-black rounded-lg border border-viveon-neon-blue/30"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <motion.div 
          className="absolute inset-0 flex justify-center items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0.5, 1, 0] }}
          transition={{ duration: 1, delay: 0.5, times: [0, 0.2, 0.4, 0.6, 1] }}
        >
          <ZapIcon className="text-viveon-neon-blue w-8 h-8" />
        </motion.div>
        
        <motion.div 
          className="absolute top-1/2 left-1/4 transform -translate-y-1/2 w-6 h-6 bg-viveon-red rounded-full border border-viveon-neon-purple/50"
          initial={{ y: 0 }}
          animate={{ y: -15 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        />
        
        <motion.div 
          className="absolute top-1/2 right-1/4 transform -translate-y-1/2 w-6 h-6 bg-viveon-red rounded-full border border-viveon-neon-purple/50"
          initial={{ y: 0 }}
          animate={{ y: -15, opacity: 0 }}
          transition={{ duration: 0.3, delay: 1.2 }}
        />
      </motion.div>

      <motion.div 
        className="absolute text-6xl md:text-7xl font-bold text-viveon-red"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: -20, opacity: 1 }}
        transition={{ duration: 0.7, delay: 1.5, ease: "easeOut" }}
      >
        H
      </motion.div>
      
      <motion.div 
        className="absolute text-6xl md:text-7xl font-bold"
        initial={{ y: -15, scale: 0.1, opacity: 0, color: "#FF3A2F" }}
        animate={{ y: 0, scale: 1, opacity: 1, color: "#9B30FF" }}
        transition={{ duration: 0.8, delay: 1.8, ease: "easeOut" }}
      >
        U
      </motion.div>
      
      <motion.div 
        className="absolute text-6xl md:text-7xl font-bold text-viveon-neon-blue"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 20, opacity: 1 }}
        transition={{ duration: 0.7, delay: 2.1, ease: "easeOut" }}
      >
        X
      </motion.div>
      
      <motion.div 
        className="absolute inset-0 flex justify-center items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 0.5, delay: 2.5 }}
        onAnimationComplete={() => {
          setTimeout(() => setAnimationComplete(true), 300);
        }}
      >
        <div className="absolute inset-0 bg-viveon-neon-blue/10 rounded-lg blur-md"></div>
        <ZapIcon className="text-viveon-neon-blue w-12 h-12" />
      </motion.div>
    </div>
  );
};

export default HuxLogoAnimation;
