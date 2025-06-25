
import React from 'react';
import { cn } from '@/lib/utils';
import { useNavigate, useLocation } from 'react-router-dom';

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
  
  // Size mappings with increased sizes
  const sizeClasses = {
    small: "h-28", // Increased from h-24
    medium: "h-36", // Increased from h-32
    large: "h-56", // Increased from h-48
    xlarge: "h-144", // Increased from h-128
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
            "object-contain max-w-full"
          )}
        />
        
        {/* Sound waves have been removed */}
      </div>
    </div>
  );
};

export default Logo;
