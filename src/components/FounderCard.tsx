
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Badge } from './ui/badge';
import { 
  Briefcase, 
  Cpu, 
  Settings,
  X
} from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import FounderProfileModal from './FounderProfileModal';
import { ExpertiseTags } from './ExpertiseTags';

interface FounderProps {
  name: string;
  role: string;
  description: string;
  longDescription: string;
  expertise: string[];
  profileImage: string;
  yearsExperience: number;
}

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
  
  // Get role-specific gradient and colors
  const getRoleColor = () => {
    switch (role) {
      case "CEO": return "from-viveon-red via-viveon-red/50 to-transparent";
      case "CTO": return "from-viveon-neon-blue via-viveon-neon-blue/50 to-transparent";
      case "COO": return "from-viveon-neon-purple via-viveon-neon-purple/50 to-transparent";
      default: return "from-viveon-red via-viveon-red/50 to-transparent";
    }
  };

  const getGlowColor = () => {
    switch (role) {
      case "CEO": return "bg-viveon-red/20 text-viveon-red";
      case "CTO": return "bg-viveon-neon-blue/20 text-viveon-neon-blue";
      case "COO": return "bg-viveon-neon-purple/20 text-viveon-neon-purple";
      default: return "bg-viveon-red/20 text-viveon-red";
    }
  };

  const getRoleBadgeColor = () => {
    switch (role) {
      case "CEO": return "rgba(255, 58, 47, 0.2)";
      case "COO": return "rgba(155, 48, 255, 0.2)";
      case "CTO": return "rgba(0, 255, 255, 0.2)";
      default: return "rgba(255, 58, 47, 0.2)";
    }
  };
  
  const getRoleTextColor = () => {
    switch (role) {
      case "CEO": return "#FF3A2F";
      case "COO": return "#9B30FF";
      case "CTO": return "#00FFFF";
      default: return "#FF3A2F";
    }
  };

  const getRoleIcon = () => {
    switch (role) {
      case "CEO":
        return <Briefcase className="h-6 w-6 md:h-8 md:w-8 text-viveon-red" />;
      case "CTO":
        return <Cpu className="h-6 w-6 md:h-8 md:w-8 text-viveon-neon-blue" />;
      case "COO":
        return <Settings className="h-6 w-6 md:h-8 md:w-8 text-viveon-neon-purple" />;
      default:
        return <Briefcase className="h-6 w-6 md:h-8 md:w-8 text-viveon-red" />;
    }
  };

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
            className={`absolute inset-0 bg-gradient-to-b ${getRoleColor()} opacity-10`}
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
                  {getRoleIcon()}
                </AvatarFallback>
              </Avatar>
              
              {/* Role indicator */}
              <motion.div 
                className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 py-1 px-3 rounded-full backdrop-blur-md border border-white/10 shadow-lg text-xs font-bold tracking-wide"
                style={{
                  backgroundColor: getRoleBadgeColor(),
                  color: getRoleTextColor()
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
        </div>
      </motion.div>

      <AnimatePresence>
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
            getRoleTextColor={getRoleTextColor}
            getRoleBadgeColor={getRoleBadgeColor}
            getRoleIcon={getRoleIcon}
            getGlowColor={getGlowColor}
            onClose={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default FounderCard;
