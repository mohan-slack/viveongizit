
import React from 'react';
import { motion } from 'framer-motion';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Badge } from './ui/badge';

interface FounderCardContentProps {
  name: string;
  role: string;
  description: string;
  expertise: string[];
  profileImage: string;
  yearsExperience: number;
  isHovered: boolean;
  getRoleBadgeColor: (role: string) => string;
  getRoleTextColor: (role: string) => string;
  getRoleIcon: (role: string) => JSX.Element;
}

const FounderCardContent: React.FC<FounderCardContentProps> = ({
  name,
  role,
  description,
  expertise,
  profileImage,
  yearsExperience,
  isHovered,
  getRoleBadgeColor,
  getRoleTextColor,
  getRoleIcon
}) => {
  return (
    <div className="relative flex flex-col items-center p-4 md:p-6 h-full">
      <motion.div
        className="absolute top-3 right-3 md:top-4 md:right-4 bg-viveon-darker/80 backdrop-blur-md text-white font-bold py-1 px-2 rounded-full text-xs border border-white/10 shadow-lg"
        animate={{
          y: isHovered ? [0, -5, 0] : 0,
        }}
        transition={{
          duration: 2,
          repeat: isHovered ? Infinity : 0,
          ease: "easeInOut"
        }}
      >
        {yearsExperience}+ years
      </motion.div>
      
      {/* Avatar with glowing effect */}
      <motion.div
        className="relative mb-4"
        animate={{
          y: isHovered ? [0, -8, 0] : 0,
        }}
        transition={{
          duration: 3,
          repeat: isHovered ? Infinity : 0,
          ease: "easeInOut"
        }}
      >
        <motion.div 
          className="absolute -inset-1 rounded-full bg-gradient-to-r from-viveon-red via-viveon-neon-purple to-viveon-neon-blue blur-md"
          animate={{
            opacity: isHovered ? [0.5, 0.8, 0.5] : 0.5,
            scale: isHovered ? [1, 1.05, 1] : 1,
          }}
          transition={{
            duration: 2,
            repeat: isHovered ? Infinity : 0,
            ease: "easeInOut"
          }}
        />
        
        <Avatar className="w-16 h-16 md:w-20 md:h-20 border-2 border-opacity-20 border-white flex items-center justify-center bg-viveon-darker shadow-[0_0_15px_rgba(255,255,255,0.2)]">
          <AvatarImage 
            src={profileImage} 
            alt={`${name} - ${role}`} 
            className="p-0 object-cover"
          />
          <AvatarFallback className="bg-viveon-darker">
            {getRoleIcon(role)}
          </AvatarFallback>
        </Avatar>
        
        {/* Role indicator */}
        <motion.div 
          className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 py-1 px-3 rounded-full backdrop-blur-md border border-white/10 shadow-lg text-xs font-bold tracking-wide"
          style={{
            backgroundColor: getRoleBadgeColor(role),
            color: getRoleTextColor(role)
          }}
          animate={{
            y: isHovered ? -3 : 0,
            scale: isHovered ? 1.05 : 1,
          }}
          transition={{ duration: 0.3 }}
        >
          {role}
        </motion.div>
      </motion.div>
      
      {/* Name with dynamic underline */}
      <motion.div
        className="text-center"
        animate={{
          y: isHovered ? -3 : 0,
        }}
        transition={{ duration: 0.3 }}
      >
        <h3 className="text-white text-lg font-bold tracking-tight">
          {name}
        </h3>
        
        <motion.div 
          className="h-0.5 w-12 bg-gradient-to-r from-viveon-red to-viveon-neon-blue mx-auto mt-2"
          animate={{
            width: isHovered ? 60 : 48,
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
      
      {/* Expertise badges - simplified version */}
      <motion.div 
        className="flex flex-wrap justify-center gap-1 mt-3"
        animate={{
          y: isHovered ? -3 : 0,
          opacity: isHovered ? 1 : 0.9,
        }}
        transition={{ duration: 0.3 }}
      >
        {expertise.slice(0, 2).map((skill, index) => (
          <Badge 
            key={index} 
            variant="glow" 
            className="py-0.5 text-xs"
          >
            {skill}
          </Badge>
        ))}
      </motion.div>
      
      {/* Description with fading effect - shortened */}
      <motion.p 
        className="text-gray-300 mt-3 text-xs text-center font-light line-clamp-2"
        animate={{
          opacity: isHovered ? 1 : 0.8,
        }}
        transition={{ duration: 0.3 }}
      >
        {description}
      </motion.p>
      
      {/* View profile text */}
      <motion.div 
        className="mt-3 text-xs text-white/60"
        animate={{
          opacity: isHovered ? [0.6, 1, 0.6] : 0.6,
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        View full profile
      </motion.div>
      
      {/* Bottom highlight line */}
      <motion.div 
        className={`h-1 self-center rounded-full mt-3 bg-gradient-to-r 
          ${role === "CEO" ? "from-viveon-red to-viveon-red/0" : 
          role === "COO" ? "from-viveon-neon-purple to-viveon-neon-purple/0" : 
          "from-viveon-neon-blue to-viveon-neon-blue/0"}`}
        initial={{ width: "30%" }}
        animate={{
          width: isHovered ? "50%" : "30%",
          opacity: isHovered ? 1 : 0.7,
        }}
        transition={{ duration: 0.3 }}
      />
    </div>
  );
};

export default FounderCardContent;
