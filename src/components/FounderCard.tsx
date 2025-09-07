
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Badge } from './ui/badge';
import { useIsMobile } from '@/hooks/use-mobile';
import FounderProfileModal from './FounderProfileModal';
import { FounderProps } from '@/types/founder';
import { getRoleColor, getRoleBadgeColor, getRoleTextColor, getRoleIcon } from '@/utils/founderUtils';

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
        className="group cursor-pointer"
        onClick={() => setIsOpen(true)}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        whileHover={{ y: -4 }}
        whileTap={{ scale: 0.98 }}
      >
        {/* Minimalist card container */}
        <div className="relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 transition-all duration-300 hover:bg-card/70 hover:border-border hover:shadow-lg">
          {/* Subtle role indicator line */}
          <div 
            className="absolute top-0 left-0 w-full h-0.5 rounded-t-xl"
            style={{ backgroundColor: getRoleTextColor(role) }}
          />
          
          {/* Content */}
          <div className="flex items-center space-x-4">
            {/* Avatar */}
            <div className="relative flex-shrink-0">
              <Avatar className="w-14 h-14 border-2 border-border/20">
                <AvatarImage 
                  src={profileImage} 
                  alt={`${name} - ${role}`} 
                  className="object-cover"
                />
                <AvatarFallback className="bg-muted text-foreground">
                  {name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              
              {/* Role badge with 3D effect */}
              <div className="absolute -bottom-1 -right-1">
                <div className="relative w-8 h-8">
                  {/* 3D Emoji Container */}
                  <div 
                    className="absolute inset-0 rounded-full shadow-lg transform rotate-12 group-hover:rotate-0 transition-transform duration-300"
                    style={{
                      background: `linear-gradient(135deg, ${getRoleTextColor(role)}40, ${getRoleTextColor(role)}80)`
                    }}
                  >
                    <div 
                      className="absolute inset-0.5 rounded-full"
                      style={{
                        background: `linear-gradient(135deg, ${getRoleTextColor(role)}60, ${getRoleTextColor(role)})`
                      }}
                    >
                      <div className="absolute inset-0.5 bg-gradient-to-br from-white/30 to-transparent rounded-full flex items-center justify-center">
                        <span className="text-sm">{role}</span>
                      </div>
                    </div>
                  </div>
                  {/* Shadow */}
                  <div 
                    className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-6 h-2 rounded-full blur-sm"
                    style={{ backgroundColor: `${getRoleTextColor(role)}20` }}
                  ></div>
                </div>
              </div>
            </div>
            
            {/* Info */}
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-foreground truncate">{name}</h3>
              <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                {description}
              </p>
              
              {/* Expertise tags */}
              <div className="flex gap-1 mt-2">
                {expertise.slice(0, 2).map((skill, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 text-xs bg-muted/50 text-muted-foreground rounded-md"
                  >
                    {skill}
                  </span>
                ))}
            </div>
          </div>
          </div>
          
          {/* Hover indicator */}
          <div className="absolute bottom-2 right-2 text-xs text-muted-foreground/60 opacity-0 group-hover:opacity-100 transition-opacity">
            View profile →
          </div>
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
