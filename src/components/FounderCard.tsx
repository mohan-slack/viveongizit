
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Badge } from './ui/badge';
import { useIsMobile } from '@/hooks/use-mobile';
import FounderProfileModal from './FounderProfileModal';
import { FounderProps } from '@/types/founder';
import { getRoleColor, getRoleBadgeColor, getRoleTextColor, getRoleIcon } from '@/utils/founderUtils';
import FounderCardContent from './FounderCardContent';

const FounderCard: React.FC<FounderProps> = ({ 
  name, 
  role, 
  description, 
  longDescription,
  expertise, 
  profileImage,
  yearsExperience
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();

  return (
    <>
      <motion.div 
        className="h-full w-full perspective-1000 cursor-pointer"
        onMouseEnter={() => !isMobile && setIsHovered(true)}
        onMouseLeave={() => !isMobile && setIsHovered(false)}
        onClick={() => setIsOpen(true)}
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: 1, 
          y: 0,
          scale: isHovered ? 1.03 : 1,
          rotate: isHovered ? [0, -1, 1, 0] : 0,
          transition: { 
            duration: 0.3,
            rotate: {
              repeat: isHovered ? Infinity : 0,
              repeatType: "mirror",
              duration: 4
            }
          }
        }}
        whileTap={{ scale: 0.98 }}
      >
        {/* Card container with glassmorphism effect */}
        <div className="relative h-full backdrop-blur-xl bg-black/40 border border-white/10 rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)] group">
          {/* Background glow effect */}
          <motion.div 
            className="absolute -inset-0.5 bg-gradient-to-r from-viveon-red via-viveon-neon-purple to-viveon-neon-blue rounded-2xl blur opacity-40"
            animate={{
              opacity: isHovered ? 0.6 : 0.4,
              scale: isHovered ? 1.01 : 1,
            }}
            transition={{ duration: 0.3 }}
          />
          
          {/* Animated gradient background */}
          <motion.div 
            className={`absolute inset-0 bg-gradient-to-b ${getRoleColor(role)} opacity-10`}
            animate={{ 
              opacity: isHovered ? 0.2 : 0.1
            }}
            transition={{ duration: 0.4 }}
          />
          
          {/* Holographic effect */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0"
            animate={{ 
              opacity: isHovered ? 0.3 : 0,
              x: isHovered ? ["100%", "-100%"] : "0%",
            }}
            transition={{ 
              duration: 1.5, 
              repeat: isHovered ? Infinity : 0,
              ease: "linear" 
            }}
          />
          
          {/* Grid lines for cyberpunk effect */}
          <div className="absolute inset-0 bg-grid-lines opacity-10" />
          
          {/* Card Content */}
          <FounderCardContent 
            name={name}
            role={role}
            description={description}
            expertise={expertise}
            profileImage={profileImage}
            yearsExperience={yearsExperience}
            isHovered={isHovered}
            getRoleBadgeColor={getRoleBadgeColor}
            getRoleTextColor={getRoleTextColor}
            getRoleIcon={getRoleIcon}
          />
        </div>
      </motion.div>

      {isOpen && (
        <FounderProfileModal
          founder={{ 
            name, 
            role, 
            longDescription, 
            expertise, 
            profileImage, 
            yearsExperience 
          }}
          onClose={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default FounderCard;
