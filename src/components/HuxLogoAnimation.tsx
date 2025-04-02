
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

  // The animation sequence
  return (
    <div className="relative h-32 w-full flex justify-center items-center">
      {/* Fullscreen Audio Visualization - Left Side */}
      <AnimatePresence>
        {animationStage >= 2 && animationStage < 4 && (
          <motion.div
            className="absolute left-0 top-0 h-full w-1/2 flex items-center justify-end space-x-1 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-end h-full w-full justify-end space-x-1">
              {audioLevels.slice(0, 10).map((level, index) => (
                <motion.div
                  key={`left-${index}`}
                  className="w-2 md:w-2.5 rounded-t-md"
                  style={{
                    height: `${level * 100}%`,
                    backgroundColor: audioBarColors[index % audioBarColors.length],
                    boxShadow: `0 0 8px ${audioBarColors[index % audioBarColors.length]}`,
                  }}
                  animate={{ 
                    height: [`${level * 100}%`, `${(Math.random() * 0.8 + 0.2) * 100}%`],
                    opacity: [0.7, 1]
                  }}
                  transition={{ 
                    duration: 0.3 + (index * 0.03), 
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "mirror"
                  }}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Fullscreen Audio Visualization - Right Side */}
      <AnimatePresence>
        {animationStage >= 2 && animationStage < 4 && (
          <motion.div
            className="absolute right-0 top-0 h-full w-1/2 flex items-center justify-start space-x-1 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-end h-full w-full justify-start space-x-1">
              {audioLevels.slice(10, 20).map((level, index) => (
                <motion.div
                  key={`right-${index}`}
                  className="w-2 md:w-2.5 rounded-t-md"
                  style={{
                    height: `${level * 100}%`,
                    backgroundColor: audioBarColors[(audioBarColors.length - 1 - index) % audioBarColors.length],
                    boxShadow: `0 0 8px ${audioBarColors[(audioBarColors.length - 1 - index) % audioBarColors.length]}`,
                  }}
                  animate={{ 
                    height: [`${level * 100}%`, `${(Math.random() * 0.8 + 0.2) * 100}%`],
                    opacity: [0.7, 1]
                  }}
                  transition={{ 
                    duration: 0.3 + (index * 0.03), 
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "mirror",
                    delay: index * 0.02
                  }}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Earbud Dock with Lightning Effect */}
      <AnimatePresence>
        {animationStage >= 1 && (
          <motion.div 
            className="absolute"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              type: "spring", 
              stiffness: 260, 
              damping: 20,
              duration: 0.7
            }}
          >
            {/* Earbud Dock */}
            <div className="relative w-48 h-24 bg-gradient-to-r from-gray-900 to-black rounded-xl border border-viveon-neon-blue/30 flex justify-center items-center overflow-hidden">
              {/* Lightning Effects */}
              <motion.div
                className="absolute inset-0 bg-viveon-neon-blue/5"
                animate={{ 
                  opacity: [0.1, 0.3, 0.1, 0.5, 0.1],
                  scale: [1, 1.05, 1, 1.02, 1]
                }}
                transition={{ 
                  duration: 1.5, 
                  repeat: 1,
                  repeatType: "reverse"
                }}
              />
              
              {/* Left Earbud */}
              <motion.div 
                className="absolute left-6 top-6 w-10 h-12 rounded-full bg-black border-2 border-viveon-neon-blue/60"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              />
              
              {/* Right Earbud - Transforms into U */}
              <motion.div 
                className="absolute right-6 top-6 w-10 h-12 rounded-full bg-black border-2 border-viveon-neon-blue/60"
                initial={{ opacity: 0, y: 10 }}
                animate={{ 
                  opacity: animationStage >= 2 ? 0 : 1, 
                  y: 0 
                }}
                transition={{ delay: 0.3, duration: 0.5 }}
              />
              
              {/* Lightning Icon */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ 
                  opacity: [0, 1, 0.5, 1, 0], 
                  scale: [0.5, 1.2, 0.9, 1.1, 0.8] 
                }}
                transition={{ 
                  duration: 1, 
                  times: [0, 0.2, 0.4, 0.6, 1],
                  delay: 0.5
                }}
              >
                <ZapIcon className="text-viveon-neon-blue w-8 h-8" />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Letter H Animation - From Left */}
      <AnimatePresence>
        {animationStage >= 2 && (
          <motion.div
            className="absolute text-6xl md:text-7xl font-bold"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: animationStage >= 4 ? 0 : -20, opacity: 1 }}
            transition={{ 
              type: "spring", 
              stiffness: 100, 
              damping: 10,
              duration: 0.8
            }}
            style={{ 
              color: animationStage >= 4 ? "transparent" : "#FF3A2F",
              backgroundImage: animationStage >= 4 ? "linear-gradient(to right, rgba(255,58,47,0.9), rgba(155,48,255,0.8), rgba(0,255,255,0.8))" : "none",
              backgroundClip: animationStage >= 4 ? "text" : "border-box",
              WebkitBackgroundClip: animationStage >= 4 ? "text" : "border-box",
              zIndex: 10
            }}
          >
            H
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Letter U Animation - Transform from Earbud */}
      <AnimatePresence>
        {animationStage >= 2 && (
          <motion.div
            className="absolute text-6xl md:text-7xl font-bold"
            initial={{ 
              y: 10, 
              scale: 0.1, 
              opacity: 0,
              borderRadius: "50%",
              width: "10px",
              height: "12px",
            }}
            animate={{ 
              y: 0, 
              scale: 1, 
              opacity: 1,
              borderRadius: "0%",
              width: "auto",
              height: "auto"
            }}
            transition={{ 
              type: "spring", 
              stiffness: 120, 
              damping: 15,
              duration: 0.8
            }}
            style={{ 
              color: animationStage >= 4 ? "transparent" : "#9B30FF",
              backgroundImage: animationStage >= 4 ? "linear-gradient(to right, rgba(255,58,47,0.9), rgba(155,48,255,0.8), rgba(0,255,255,0.8))" : "none",
              backgroundClip: animationStage >= 4 ? "text" : "border-box",
              WebkitBackgroundClip: animationStage >= 4 ? "text" : "border-box",
              zIndex: 10
            }}
          >
            U
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Letter X Animation - From Right */}
      <AnimatePresence>
        {animationStage >= 2 && (
          <motion.div
            className="absolute text-6xl md:text-7xl font-bold"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: animationStage >= 4 ? 0 : 20, opacity: 1 }}
            transition={{ 
              type: "spring", 
              stiffness: 100, 
              damping: 10,
              duration: 0.8,
              delay: 0.1
            }}
            style={{ 
              color: animationStage >= 4 ? "transparent" : "#00FFFF",
              backgroundImage: animationStage >= 4 ? "linear-gradient(to right, rgba(255,58,47,0.9), rgba(155,48,255,0.8), rgba(0,255,255,0.8))" : "none",
              backgroundClip: animationStage >= 4 ? "text" : "border-box",
              WebkitBackgroundClip: animationStage >= 4 ? "text" : "border-box",
              zIndex: 10
            }}
          >
            X
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Final Flash Effect */}
      <AnimatePresence>
        {animationStage >= 3 && (
          <motion.div 
            className="absolute inset-0 flex justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.8, 0] }}
            transition={{ duration: 0.7 }}
          >
            <div className="absolute inset-0 bg-viveon-neon-blue/20 rounded-lg blur-xl"></div>
            <ZapIcon className="text-viveon-neon-blue w-12 h-12" />
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Combining into final HUX logo happens via the animationStage state */}
    </div>
  );
};

export default HuxLogoAnimation;
