
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

interface AIAssistantDockProps {
  isAnimating: boolean;
  setIsAnimating: (value: boolean) => void;
}

const AIAssistantDock: React.FC<AIAssistantDockProps> = ({ isAnimating, setIsAnimating }) => {
  // Reset animation state after 2.5 seconds
  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, 2500);
      
      return () => clearTimeout(timer);
    }
  }, [isAnimating, setIsAnimating]);

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 20, opacity: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="relative w-64 h-40 bg-gradient-to-b from-gray-200 to-gray-300 rounded-xl overflow-hidden shadow-xl"
    >
      {/* Metallic texture */}
      <div className="absolute inset-0 opacity-20 bg-noise"></div>
      
      {/* Highlight reflections */}
      <div className="absolute top-0 left-0 w-full h-1/3 bg-white/20 rounded-b-[50%]"></div>
      <div className="absolute bottom-0 right-0 w-full h-1/4 bg-black/10 rounded-t-[50%]"></div>
      
      {/* Base dock */}
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-b from-gray-300 to-gray-400 rounded-b-xl">
        {/* Inner shadow */}
        <div className="absolute inset-0 bg-black/5 rounded-b-xl"></div>
      </div>
      
      {/* Charging contacts */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-10">
        <div className="w-3 h-1 bg-gray-600 rounded-full"></div>
        <div className="w-3 h-1 bg-gray-600 rounded-full"></div>
      </div>
      
      {/* HUX logo */}
      <div className="absolute bottom-2 left-0 right-0 text-center">
        <span className="text-xs font-bold bg-gradient-to-r from-viveon-red to-viveon-neon-blue bg-clip-text text-transparent">HUX QUANTUM</span>
      </div>
      
      {/* LED indicator */}
      <motion.div
        className="absolute right-4 bottom-4 w-2 h-2 rounded-full bg-viveon-neon-blue"
        animate={{ 
          opacity: isAnimating ? [0.4, 1, 0.4] : [0.4, 0.7, 0.4],
          boxShadow: isAnimating ? ["0 0 5px #00ffff", "0 0 10px #00ffff", "0 0 5px #00ffff"] : ["0 0 2px #00ffff", "0 0 4px #00ffff", "0 0 2px #00ffff"]
        }}
        transition={{ duration: isAnimating ? 0.5 : 2, repeat: Infinity }}
      />
      
      {/* Top lid opening/closing animation */}
      <motion.div
        initial={{ rotateX: 0 }}
        animate={{ 
          rotateX: isAnimating ? -120 : -80,
          transition: { 
            duration: isAnimating ? 0.8 : 1, 
            type: "spring", 
            stiffness: isAnimating ? 80 : 60,
            damping: isAnimating ? 10 : 15
          }
        }}
        style={{ transformOrigin: "bottom" }}
        className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-gray-200 to-gray-300 rounded-t-xl border-b border-gray-400/30"
      >
        {/* Lid texture */}
        <div className="absolute inset-0 opacity-20 bg-noise rounded-t-xl"></div>
        
        {/* Lid handle */}
        <div className="absolute bottom-1 left-0 right-0 flex justify-center">
          <div className="w-16 h-0.5 bg-gray-500 rounded-full"></div>
        </div>
        
        {/* Highlight reflection on lid */}
        <div className="absolute top-0 left-0 w-full h-1/3 bg-white/30 rounded-b-[50%]"></div>
      </motion.div>
      
      {/* Glow effect when animating */}
      {isAnimating && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.8, 0] }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 bg-viveon-neon-blue/20 rounded-xl"
        />
      )}
    </motion.div>
  );
};

export default AIAssistantDock;
