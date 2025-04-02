
import React from 'react';
import { motion } from 'framer-motion';

const AIAssistantDock: React.FC = () => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 20, opacity: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="relative w-64 h-40 bg-gradient-to-b from-gray-100 to-gray-300 rounded-xl overflow-hidden shadow-xl"
    >
      {/* Base dock */}
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gray-200 rounded-b-xl"></div>
      
      {/* Charging contacts */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-10">
        <div className="w-3 h-1 bg-gray-400 rounded-full"></div>
        <div className="w-3 h-1 bg-gray-400 rounded-full"></div>
      </div>
      
      {/* HUX logo */}
      <div className="absolute bottom-2 left-0 right-0 text-center">
        <span className="text-xs font-bold text-gray-600">HUX QUANTUM</span>
      </div>
      
      {/* Top lid opening/closing animation */}
      <motion.div
        initial={{ rotateX: 0 }}
        animate={{ rotateX: -80 }}
        transition={{ duration: 1, type: "spring", stiffness: 60 }}
        style={{ transformOrigin: "bottom" }}
        className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-gray-100 to-gray-200 rounded-t-xl border-b border-gray-300"
      >
        <div className="absolute bottom-1 left-0 right-0 flex justify-center">
          <div className="w-16 h-0.5 bg-gray-400 rounded-full"></div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AIAssistantDock;
