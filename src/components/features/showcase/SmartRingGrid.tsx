
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
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    },
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="relative py-16 lg:py-24 overflow-hidden">
      {/* Dark tech-style background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-grid-lines opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/50" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 gradient-text bg-gradient-to-r from-viveon-red via-viveon-neon-purple to-viveon-neon-blue bg-clip-text text-transparent">
            Smart Ring Features
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Discover the future of wearable technology with our advanced smart ring capabilities
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {gridData.map((feature, index) => (
            <motion.div
              key={feature.id}
              className={cn(
                "relative overflow-hidden backdrop-blur-[10px] rounded-2xl transform-gpu cursor-pointer",
                "border border-opacity-20 transition-all duration-300",
                "aspect-[4/3] w-full p-4", // Added padding for equal margins
                `${feature.color} hover:border-opacity-60`,
                "shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
              )}
              variants={cardVariants}
              whileHover="hover"
              style={{
                background: "rgba(10, 10, 15, 0.75)",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)"
              }}
            >
              {/* Subtle glow effect */}
              <div 
                className="absolute -inset-1 rounded-3xl opacity-10 blur-lg"
                style={{
                  background: `linear-gradient(45deg, ${feature.glowColor.replace('bg-', '').replace('-500', '')}, transparent, ${feature.glowColor.replace('bg-', '').replace('-500', '')})`
                }}
              />
              
              {/* Image container with equal padding */}
              {feature.backgroundImage && (
                <div className="relative w-full h-full rounded-xl overflow-hidden bg-transparent">
                  <img 
                    src={feature.backgroundImage}
                    alt={feature.title}
                    className="w-full h-full object-contain"
                    style={{
                      objectPosition: 'center center',
                      objectFit: 'contain'
                    }}
                  />
                </div>
              )}
              
              {/* Feature number indicator */}
              <div className="absolute top-2 left-2 z-20">
                <div className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white",
                  feature.glowColor,
                  "shadow-lg"
                )}>
                  {index + 1}
                </div>
              </div>

              {/* Minimal bottom accent */}
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 z-20">
                <div 
                  className={`h-1 w-8 rounded-full ${feature.glowColor} opacity-60`}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default SmartRingGrid;
