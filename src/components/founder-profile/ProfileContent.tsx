
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
    <>
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
      
      {/* Expertise section */}
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
      
      {/* Experience visualization */}
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
      
      {/* Mobile-specific instructions */}
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
    </>
  );
};

export default ProfileContent;
