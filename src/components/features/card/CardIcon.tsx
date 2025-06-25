
import React from 'react';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { iconVariants } from './CardAnimations';

interface CardIconProps {
  iconName: string;
  color: string;
  selected: boolean;
}

const CardIcon: React.FC<CardIconProps> = ({ iconName, color, selected }) => {
  // Get the icon component dynamically
  const IconComponent = (LucideIcons as any)[iconName];
  
  const getIconColor = () => {
    if (selected) return "text-white";
    
    switch (iconName) {
      case "Zap": return "text-viveon-red";
      case "Headphones": return "text-viveon-neon-blue";
      case "Wifi": return "text-viveon-neon-purple";
      default: return "text-green-500";
    }
  };

  return (
    <motion.div
      className={`w-14 h-14 rounded-xl flex items-center justify-center backdrop-blur-sm ${color} shadow-lg`}
      variants={iconVariants}
      style={{ transform: "translateZ(20px)" }}
    >
      {IconComponent && 
        <IconComponent 
          size={24} 
          className={getIconColor()} 
        />
      }
    </motion.div>
  );
};

export default CardIcon;
