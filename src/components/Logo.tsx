
import React from 'react';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div className={cn("flex items-center", className)}>
      <div className="relative">
        {/* Sound waves left */}
        <div className="absolute -left-6 top-1/2 -translate-y-1/2 flex space-x-0.5">
          <div className="w-0.5 h-3 bg-viveon-neon-purple animate-pulse" style={{ animationDelay: '0s' }}></div>
          <div className="w-0.5 h-5 bg-viveon-neon-blue animate-pulse" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-0.5 h-4 bg-viveon-neon-purple animate-pulse" style={{ animationDelay: '0.1s' }}></div>
        </div>
        
        <span className="text-viveon-red font-bold text-3xl tracking-wider">HUX™</span>
        
        {/* Sound waves right */}
        <div className="absolute -right-6 top-1/2 -translate-y-1/2 flex space-x-0.5">
          <div className="w-0.5 h-4 bg-viveon-neon-purple animate-pulse" style={{ animationDelay: '0.3s' }}></div>
          <div className="w-0.5 h-6 bg-viveon-neon-blue animate-pulse" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-0.5 h-3 bg-viveon-neon-purple animate-pulse" style={{ animationDelay: '0.1s' }}></div>
        </div>
      </div>
      <span className="text-white text-xs ml-1 mt-1">by VIVEON</span>
    </div>
  );
};

export default Logo;
