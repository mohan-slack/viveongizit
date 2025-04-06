
import { useState, useRef, useEffect } from 'react';

export const useAudioAnimation = (animationStage: number) => {
  const [audioLevels, setAudioLevels] = useState<number[]>([]);
  const audioAnimationRef = useRef<number | null>(null);

  // Generate random audio levels for visualization
  const generateAudioLevels = () => {
    const levels = Array.from({ length: 20 }, () => Math.random() * 0.7 + 0.3);
    setAudioLevels(levels);
    
    if (animationStage >= 2 && animationStage < 4) {
      audioAnimationRef.current = requestAnimationFrame(generateAudioLevels);
    } else if (audioAnimationRef.current) {
      cancelAnimationFrame(audioAnimationRef.current);
    }
  };

  // Start and stop audio animation
  useEffect(() => {
    if (animationStage >= 2 && animationStage < 4) {
      generateAudioLevels();
    }
    
    return () => {
      if (audioAnimationRef.current) {
        cancelAnimationFrame(audioAnimationRef.current);
      }
    };
  }, [animationStage]);

  return { audioLevels };
};
