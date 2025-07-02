
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
    <div className="relative py-20 lg:py-28 overflow-hidden">
      {/* Enhanced dark tech-style background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-grid-lines opacity-8" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/60" />
        {/* Subtle animated glow effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-viveon-red/3 rounded-full filter blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-viveon-neon-blue/3 rounded-full filter blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gradient-text bg-gradient-to-r from-viveon-red via-viveon-neon-purple to-viveon-neon-blue bg-clip-text text-transparent">
            Smart Ring Features
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover the future of wearable technology with our advanced smart ring capabilities
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {gridData.map((feature, index) => (
            <motion.div
              key={feature.id}
              className="flex flex-col items-center"
              variants={cardVariants}
              whileHover="hover"
            >
              {/* Feature Card */}
              <div
                className={cn(
                  "relative overflow-hidden backdrop-blur-[12px] rounded-3xl transform-gpu cursor-pointer",
                  "border-2 border-opacity-30 transition-all duration-500",
                  "w-full aspect-square p-6", // Square aspect ratio with padding
                  `${feature.color} hover:border-opacity-70`,
                  "shadow-[0_15px_50px_rgba(0,0,0,0.4)]",
                  "hover:shadow-[0_25px_80px_rgba(0,0,0,0.6)]"
                )}
                style={{
                  background: "rgba(8, 8, 12, 0.85)",
                }}
              >
                {/* Subtle glow effect */}
                <div 
                  className="absolute -inset-2 rounded-[2rem] opacity-15 blur-xl transition-opacity duration-500 hover:opacity-25"
                  style={{
                    background: `linear-gradient(135deg, ${feature.glowColor.replace('bg-', '').replace('-500', '')}, transparent, ${feature.glowColor.replace('bg-', '').replace('-500', '')})`
                  }}
                />
                
                {/* Image container with proper aspect ratio preservation */}
                {feature.backgroundImage && (
                  <div className="relative w-full h-full flex items-center justify-center">
                    <img 
                      src={feature.backgroundImage}
                      alt={feature.title}
                      className="max-w-full max-h-full object-contain"
                      style={{
                        filter: 'brightness(1.05) contrast(1.02)',
                      }}
                    />
                  </div>
                )}
                
                {/* Feature number indicator */}
                <div className="absolute top-4 left-4 z-20">
                  <div className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white",
                    feature.glowColor,
                    "shadow-lg backdrop-blur-sm"
                  )}>
                    {index + 1}
                  </div>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20">
                  <div 
                    className={`h-1 w-12 rounded-full ${feature.glowColor} opacity-70`}
                  />
                </div>
              </div>

              {/* Feature Title Below Card */}
              <motion.div 
                className="mt-6 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-400 max-w-xs mx-auto leading-relaxed">
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
