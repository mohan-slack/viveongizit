
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';
import { FeatureProps } from './FeatureTypes';
import * as LucideIcons from 'lucide-react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { Info, X } from 'lucide-react';

const FeatureCard = ({ 
  iconName, 
  emoji, 
  title, 
  description, 
  index, 
  color, 
  glowColor, 
  additionalInfo,
  selected = false,
  onSelect,
  onDeselect,
  id
}: FeatureProps) => {
  const isMobile = useIsMobile();
  
  // Get the icon component dynamically
  const IconComponent = (LucideIcons as any)[iconName];
  
  // Animations for each card
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }
    }),
    hover: {
      scale: 1.02,
      rotateY: 2,
      rotateX: 2,
      z: 10,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15
      }
    },
    selected: {
      scale: 1.05,
      rotateY: 3,
      rotateX: 3,
      z: 15,
      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15
      }
    }
  };

  const iconVariants = {
    rest: { scale: 1 },
    hover: { 
      scale: 1.15,
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 0.5,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "mirror" as const
      }
    },
    selected: {
      scale: 1.2,
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 0.5,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "mirror" as const
      }
    }
  };

  const pulseVariants = {
    rest: { opacity: 0.2, scale: 1 },
    hover: { 
      opacity: [0.2, 0.4, 0.2],
      scale: [1, 1.1, 1],
      transition: {
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity
      }
    },
    selected: {
      opacity: [0.3, 0.6, 0.3],
      scale: [1, 1.2, 1],
      transition: {
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity
      }
    }
  };

  const textVariants = {
    rest: { y: 0 },
    hover: { 
      y: -3,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    selected: {
      y: -5,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };
  
  // Handle click events
  const handleCardClick = () => {
    if (onSelect && id) {
      onSelect(id);
    }
  };
  
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <motion.div
          className={cn(
            "relative overflow-hidden backdrop-blur-[10px] p-6 md:p-8 rounded-2xl transform-gpu cursor-pointer h-full",
            "border border-opacity-20 transition-all duration-300",
            "perspective-1000",
            selected 
              ? `${color} border-opacity-80` 
              : `${color} hover:border-opacity-60`,
            selected ? "shadow-[0_0_30px_rgba(255,255,255,0.1)]" : ""
          )}
          custom={index}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          whileHover={selected ? "selected" : "hover"}
          animate={selected ? "selected" : "rest"}
          variants={containerVariants}
          style={{
            background: selected ? "rgba(20, 20, 30, 0.85)" : "rgba(10, 10, 15, 0.75)",
            boxShadow: `0 10px 30px rgba(0, 0, 0, ${selected ? 0.5 : 0.3})`,
            transformStyle: "preserve-3d"
          }}
          onClick={handleCardClick}
        >
          {/* Selection Indicator */}
          {selected && (
            <motion.div 
              className="absolute top-4 right-4 z-20"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
            >
              <div className={`w-6 h-6 rounded-full flex items-center justify-center ${glowColor} shadow-lg`}>
                <X size={16} className="text-white" />
              </div>
            </motion.div>
          )}
          
          {/* Background glow effect */}
          <motion.div 
            className={`absolute -z-10 inset-0 opacity-20 ${glowColor} blur-xl rounded-full transform -translate-x-1/4 -translate-y-1/4 w-3/4 h-3/4`}
            variants={pulseVariants}
          />
          
          {/* Particle animation background */}
          <div className="absolute inset-0 overflow-hidden opacity-30">
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.div
                key={i}
                className={`absolute w-1 h-1 rounded-full ${glowColor}`}
                initial={{ 
                  x: `${Math.random() * 100}%`, 
                  y: `${Math.random() * 100}%`, 
                  opacity: Math.random() * 0.5 + 0.2 
                }}
                animate={{ 
                  x: `${Math.random() * 100}%`, 
                  y: `${Math.random() * 100}%`,
                  opacity: [0.2, 0.5, 0.2]
                }}
                transition={{ 
                  duration: Math.random() * 10 + 10, 
                  repeat: Infinity,
                  ease: "linear" 
                }}
              />
            ))}
          </div>
          
          <div className="flex flex-col h-full justify-between z-10 relative transform-gpu" style={{ transformStyle: "preserve-3d" }}>
            <div>
              <div className="flex items-start justify-between mb-6">
                {/* Icon container with pulse effect */}
                <motion.div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center backdrop-blur-sm ${color} shadow-lg`}
                  variants={iconVariants}
                  style={{ transform: "translateZ(20px)" }}
                >
                  {IconComponent && 
                    <IconComponent 
                      size={24} 
                      className={selected 
                        ? "text-white" 
                        : iconName === "Zap" 
                          ? "text-viveon-red" 
                          : iconName === "Headphones" 
                            ? "text-viveon-neon-blue" 
                            : iconName === "Wifi" 
                              ? "text-viveon-neon-purple" 
                              : "text-green-500"
                      } 
                    />
                  }
                </motion.div>
                
                <span className="text-2xl" aria-hidden="true">{emoji}</span>
              </div>
              
              <motion.div variants={textVariants}>
                <h3 className={cn(
                  "text-xl md:text-2xl font-bold mb-2 tracking-tight neon-text",
                  selected ? "text-white" : "text-white"
                )}
                    style={{ textShadow: `0 0 10px rgba(255,255,255,${selected ? 0.5 : 0.3})` }}>
                  {title}
                </h3>
                
                <p className={cn(
                  "text-sm md:text-base font-light",
                  selected ? "text-white" : "text-gray-300"
                )}>
                  {description}
                </p>
              </motion.div>
            </div>
            
            {/* Info button for showing details (only when not selected) */}
            {!selected && additionalInfo && (
              <div 
                className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center mt-4 self-end"
                aria-hidden="true"
              >
                <Info size={16} className="text-white/70" />
              </div>
            )}
            
            {/* Bottom decorative line */}
            <motion.div 
              className={`h-1 w-1/3 mt-6 rounded-full ${glowColor}`}
              animate={{ 
                width: selected ? ["40%", "70%", "60%"] : ["25%", "40%", "30%"], 
                opacity: selected ? [0.8, 1, 0.8] : [0.6, 0.8, 0.6] 
              }}
              transition={{ duration: 3, ease: "easeInOut", repeat: Infinity }}
            />
          </div>
        </motion.div>
      </HoverCardTrigger>
      
      {additionalInfo && (
        <HoverCardContent 
          className="w-80 p-4 backdrop-blur-xl bg-black/80 border border-white/10 text-white"
          sideOffset={10}
        >
          <div className="flex flex-col gap-2">
            <h4 className="font-bold text-lg neon-text">{title} Details</h4>
            <p className="text-sm text-gray-300">{additionalInfo}</p>
          </div>
        </HoverCardContent>
      )}
    </HoverCard>
  );
};

export default FeatureCard;
