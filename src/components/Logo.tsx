
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
  // Size mappings - increased sizes for better visibility
  const sizeClasses = {
    small: "h-8",
    medium: "h-10",
    large: "h-16",
  };

  return (
    <div className={cn("flex items-center", className)}>
      <div className="relative">
        {/* Sound waves left - only show if prop is true */}
        {showSoundWaves && (
          <div className="absolute -left-6 top-1/2 -translate-y-1/2 flex space-x-0.5">
            <div className="w-0.5 h-3 bg-viveon-neon-purple animate-pulse" style={{ animationDelay: '0s' }}></div>
            <div className="w-0.5 h-5 bg-viveon-neon-blue animate-pulse" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-0.5 h-4 bg-viveon-neon-purple animate-pulse" style={{ animationDelay: '0.1s' }}></div>
          </div>
        )}
        
        <img 
          src="/lovable-uploads/8272919f-a475-4fc1-bc45-434453c53e5f.png" 
          alt="VIVEON Logo" 
          className={cn(
            sizeClasses[size],
            "object-contain max-w-full"
          )}
        />
        
        {/* Sound waves right - only show if prop is true */}
        {showSoundWaves && (
          <div className="absolute -right-6 top-1/2 -translate-y-1/2 flex space-x-0.5">
            <div className="w-0.5 h-4 bg-viveon-neon-purple animate-pulse" style={{ animationDelay: '0.3s' }}></div>
            <div className="w-0.5 h-6 bg-viveon-neon-blue animate-pulse" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-0.5 h-3 bg-viveon-neon-purple animate-pulse" style={{ animationDelay: '0.1s' }}></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Logo;
