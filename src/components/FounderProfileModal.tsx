
import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { X } from 'lucide-react';
import { ExpertiseTags } from './ExpertiseTags';
import { FounderProfile } from '@/types/founder';
import { getGlowColor, getRoleBadgeColor, getRoleIcon, getRoleTextColor } from '@/utils/founderUtils';
import { useIsMobile } from '@/hooks/use-mobile';

interface FounderProfileModalProps {
  founder: FounderProfile;
  onClose: () => void;
}

const FounderProfileModal: React.FC<FounderProfileModalProps> = ({ 
  founder, 
  onClose 
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  
  // Effect for parallax movement - only on desktop
  useEffect(() => {
    if (isMobile) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      // Calculate mouse position as percentage of screen
      const x = (clientX / innerWidth) - 0.5;
      const y = (clientY / innerHeight) - 0.5;
      
      // Apply subtle rotation based on mouse position
      containerRef.current.style.transform = `
        perspective(1000px) 
        rotateY(${x * 2}deg) 
        rotateX(${-y * 2}deg)
      `;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isMobile]);
  
  // Enhanced outside click detection with touchstart for mobile
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent | TouchEvent) => {
      // Check if click/touch is outside the modal content
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    
    // Add event listeners for both mouse and touch events
    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('touchstart', handleOutsideClick);
    
    // Clean up event listeners
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('touchstart', handleOutsideClick);
    };
  }, [onClose]);
  
  // Handle escape key press
  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    
    window.addEventListener('keydown', handleEscKey);
    
    return () => {
      window.removeEventListener('keydown', handleEscKey);
    };
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        key="modal-backdrop"
      >
        {/* Blurred backdrop with improved tap area for mobile */}
        <motion.div 
          className="absolute inset-0 bg-black/70 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        />
        
        {/* More visible close button for mobile */}
        {isMobile && (
          <motion.button
            className="fixed top-4 right-4 z-[60] w-10 h-10 flex items-center justify-center rounded-full bg-viveon-red/90 border border-white/20 text-white shadow-lg"
            onClick={onClose}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <X size={24} />
          </motion.button>
        )}
        
        {/* Simplified particle effects for better performance */}
        {!isMobile && Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-white"
            style={{ 
              left: `${Math.random() * 100}%`, 
              top: `${Math.random() * 100}%`,
              opacity: 0.2 + Math.random() * 0.3
            }}
            animate={{
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.5, 1],
              x: [0, Math.random() * 40 - 20, 0],
              y: [0, Math.random() * 40 - 20, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
        
        {/* Profile card with better touch interaction */}
        <motion.div
          ref={modalRef}
          className={`relative max-h-[90vh] ${isMobile ? 'w-[95%] max-w-md' : 'w-11/12 max-w-xl'} bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl p-4 md:p-6 shadow-[0_10px_50px_rgba(0,0,0,0.5)] overflow-hidden overflow-y-auto`}
          initial={{ scale: 0.9, y: 50, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.9, y: 50, opacity: 0 }}
          transition={{
            type: "spring",
            damping: 25,
            stiffness: 200,
          }}
        >
          {/* Background pattern - simplified for mobile */}
          <div className="absolute inset-0 bg-grid-lines opacity-10" />
          
          {/* Reduced intensity glow for better performance */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-viveon-red via-viveon-neon-purple to-viveon-neon-blue rounded-2xl blur opacity-20" />
          
          {/* Close button */}
          {!isMobile && (
            <motion.button
              className="absolute top-2 right-2 z-10 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-black/60 border border-white/10 text-white/80 hover:text-white"
              onClick={(e) => {
                e.stopPropagation();
                onClose();
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <X size={isMobile ? 18 : 20} />
            </motion.button>
          )}

          <div className="relative z-10">
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center md:items-start">
              {/* Avatar with simplified animations for mobile */}
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
            
            {/* Bio section */}
            <motion.div
              className="mt-6 text-white/90 text-sm md:text-base leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
            >
              <h3 className="text-lg font-semibold mb-2">Profile</h3>
              <p className="text-gray-300">{founder.longDescription}</p>
            </motion.div>
            
            {/* Expertise with optimized rendering for mobile */}
            <motion.div
              className="mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-lg font-semibold mb-4 text-white">Areas of Expertise</h3>
              <ExpertiseTags 
                expertise={founder.expertise} 
                role={founder.role} 
                interactive={false} 
              />
            </motion.div>
            
            {/* Experience visualization - simplified for mobile */}
            <motion.div
              className="mt-6 bg-white/5 rounded-lg p-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-300">Years in Industry</span>
                <span className="text-white font-bold">{founder.yearsExperience}+</span>
              </div>
              
              <div className="w-full bg-black/40 rounded-full h-2">
                <motion.div 
                  className="h-2 rounded-full"
                  style={{ 
                    backgroundColor: getRoleTextColor(founder.role),
                    width: `${Math.min((founder.yearsExperience / 20) * 100, 100)}%` 
                  }}
                  initial={{ width: 0 }}
                  animate={{ width: `${Math.min((founder.yearsExperience / 20) * 100, 100)}%` }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                />
              </div>
            </motion.div>
            
            {/* Mobile-specific instructions for closing */}
            {isMobile && (
              <motion.div 
                className="mt-6 text-center text-sm text-white/60"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: [0.6, 1, 0.6]
                }}
                transition={{
                  delay: 1,
                  duration: 2,
                  repeat: Infinity
                }}
              >
                Tap outside to close
              </motion.div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default FounderProfileModal;
