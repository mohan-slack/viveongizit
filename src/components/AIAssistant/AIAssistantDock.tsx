
import React from 'react';
import { motion } from 'framer-motion';

const AIAssistantDock: React.FC = () => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 20, opacity: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="relative w-64 h-32 bg-gradient-to-b from-gray-900 to-black rounded-xl overflow-hidden shadow-xl border border-viveon-neon-blue/20"
    >
      {/* Base dock */}
      <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-black rounded-b-xl"></div>
      
      {/* Charging contacts */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-10">
        <div className="w-3 h-1 bg-viveon-neon-blue/60 rounded-full"></div>
        <div className="w-3 h-1 bg-viveon-neon-blue/60 rounded-full"></div>
      </div>
      
      {/* HUX logo */}
      <div className="absolute bottom-2 left-0 right-0 text-center">
        <span className="text-xs font-bold text-viveon-neon-blue/70">HUX QUANTUM</span>
      </div>
      
      {/* Glowing effect */}
      <div className="absolute inset-0 bg-viveon-neon-blue/5 rounded-xl"></div>
      
      {/* Top lid opening/closing animation */}
      <motion.div
        initial={{ rotateX: 0 }}
        animate={{ rotateX: -80 }}
        transition={{ duration: 1, type: "spring", stiffness: 60 }}
        style={{ transformOrigin: "bottom" }}
        className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-gray-800 to-gray-900 rounded-t-xl border-b border-viveon-neon-blue/20"
      >
        <div className="absolute bottom-1 left-0 right-0 flex justify-center">
          <div className="w-16 h-0.5 bg-viveon-neon-blue/30 rounded-full"></div>
        </div>
      </motion.div>
      
      {/* Reflective surface */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-30 rounded-xl pointer-events-none"></div>
    </motion.div>
  );
};

export default AIAssistantDock;
