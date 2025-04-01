
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Badge } from './ui/badge';
import { 
  Briefcase, 
  Cpu, 
  Settings, 
  Zap, 
  TrendingUp, 
  LineChart, 
  Code, 
  Lightbulb, 
  Binary
} from 'lucide-react';

interface FounderProps {
  name: string;
  role: string;
  description: string;
  longDescription: string;
  expertise: string[];
  profileImage: string;
  yearsExperience: number;
}

const FounderFlipCard: React.FC<FounderProps> = ({ 
  name, 
  role, 
  description, 
  longDescription,
  expertise, 
  profileImage,
  yearsExperience
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  // Determine the appropriate icon based on role
  const getRoleIcon = () => {
    switch (role) {
      case "CEO":
        return <Briefcase className="h-12 w-12 text-viveon-neon-blue" />;
      case "CTO":
        return <Cpu className="h-12 w-12 text-viveon-red" />;
      case "COO":
        return <Settings className="h-12 w-12 text-viveon-neon-purple" />;
      default:
        return <Briefcase className="h-12 w-12 text-viveon-neon-blue" />;
    }
  };
  
  // Get role-specific expertise icons
  const getExpertiseIcons = () => {
    const icons = [];
    
    if (role === "CEO") {
      icons.push(<Zap key="innovation" size={18} className="text-viveon-red" />);
      icons.push(<Briefcase key="strategy" size={18} className="text-viveon-neon-blue" />);
      icons.push(<Lightbulb key="vision" size={18} className="text-yellow-400" />);
    } else if (role === "COO") {
      icons.push(<TrendingUp key="growth" size={18} className="text-green-400" />);
      icons.push(<LineChart key="operations" size={18} className="text-viveon-neon-blue" />);
      icons.push(<Settings key="execution" size={18} className="text-viveon-neon-purple" />);
    } else if (role === "CTO") {
      icons.push(<Cpu key="tech" size={18} className="text-viveon-red" />);
      icons.push(<Code key="innovation" size={18} className="text-viveon-neon-blue" />);
      icons.push(<Binary key="r&d" size={18} className="text-viveon-neon-purple" />);
    }
    
    return icons;
  };

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

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div 
      className="h-full perspective-1000"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={flipCard}
    >
      <motion.div
        className="relative h-full w-full transform-gpu cursor-pointer rounded-2xl transition-all duration-700 preserve-3d"
        initial={false}
        animate={{
          rotateY: isFlipped ? 180 : 0,
          z: isHovered ? 20 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 15,
        }}
      >
        {/* Front Side of Card */}
        <div className="absolute inset-0 backface-hidden">
          {/* Background glow effect */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-viveon-red via-viveon-neon-purple to-viveon-neon-blue rounded-2xl blur opacity-40 group-hover:opacity-75 transition duration-300"></div>
          
          {/* Card container with glassmorphism effect */}
          <div className="relative h-full backdrop-blur-xl bg-black/40 border border-white/10 rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
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
              className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0`}
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
            
            {/* Front Card Content */}
            <div className="relative flex flex-col items-center p-8 h-full">
              <motion.div
                className="absolute top-6 right-6 bg-viveon-darker/80 backdrop-blur-md text-white font-bold py-1 px-3 rounded-full text-sm border border-white/10 shadow-lg"
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
                className="relative mb-6"
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
                  className={`absolute -inset-1 rounded-full bg-gradient-to-r from-viveon-red via-viveon-neon-purple to-viveon-neon-blue blur-md`}
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
                
                <Avatar className="w-28 h-28 border-2 border-opacity-20 border-white flex items-center justify-center bg-viveon-darker shadow-[0_0_15px_rgba(255,255,255,0.2)]">
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
                  className={`absolute -bottom-3 left-1/2 transform -translate-x-1/2 py-1 px-4 rounded-full backdrop-blur-md border border-white/10 shadow-lg text-xs font-bold tracking-wide`}
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
                <h3 className="text-white text-xl font-bold tracking-tight">
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
              
              {/* Expertise badges */}
              <motion.div 
                className="flex flex-wrap justify-center gap-2 mt-4"
                animate={{
                  y: isHovered ? -3 : 0,
                  opacity: isHovered ? 1 : 0.9,
                }}
                transition={{ duration: 0.3 }}
              >
                {expertise.map((skill, index) => (
                  <Badge 
                    key={index} 
                    variant="glow" 
                    className="py-1"
                  >
                    {getExpertiseIcons()[index % 3]}
                    <span className="ml-1">{skill}</span>
                  </Badge>
                ))}
              </motion.div>
              
              {/* Description with fading effect */}
              <motion.p 
                className="text-gray-300 mt-4 text-sm text-center font-light"
                animate={{
                  opacity: isHovered ? 1 : 0.8,
                }}
                transition={{ duration: 0.3 }}
              >
                {description}
              </motion.p>
              
              {/* Flip instruction */}
              <motion.div 
                className="mt-4 text-xs text-white/60"
                animate={{
                  opacity: isHovered ? [0.6, 1, 0.6] : 0.6,
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                Click to see full profile
              </motion.div>
              
              {/* Bottom highlight line */}
              <motion.div 
                className={`h-1 self-center rounded-full mt-6 bg-gradient-to-r 
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
        </div>
        
        {/* Back Side of Card - Rotated 180 degrees */}
        <div className="absolute inset-0 backface-hidden" style={{ transform: "rotateY(180deg)" }}>
          {/* Background glow effect */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-viveon-red via-viveon-neon-purple to-viveon-neon-blue rounded-2xl blur opacity-40 group-hover:opacity-75 transition duration-300"></div>
          
          {/* Card container with glassmorphism effect */}
          <div className="relative h-full backdrop-blur-xl bg-black/60 border border-white/10 rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex flex-col">
            {/* Back Card Content */}
            <div className="relative flex flex-col p-8 h-full">
              <div className="flex items-center space-x-4 mb-6">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${getGlowColor()}`}>
                  {getRoleIcon()}
                </div>
                
                <div>
                  <h3 className="text-white text-xl font-bold tracking-tight">
                    {name}
                  </h3>
                  
                  <div className={`text-sm font-medium`} style={{ color: getRoleTextColor() }}>
                    {role}
                  </div>
                </div>
              </div>
              
              <div className="flex-grow overflow-auto text-white space-y-4">
                <h4 className="font-bold text-lg">Profile</h4>
                <p className="text-gray-300">{longDescription}</p>
                
                <h4 className="font-bold text-lg">Areas of Expertise</h4>
                <div className="flex flex-wrap gap-2">
                  {expertise.map((skill, index) => (
                    <Badge 
                      key={index} 
                      variant="glow" 
                      className="py-1"
                    >
                      {getExpertiseIcons()[index % 3]}
                      <span className="ml-1">{skill}</span>
                    </Badge>
                  ))}
                </div>
                
                <h4 className="font-bold text-lg">Experience</h4>
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-300">Years in Industry</span>
                    <span className="text-white font-bold">{yearsExperience}+</span>
                  </div>
                  
                  <div className="w-full bg-black/40 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${
                        role === "CEO" ? "bg-viveon-red" : 
                        role === "COO" ? "bg-viveon-neon-purple" : 
                        "bg-viveon-neon-blue"
                      }`}
                      style={{ width: `${Math.min((yearsExperience / 20) * 100, 100)}%` }}
                    ></div>
                  </div>
                </div>
              </div>
              
              {/* Flip back instruction */}
              <motion.div 
                className="text-center mt-4 text-xs text-white/60"
                animate={{
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                Click to flip back
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default FounderFlipCard;
