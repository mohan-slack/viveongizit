
import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ZapIcon } from 'lucide-react';

const HuxLogoAnimation: React.FC = () => {
  const [animationStage, setAnimationStage] = useState(0);
  const [animationComplete, setAnimationComplete] = useState(false);
  const [textColor, setTextColor] = useState(0);
  const [textOpacity, setTextOpacity] = useState(1);
  
  // Audio bar animation
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

  if (animationComplete) {
    const gradientColors = getGradientStyle();
    // Simplified rendering to avoid measurement issues
    return (
      <div className="font-bold tracking-tighter text-7xl md:text-8xl drop-shadow-[0_3px_10px_rgba(255,58,47,0.3)]"
        style={{ 
          backgroundImage: `linear-gradient(to right, ${gradientColors.from}, ${gradientColors.via}, ${gradientColors.to})`,
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          color: 'transparent',
          transition: 'all 1.5s ease-in-out',
        }}>
        HUX<span className="text-white text-[0.25em] align-top leading-none">™</span>
      </div>
    );
  }

  // Define audio bar colors to match the reference image
  const audioBarColors = [
    "#9C56DB", // Purple
    "#854ED6", // Purple
    "#6F45D1", // Purple
    "#5F3EB0", // Purple
    "#4768D9", // Blue
    "#3E7BE0", // Blue
    "#3493E5", // Light Blue
    "#2BA9EA", // Light Blue
    "#22BFEF", // Cyan
    "#B33A8B", // Pink
  ];

  // The animation sequence - simplified to avoid complex measurements
  return (
    <div className="relative h-32 w-full flex justify-center items-center">
      {/* Fullscreen Audio Visualization - Left Side */}
      {animationStage >= 2 && animationStage < 4 && (
        <div
          className="absolute left-0 top-0 h-full w-1/2 flex items-center justify-end space-x-1 px-4"
          style={{ opacity: 1 }}
        >
          <div className="flex items-end h-full w-full justify-end space-x-1">
            {audioLevels.slice(0, 10).map((level, index) => (
              <div
                key={`left-${index}`}
                className="w-2 md:w-2.5 rounded-t-md"
                style={{
                  height: `${level * 100}%`,
                  backgroundColor: audioBarColors[index % audioBarColors.length],
                  boxShadow: `0 0 8px ${audioBarColors[index % audioBarColors.length]}`,
                }}
              />
            ))}
          </div>
        </div>
      )}
      
      {/* Fullscreen Audio Visualization - Right Side */}
      {animationStage >= 2 && animationStage < 4 && (
        <div
          className="absolute right-0 top-0 h-full w-1/2 flex items-center justify-start space-x-1 px-4"
          style={{ opacity: 1 }}
        >
          <div className="flex items-end h-full w-full justify-start space-x-1">
            {audioLevels.slice(10, 20).map((level, index) => (
              <div
                key={`right-${index}`}
                className="w-2 md:w-2.5 rounded-t-md"
                style={{
                  height: `${level * 100}%`,
                  backgroundColor: audioBarColors[(audioBarColors.length - 1 - index) % audioBarColors.length],
                  boxShadow: `0 0 8px ${audioBarColors[(audioBarColors.length - 1 - index) % audioBarColors.length]}`,
                }}
              />
            ))}
          </div>
        </div>
      )}
      
      {/* Center content */}
      <div className="relative z-10">
        {/* Simplified animation stages */}
        {animationStage <= 1 && (
          <div className="text-6xl md:text-7xl font-bold text-viveon-red">HUX™</div>
        )}
        
        {animationStage >= 2 && animationStage < 4 && (
          <div className="text-6xl md:text-7xl font-bold flex">
            <span className="text-viveon-red">H</span>
            <span className="text-viveon-neon-blue">U</span>
            <span className="text-viveon-neon-purple">X</span>
            <span className="text-white text-[0.25em] align-top leading-none">™</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default HuxLogoAnimation;
