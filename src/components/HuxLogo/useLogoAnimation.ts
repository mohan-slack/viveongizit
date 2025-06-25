
import { useState, useEffect } from 'react';

export const useLogoAnimation = () => {
  // Start at stage 1 instead of 0 to skip the initial red HUX
  const [animationStage, setAnimationStage] = useState(1);
  const [animationComplete, setAnimationComplete] = useState(false);
  const [textColor, setTextColor] = useState(0);
  const [textOpacity, setTextOpacity] = useState(1);

  // Start the animation sequence
  useEffect(() => {
    if (animationStage === 1) {
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

  return {
    animationStage, 
    animationComplete, 
    textColor, 
    textOpacity
  };
};
