
import React from 'react';
import { motion } from 'framer-motion';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { FounderProfile } from '@/types/founder';
import { getRoleTextColor, getRoleIcon, getRoleBadgeColor } from '@/utils/founderUtils';
import { useIsMobile } from '@/hooks/use-mobile';

interface ProfileHeaderProps {
  founder: FounderProfile;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ founder }) => {
  const isMobile = useIsMobile();
  
  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center md:items-start">
      {/* Avatar with animations */}
      <motion.div
        className="relative"
        animate={{ 
          y: isMobile ? [0, -3, 0] : [0, -5, 0],
          rotate: isMobile ? 0 : [0, -1, 0, 1, 0],
        }}
        transition={{
          y: { repeat: Infinity, duration: isMobile ? 3 : 4, ease: "easeInOut" },
          rotate: { repeat: Infinity, duration: 6, ease: "easeInOut" },
        }}
      >
        <motion.div 
          className="absolute -inset-1 rounded-full bg-gradient-to-r from-viveon-red via-viveon-neon-purple to-viveon-neon-blue blur-md"
          animate={{
            opacity: [0.5, 0.7, 0.5],
            scale: [1, 1.03, 1],
          }}
          transition={{
            duration: isMobile ? 3 : 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <Avatar className={`${isMobile ? 'w-20 h-20' : 'w-24 h-24 md:w-32 md:h-32'} border-2 border-opacity-20 border-white bg-viveon-darker shadow-[0_0_15px_rgba(255,255,255,0.2)]`}>
          <AvatarImage 
            src={founder.profileImage} 
            alt={`${founder.name} - ${founder.role}`} 
            className="object-cover"
          />
          <AvatarFallback className="bg-viveon-darker">
            {getRoleIcon(founder.role)}
          </AvatarFallback>
        </Avatar>
        
        {/* Role indicator */}
        <motion.div 
          className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 py-1 px-3 rounded-full backdrop-blur-md border border-white/10 shadow-lg text-xs md:text-sm font-bold tracking-wide"
          style={{
            backgroundColor: getRoleBadgeColor(founder.role),
            color: getRoleTextColor(founder.role)
          }}
          animate={{
            y: [0, -2, 0],
          }}
          transition={{
            duration: isMobile ? 3 : 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {founder.role}
        </motion.div>
      </motion.div>
      
      {/* Name and title */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left">
        <motion.h2 
          className="text-xl md:text-2xl font-bold text-white tracking-tight mt-4 md:mt-0"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          {founder.name}
        </motion.h2>
        
        <motion.div 
          className="h-0.5 w-16 md:w-20 bg-gradient-to-r from-viveon-red to-viveon-neon-blue mt-2 md:mt-3"
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: "5rem", opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        />
        
        {/* Experience indicator */}
        <motion.div
          className="mt-2 bg-viveon-darker/80 backdrop-blur-md text-white font-bold py-1 px-3 rounded-full text-xs md:text-sm border border-white/10 shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
        >
          {founder.yearsExperience}+ years experience
        </motion.div>
      </div>
    </div>
  );
};

export default ProfileHeader;
