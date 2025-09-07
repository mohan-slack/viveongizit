
import React from 'react';
import { TextPressure } from '../ui/text-pressure';

const InitialLogo: React.FC = () => {
  return (
    <div className="w-full h-24 md:h-32 relative">
      <TextPressure 
        text="HUX"
        textColor="#ea384c"
        strokeColor="#FFFFFF"
        stroke={true}
        strokeWidth={2}
        width={true}
        weight={true}
        italic={false}
        alpha={false}
        flex={true}
        scale={false}
        minFontSize={60}
        className="relative z-10"
      />
      <span className="absolute top-2 right-6 text-white text-xs font-light tracking-wider">™</span>
    </div>
  );
};

export default InitialLogo;
