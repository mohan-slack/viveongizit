
import React from 'react';
import { motion } from 'framer-motion';

const AIAssistantEarbuds: React.FC = () => {
  // Variants for animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.6
      }
    }
  };
  
  const earbudVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 50,
        damping: 10
      }
    }
  };
  
  return (
    <motion.div
      className="absolute top-0 left-0 right-0 flex justify-center items-start pointer-events-none"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Left earbud */}
      <motion.div
        className="relative mx-3 mt-8"
        variants={earbudVariants}
        animate={{
          rotateY: [0, 180, 360],
          y: [-10, -50, -30]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          times: [0, 0.5, 1],
          delay: 0.2
        }}
      >
        <div className="w-12 h-20 relative">
          {/* Main earbud body */}
          <div className="absolute inset-0 bg-black rounded-xl transform rotate-45 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-viveon-red/10 to-transparent"></div>
            
            {/* HUX logo */}
            <div className="absolute bottom-1 right-1 left-1 text-center transform -rotate-45">
              <span className="text-[6px] font-bold text-viveon-red">HUX</span>
            </div>
            
            {/* Accent line */}
            <div className="absolute top-1/4 left-0 right-0 h-px bg-viveon-red/40"></div>
          </div>
          
          {/* Silicone tip */}
          <div className="absolute top-1 left-1 w-3 h-3 bg-gray-800 rounded-full transform rotate-45">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-700 to-gray-900"></div>
          </div>
          
          {/* Microphone/speaker detail */}
          <div className="absolute bottom-3 right-2 w-2 h-2 bg-gray-800 rounded-full">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-viveon-red/30 to-transparent"></div>
          </div>
          
          {/* Glowing effect */}
          <motion.div 
            className="absolute inset-0 bg-viveon-red/10 rounded-xl transform rotate-45"
            animate={{ opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          ></motion.div>
        </div>
      </motion.div>
      
      {/* Right earbud */}
      <motion.div
        className="relative mx-3 mt-8"
        variants={earbudVariants}
        animate={{
          rotateY: [0, -180, -360],
          y: [-20, -40, -20]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          times: [0, 0.5, 1],
          delay: 0.5
        }}
      >
        <div className="w-12 h-20 relative">
          {/* Main earbud body */}
          <div className="absolute inset-0 bg-black rounded-xl transform -rotate-45 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-viveon-neon-blue/10 to-transparent"></div>
            
            {/* HUX logo */}
            <div className="absolute bottom-1 right-1 left-1 text-center transform rotate-45">
              <span className="text-[6px] font-bold text-viveon-neon-blue">HUX</span>
            </div>
            
            {/* Accent line */}
            <div className="absolute top-1/4 left-0 right-0 h-px bg-viveon-neon-blue/40"></div>
          </div>
          
          {/* Silicone tip */}
          <div className="absolute top-1 right-1 w-3 h-3 bg-gray-800 rounded-full transform -rotate-45">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-700 to-gray-900"></div>
          </div>
          
          {/* Microphone/speaker detail */}
          <div className="absolute bottom-3 left-2 w-2 h-2 bg-gray-800 rounded-full">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-viveon-neon-blue/30 to-transparent"></div>
          </div>
          
          {/* Glowing effect */}
          <motion.div 
            className="absolute inset-0 bg-viveon-neon-blue/10 rounded-xl transform -rotate-45"
            animate={{ opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          ></motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AIAssistantEarbuds;
