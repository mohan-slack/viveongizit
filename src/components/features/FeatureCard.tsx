
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';
import { FeatureProps } from './FeatureTypes';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';

// Import refactored components
import CardBackground from './card/CardBackground';
import SelectionIndicator from './card/SelectionIndicator';
import CardIcon from './card/CardIcon';
import CardContent from './card/CardContent';

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
  id,
  backgroundImage
}: FeatureProps) => {
  const isMobile = useIsMobile();
  
  // Handle click events
  const handleCardClick = () => {
    if (onSelect && id) {
      onSelect(id);
    }
  };

  // Simplified animation variants
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
        delay: index * 0.1,
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
    <HoverCard>
      <HoverCardTrigger asChild>
        <motion.div
          className={cn(
            "relative overflow-hidden backdrop-blur-[10px] rounded-2xl transform-gpu cursor-pointer",
            "border border-opacity-20 transition-all duration-300",
            "aspect-square min-h-[280px] md:min-h-[320px]", // Fixed aspect ratio and minimum height
            selected 
              ? `${color} border-opacity-80` 
              : `${color} hover:border-opacity-60`,
            selected ? "shadow-[0_0_30px_rgba(255,255,255,0.1)]" : ""
          )}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          whileHover="hover"
          variants={cardVariants}
          style={{
            background: selected ? "rgba(20, 20, 30, 0.85)" : "rgba(10, 10, 15, 0.75)",
            boxShadow: `0 10px 30px rgba(0, 0, 0, ${selected ? 0.5 : 0.3})`
          }}
          onClick={handleCardClick}
        >
          {/* Selection Indicator */}
          <SelectionIndicator visible={selected} glowColor={glowColor} />
          
          {/* Background Effects - Main Image Display */}
          <CardBackground glowColor={glowColor} selected={selected} backgroundImage={backgroundImage} />
          
          {/* Minimal Card Content */}
          <CardContent 
            title={title}
            description={description}
            additionalInfo={additionalInfo}
            selected={selected}
            glowColor={glowColor}
          />
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
