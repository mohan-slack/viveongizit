
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
    <div className="flex items-center gap-3 mb-4">
      {/* Simple Avatar */}
      <Avatar className="w-12 h-12 border-2 border-border/20">
        <AvatarImage 
          src={founder.profileImage} 
          alt={`${founder.name} - ${founder.role}`} 
          className="object-cover"
        />
        <AvatarFallback className="bg-muted text-foreground">
          {founder.name.split(' ').map(n => n[0]).join('')}
        </AvatarFallback>
      </Avatar>
      
      {/* Name and role */}
      <div className="flex-1">
        <h2 className="font-semibold text-foreground">{founder.name}</h2>
        <div className="flex items-center gap-2">
          <span className="text-lg">{founder.role}</span>
          <span className="text-xs text-muted-foreground">{founder.yearsExperience}+ years</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
