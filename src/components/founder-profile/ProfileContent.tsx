
import React from 'react';
import { motion } from 'framer-motion';
import { ExpertiseTags } from '@/components/ExpertiseTags';
import { FounderProfile } from '@/types/founder';
import { getRoleTextColor } from '@/utils/founderUtils';
import { useIsMobile } from '@/hooks/use-mobile';

interface ProfileContentProps {
  founder: FounderProfile;
}

const ProfileContent: React.FC<ProfileContentProps> = ({ founder }) => {
  const isMobile = useIsMobile();
  
  return (
    <div className="space-y-3">
      {/* Bio section */}
      <div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {founder.longDescription}
        </p>
      </div>
      
      {/* Expertise tags */}
      <div>
        <h4 className="text-sm font-medium text-foreground mb-2">Expertise</h4>
        <div className="flex flex-wrap gap-1">
          {founder.expertise.map((skill, index) => (
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
  );
};

export default ProfileContent;
