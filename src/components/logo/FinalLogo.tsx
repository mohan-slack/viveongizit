
import React from 'react';
import { motion } from 'framer-motion';

interface FinalLogoProps {
  isVisible: boolean;
  textColor: number;
  textOpacity: number;
}

const FinalLogo: React.FC<FinalLogoProps> = ({ isVisible, textColor, textOpacity }) => {
  if (!isVisible) return null;

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
};

export default FinalLogo;
