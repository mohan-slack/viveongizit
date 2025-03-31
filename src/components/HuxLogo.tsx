
import React from 'react';
import { cn } from '@/lib/utils';

interface HuxLogoProps {
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  color?: 'red' | 'blue' | 'purple' | 'white';
}

const HuxLogo: React.FC<HuxLogoProps> = ({ 
  className, 
  size = 'md',
  color = 'red'
}) => {
  // Size mappings for the main text
  const sizeClasses = {
    xs: "text-xl",
    sm: "text-2xl",
    md: "text-3xl",
    lg: "text-5xl",
    xl: "text-7xl",
  };
  
  // Size mappings for the TM symbol
  const tmSizeClasses = {
    xs: "text-[0.4em] -top-1 -right-1.5",
    sm: "text-[0.4em] -top-1.5 -right-2",
    md: "text-[0.35em] -top-2 -right-2",
    lg: "text-[0.3em] -top-3 -right-3",
    xl: "text-[0.3em] -top-6 -right-4",
  };
  
  // Color mappings
  const colorClasses = {
    red: "text-viveon-red",
    blue: "text-viveon-neon-blue",
    purple: "text-viveon-neon-purple",
    white: "text-white",
  };

  return (
    <span className={cn(
      "font-bold relative inline-block",
      sizeClasses[size],
      colorClasses[color],
      className
    )}>
      HU
      <span className="relative">
        X
        <span className={cn(
          "absolute text-white font-normal", 
          tmSizeClasses[size]
        )}>
          ™
        </span>
      </span>
    </span>
  );
};

export default HuxLogo;
