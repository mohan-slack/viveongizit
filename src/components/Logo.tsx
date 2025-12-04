
import React from 'react';
import { cn } from '@/lib/utils';
import { useNavigate, useLocation } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';

interface LogoProps {
  className?: string;
  size?: 'small' | 'medium' | 'large' | 'xlarge';
  showSoundWaves?: boolean;
}

const Logo: React.FC<LogoProps> = ({ 
  className, 
  size = 'medium', 
  showSoundWaves = true 
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isMobile = useIsMobile();
  
  // Size classes for navbar - slightly larger for better visibility
  const sizeClasses = {
    small: isMobile ? "h-12" : "h-14",
    medium: isMobile ? "h-14" : "h-16",
    large: isMobile ? "h-18" : "h-24",
    xlarge: isMobile ? "h-28" : "h-36",
  };

  const handleLogoClick = () => {
    if (location.pathname !== '/') {
      // If not on home page, navigate to home
      navigate('/');
    } else {
      // If on home page, scroll to top
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div 
      className={cn("flex items-center cursor-pointer", className)}
      onClick={handleLogoClick}
    >
      <div className="relative">
        {/* Sound waves have been removed */}
        
        <img 
          src="/lovable-uploads/8272919f-a475-4fc1-bc45-434453c53e5f.png" 
          alt="VIVEON Logo" 
          className={cn(
            sizeClasses[size],
            "object-contain max-w-full transition-all duration-300 hover:drop-shadow-[0_0_15px_rgba(255,58,47,0.7)]",
            "hover:animate-[pulse_1.5s_ease-in-out_infinite]"
          )}
        />
        
        {/* Sound waves have been removed */}
      </div>
    </div>
  );
};

export default Logo;
