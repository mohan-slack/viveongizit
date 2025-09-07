
import React from 'react';
import { getGradientStyle } from './colorUtils';
import { TextPressure } from '../ui/text-pressure';

interface CompleteLogoProps {
  textColor: number;
  textOpacity: number;
}

const CompleteLogo: React.FC<CompleteLogoProps> = ({ textColor, textOpacity }) => {
  const gradientColors = getGradientStyle(textColor, textOpacity);
  
  return (
    <div className="w-full h-24 md:h-32 relative">
      <TextPressure 
        text="HUX"
        textColor="#ea384c"
        strokeColor="#FFFFFF"
        stroke={true}
        strokeWidth={1}
        width={true}
        weight={true}
        italic={false}
        alpha={true}
        flex={true}
        scale={false}
        minFontSize={60}
        className="relative z-10 drop-shadow-[0_3px_10px_rgba(255,58,47,0.3)]"
      />
      <span className="absolute top-2 right-6 text-white text-xs font-light tracking-wider">™</span>
    </div>
  );
};

export default CompleteLogo;
