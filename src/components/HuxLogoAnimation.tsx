
import React, { useEffect, useState } from 'react';
import AudioVisualizer from './logo/AudioVisualizer';
import EarbudDock from './logo/EarbudDock';
import AnimatedLetters from './logo/AnimatedLetters';
import FinalLogo from './logo/FinalLogo';

const HuxLogoAnimation: React.FC = () => {
  const [animationStage, setAnimationStage] = useState(0);
  const [animationComplete, setAnimationComplete] = useState(false);
  const [textColor, setTextColor] = useState(0);
  const [textOpacity, setTextOpacity] = useState(1);

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

  // Color cycling effect for the final logo
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
        textColor={textColor} 
        textOpacity={textOpacity} 
      />
    </div>
  );
};

export default HuxLogoAnimation;
