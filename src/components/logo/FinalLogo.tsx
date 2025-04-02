
import React from 'react';
import { motion } from 'framer-motion';
import { useGradientEffect } from '../../hooks/useGradientEffect';

interface FinalLogoProps {
  isVisible: boolean;
  textColor: number;
  textOpacity: number;
}

const FinalLogo: React.FC<FinalLogoProps> = ({ isVisible, textColor, textOpacity }) => {
  if (!isVisible) return null;

  const { gradientStyle } = useGradientEffect({
    enabled: true,
    initialColorValue: textColor,
    initialOpacity: textOpacity
  });
  
  // Using a simple div instead of motion.div to avoid React internal error
  return (
    <div 
      className="font-bold tracking-tighter text-7xl md:text-8xl drop-shadow-[0_3px_10px_rgba(255,58,47,0.3)]"
      style={{ 
        backgroundImage: `linear-gradient(to right, ${gradientStyle.from}, ${gradientStyle.via}, ${gradientStyle.to})`,
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        color: 'transparent',
        transition: 'all 1.5s ease-in-out',
      }}
    >
      HUX<span className="text-white text-[0.25em] align-top leading-none">™</span>
    </div>
  );
};

export default FinalLogo;
