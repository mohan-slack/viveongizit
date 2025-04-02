
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ZapIcon } from 'lucide-react';

interface AnimatedLettersProps {
  animationStage: number;
}

const AnimatedLetters: React.FC<AnimatedLettersProps> = ({ animationStage }) => {
  if (animationStage < 2) return null;

  return (
    <>
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
    </>
  );
};

export default AnimatedLetters;
