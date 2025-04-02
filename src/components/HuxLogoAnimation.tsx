
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ZapIcon } from 'lucide-react';

const HuxLogoAnimation: React.FC = () => {
  const [animationStage, setAnimationStage] = useState(0);
  const [animationComplete, setAnimationComplete] = useState(false);
  const [colorWavePosition, setColorWavePosition] = useState(0);
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

  // Color cycling wave effect for the final logo
  useEffect(() => {
    if (animationComplete) {
      const colorInterval = setInterval(() => {
        setColorWavePosition(prev => (prev + 0.03) % 3);
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

  // Calculate colors for each letter based on the wave position
  const getLetterColors = () => {
    // Vibrant colors (original colors)
    const redColor = "rgba(255, 58, 47, 0.9)";  // Bright red
    const purpleColor = "rgba(155, 48, 255, 0.8)";  // Vibrant purple
    const blueColor = "rgba(0, 255, 255, 0.8)";  // Cyan/teal
    
    // Calculate position for each letter (0-3 range)
    const hPosition = (colorWavePosition) % 3;
    const uPosition = (colorWavePosition + 1) % 3;
    const xPosition = (colorWavePosition + 2) % 3;
    
    // Map position to color - creating a wave effect where colors shift positions
    const getColorForPosition = (pos: number) => {
      if (pos < 1) return redColor;
      if (pos < 2) return purpleColor;
      return blueColor;
    };
    
    return {
      hColor: getColorForPosition(hPosition),
      uColor: getColorForPosition(uPosition),
      xColor: getColorForPosition(xPosition)
    };
  };

  if (animationComplete) {
    const letterColors = getLetterColors();
    return (
      <div className="font-bold tracking-tighter text-7xl md:text-8xl drop-shadow-[0_3px_10px_rgba(255,58,47,0.3)] flex">
        <motion.span
          style={{ 
            color: letterColors.hColor,
            textShadow: '0 0 15px rgba(255, 58, 47, 0.5)',
            transition: 'color 0.5s ease-in-out',
          }}
        >
          H
        </motion.span>
        <motion.span
          style={{ 
            color: letterColors.uColor,
            textShadow: '0 0 15px rgba(155, 48, 255, 0.5)',
            transition: 'color 0.5s ease-in-out',
          }}
        >
          U
        </motion.span>
        <motion.span
          style={{ 
            color: letterColors.xColor,
            textShadow: '0 0 15px rgba(0, 255, 255, 0.5)',
            transition: 'color 0.5s ease-in-out',
          }}
        >
          X
        </motion.span>
        <span className="text-white text-[0.25em] align-top leading-none">™</span>
      </div>
    );
  }

  // The animation sequence
  return (
    <div className="relative h-32 w-full flex justify-center items-center">
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
              color: "#FF3A2F",
              textShadow: '0 0 15px rgba(255, 58, 47, 0.5)',
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
              color: "#9B30FF",
              textShadow: '0 0 15px rgba(155, 48, 255, 0.5)',
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
              color: "#00FFFF",
              textShadow: '0 0 15px rgba(0, 255, 255, 0.5)',
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
    </div>
  );
};

export default HuxLogoAnimation;
