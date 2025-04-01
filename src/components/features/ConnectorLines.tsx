
import React from 'react';
import { motion } from 'framer-motion';

const ConnectorLines = () => {
  return (
    <div className="absolute inset-0 z-0 hidden lg:block pointer-events-none">
      <svg className="w-full h-full" viewBox="0 0 1000 500" preserveAspectRatio="none">
        {/* Animated connector paths */}
        <motion.path 
          d="M250,130 C400,90 500,200 750,150" 
          stroke="rgba(255,58,47,0.2)" 
          strokeWidth="2" 
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
        />
        <motion.path 
          d="M250,350 C400,300 600,400 750,350" 
          stroke="rgba(0,255,255,0.2)" 
          strokeWidth="2" 
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 0.8 }}
        />
        <motion.path 
          d="M250,240 C500,190 500,300 750,240" 
          stroke="rgba(155,48,255,0.2)" 
          strokeWidth="2" 
          fill="none" 
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 1.1 }}
        />
      </svg>
    </div>
  );
};

export default ConnectorLines;
