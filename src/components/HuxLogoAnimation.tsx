
import React, { useEffect, useState } from 'react';
import AudioVisualizer from './logo/AudioVisualizer';
import EarbudDock from './logo/EarbudDock';
import AnimatedLetters from './logo/AnimatedLetters';
import FinalLogo from './logo/FinalLogo';
import { useGradientEffect } from '../hooks/useGradientEffect';

const HuxLogoAnimation: React.FC = () => {
  const [animationStage, setAnimationStage] = useState(0);
  const [animationComplete, setAnimationComplete] = useState(false);
  
  const { colorValue, opacity } = useGradientEffect({
    enabled: animationComplete
  });

  // Start the animation sequence
  useEffect(() => {
    if (animationStage === 0) {
      const timer = setTimeout(() => setAnimationStage(1), 500);
      return () => clearTimeout(timer);
    } else if (animationStage === 1) {
      const timer = setTimeout(() => setAnimationStage(2), 1200);
      return () => clearTimeout(timer);
    } else if (animationStage === 2) {
      const timer = setTimeout(() => setAnimationStage(3), 1500);
      return () => clearTimeout(timer);
    } else if (animationStage === 3) {
      const timer = setTimeout(() => {
        setAnimationStage(4);
        setAnimationComplete(true);
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, [animationStage]);

  return (
    <div className="relative h-32 w-full flex justify-center items-center">
      {/* Audio visualization only active during stages 2 and 3 */}
      <AudioVisualizer isActive={animationStage >= 2 && animationStage < 4} />
      
      {/* Earbud dock component */}
      <EarbudDock animationStage={animationStage} />
      
      {/* Animated HUX letters */}
      <AnimatedLetters animationStage={animationStage} />
      
      {/* Final logo with gradient effects */}
      <FinalLogo 
        isVisible={animationComplete} 
        textColor={colorValue} 
        textOpacity={opacity} 
      />
    </div>
  );
};

export default HuxLogoAnimation;
