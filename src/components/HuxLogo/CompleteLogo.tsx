
import React from 'react';
import { getGradientStyle } from './colorUtils';

interface CompleteLogoProps {
  textColor: number;
  textOpacity: number;
}

const CompleteLogo: React.FC<CompleteLogoProps> = ({ textColor, textOpacity }) => {
  const gradientColors = getGradientStyle(textColor, textOpacity);
  
  return (
    <div 
      className="font-bold tracking-tighter text-7xl md:text-8xl drop-shadow-[0_3px_10px_rgba(255,58,47,0.3)] transition-all duration-300 hover:drop-shadow-[0_3px_15px_rgba(255,58,47,0.6)] hover:animate-[pulse_1.5s_ease-in-out_infinite]"
      style={{ 
        backgroundImage: `linear-gradient(to right, ${gradientColors.from}, ${gradientColors.via}, ${gradientColors.to})`,
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

export default CompleteLogo;
