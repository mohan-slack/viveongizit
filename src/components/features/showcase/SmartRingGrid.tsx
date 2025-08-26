
import React from 'react';
import { motion } from 'framer-motion';
import { getSmartRingsData } from '../smartRingsData';
import { cn } from '@/lib/utils';

const SmartRingGrid: React.FC = () => {
  const smartRingsData = getSmartRingsData();
  
  // Take only the first 9 items for 3x3 grid
  const gridData = smartRingsData.slice(0, 9);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.08
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1]
      }
    },
    hover: {
      y: -12,
      scale: 1.03,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="relative py-24 lg:py-32 overflow-hidden">
      {/* Enhanced futuristic background */}
      <div className="absolute inset-0 bg-gradient-to-br from-viveon-dark via-viveon-darker to-black">
        <div className="absolute inset-0 bg-grid-lines opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-viveon-darker/80 via-transparent to-viveon-darker/80" />
        
        {/* Dynamic floating elements */}
        <motion.div 
          className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-viveon-red/20 to-viveon-neon-purple/20 rounded-full filter blur-[100px]"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.7, 0.3],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-viveon-neon-blue/20 to-viveon-neon-purple/20 rounded-full filter blur-[120px]"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
            x: [0, -40, 0],
            y: [0, 20, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, delay: 3 }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-r from-viveon-red/10 to-viveon-neon-blue/10 rounded-full filter blur-[150px]"
          animate={{ 
            scale: [1, 1.4, 1],
            opacity: [0.2, 0.4, 0.2],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 20, repeat: Infinity, delay: 6 }}
        />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.h2 
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-viveon-red via-viveon-neon-purple to-viveon-neon-blue bg-clip-text text-transparent animate-gradient-shimmer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Smart Ring Features
          </motion.h2>
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Experience the future of wearable technology with our revolutionary smart ring capabilities
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {gridData.map((feature, index) => (
            <motion.div
              key={feature.id}
              className="flex flex-col items-center group"
              variants={cardVariants}
              whileHover="hover"
            >
              {/* Enhanced Feature Card */}
              <div
                className={cn(
                  "relative overflow-hidden backdrop-blur-[16px] rounded-3xl transform-gpu cursor-pointer",
                  "border-2 border-opacity-40 transition-all duration-700 group-hover:duration-300",
                  "w-full aspect-square p-8 group-hover:p-6", 
                  `${feature.color} hover:border-opacity-90`,
                  "shadow-[0_20px_60px_rgba(0,0,0,0.5)] hover:shadow-[0_30px_100px_rgba(0,0,0,0.7)]",
                  "group-hover:shadow-2xl"
                )}
                style={{
                  background: "rgba(5, 5, 8, 0.90)",
                }}
              >
                {/* Enhanced glow effect */}
                <div 
                  className="absolute -inset-4 rounded-[2.5rem] opacity-20 blur-2xl transition-all duration-700 group-hover:opacity-40 group-hover:blur-xl"
                  style={{
                    background: `radial-gradient(ellipse at center, ${feature.glowColor.replace('bg-', '').replace('-500', '')}, transparent 70%)`
                  }}
                />
                
                {/* Holographic shine effect */}
                <div className="absolute inset-0 rounded-3xl holographic opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
                
                {/* Image container with enhanced styling */}
                {feature.backgroundImage && (
                  <div className="relative w-full h-full flex items-center justify-center">
                    <motion.img 
                      src={feature.backgroundImage}
                      alt={feature.title}
                      className="max-w-full max-h-full object-contain transition-all duration-500 group-hover:scale-110"
                      style={{
                        filter: 'brightness(1.1) contrast(1.05) saturate(1.1)',
                      }}
                      whileHover={{
                        scale: 1.15,
                        filter: 'brightness(1.2) contrast(1.1) saturate(1.2)',
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                )}
                
                {/* Enhanced feature number indicator */}
                <div className="absolute top-6 left-6 z-20">
                  <motion.div 
                    className={cn(
                      "w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold text-white",
                      feature.glowColor,
                      "shadow-xl backdrop-blur-sm border border-white/20 group-hover:scale-110"
                    )}
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                  >
                    {index + 1}
                  </motion.div>
                </div>

                {/* Enhanced bottom accent line with animation */}
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20">
                  <motion.div 
                    className={`h-1.5 w-16 rounded-full ${feature.glowColor} opacity-70 group-hover:opacity-100 group-hover:w-20`}
                    whileHover={{ scaleX: 1.3, scaleY: 1.5 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>

                {/* Particle effect overlay */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent animate-pulse" />
                </div>
              </div>

              {/* Enhanced Feature Title */}
              <motion.div 
                className="mt-8 text-center group-hover:transform group-hover:scale-105 transition-transform duration-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.4 }}
              >
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-viveon-red group-hover:to-viveon-neon-blue group-hover:bg-clip-text transition-all duration-300">
                  {feature.title}
                </h3>
                <p className="text-sm md:text-base text-gray-400 max-w-xs mx-auto leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {feature.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default SmartRingGrid;
