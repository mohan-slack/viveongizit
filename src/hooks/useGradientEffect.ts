
import { useState, useEffect } from 'react';

interface GradientStyle {
  from: string;
  via: string;
  to: string;
}

interface UseGradientEffectProps {
  enabled: boolean;
  initialColorValue?: number;
  initialOpacity?: number;
}

/**
 * Custom hook to manage gradient color cycling effect with opacity variations
 * for animated components.
 */
export const useGradientEffect = ({ 
  enabled, 
  initialColorValue = 0, 
  initialOpacity = 1 
}: UseGradientEffectProps) => {
  const [colorValue, setColorValue] = useState(initialColorValue);
  const [opacity, setOpacity] = useState(initialOpacity);

  // Effect for color cycling
  useEffect(() => {
    if (!enabled) return;
    
    const colorInterval = setInterval(() => {
      setColorValue(prev => (prev + 0.01) % 3);
    }, 150);

    return () => clearInterval(colorInterval);
  }, [enabled]);

  // Effect for opacity pulsing
  useEffect(() => {
    if (!enabled) return;
    
    const opacityInterval = setInterval(() => {
      setOpacity(prev => {
        if (prev <= 0.7) return prev + 0.01;
        if (prev >= 1) return prev - 0.01;
        return prev - 0.01;
      });
    }, 100);

    return () => clearInterval(opacityInterval);
  }, [enabled]);

  const getGradientStyle = (): GradientStyle => {
    if (colorValue < 1) {
      const ratio = colorValue;
      return {
        from: `rgba(255, 58, 47, ${0.9 - 0.2 * ratio * opacity})`,
        via: `rgba(155, 48, 255, ${0.8 * opacity})`,
        to: `rgba(0, 255, 255, ${0.8 - 0.3 * (1-ratio) * opacity})`
      };
    } else if (colorValue < 2) {
      const ratio = colorValue - 1;
      return {
        from: `rgba(255, 58, 47, ${0.7 * opacity})`,
        via: `rgba(155, 48, 255, ${0.8 - 0.2 * ratio * opacity})`,
        to: `rgba(0, 255, 255, ${0.8 * opacity})`
      };
    } else {
      const ratio = colorValue - 2;
      return {
        from: `rgba(255, 58, 47, ${0.7 + 0.2 * ratio * opacity})`,
        via: `rgba(155, 48, 255, ${0.6 * opacity})`,
        to: `rgba(0, 255, 255, ${0.8 - 0.3 * ratio * opacity})`
      };
    }
  };

  return {
    colorValue,
    opacity,
    gradientStyle: getGradientStyle()
  };
};
