
import React from 'react';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  size?: 'small' | 'medium' | 'large';
  showSoundWaves?: boolean;
}

const Logo: React.FC<LogoProps> = ({ 
  className, 
  size = 'medium', 
  showSoundWaves = true 
}) => {
  // Size mappings - significantly increased sizes for better visibility
  const sizeClasses = {
    small: "h-12",
    medium: "h-16",
    large: "h-24",
  };

  return (
    <div className={cn("flex items-center", className)}>
      <div className="relative">
        {/* Sound waves have been removed */}
        
        <img 
          src="/lovable-uploads/8272919f-a475-4fc1-bc45-434453c53e5f.png" 
          alt="VIVEON Logo" 
          className={cn(
            sizeClasses[size],
            "object-contain max-w-full"
          )}
        />
        
        {/* Sound waves have been removed */}
      </div>
    </div>
  );
};

export default Logo;
