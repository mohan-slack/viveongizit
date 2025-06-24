
import React from 'react';

const HeroBackground: React.FC = () => {
  return (
    <>
      {/* Primary Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-viveon-darker via-black to-viveon-dark z-0" />
      
      {/* Animated Floating Orbs - Futuristic Bokeh Effect */}
      <div className="absolute inset-0 z-1">
        {/* Large Central Orb */}
        <div 
          className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-viveon-red/20 rounded-full filter blur-3xl opacity-40 animate-float"
          style={{ animationDelay: '0s', animationDuration: '8s' }}
        />
        
        {/* Secondary Orbs */}
        <div 
          className="absolute top-1/3 right-1/4 w-64 h-64 bg-viveon-neon-blue/15 rounded-full filter blur-2xl opacity-50 animate-float"
          style={{ animationDelay: '2s', animationDuration: '10s' }}
        />
        
        <div 
          className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-viveon-neon-purple/15 rounded-full filter blur-3xl opacity-35 animate-float"
          style={{ animationDelay: '4s', animationDuration: '12s' }}
        />
        
        {/* Small Accent Orbs */}
        <div 
          className="absolute top-1/2 right-1/3 w-32 h-32 bg-viveon-red/25 rounded-full filter blur-xl opacity-60 animate-float"
          style={{ animationDelay: '1s', animationDuration: '6s' }}
        />
        
        <div 
          className="absolute bottom-1/4 right-1/2 w-48 h-48 bg-viveon-neon-blue/20 rounded-full filter blur-2xl opacity-45 animate-float"
          style={{ animationDelay: '3s', animationDuration: '9s' }}
        />
      </div>
      
      {/* Subtle Grid Pattern for Tech Feel */}
      <div 
        className="absolute inset-0 opacity-5 z-1"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />
      
      {/* Radial Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/20 to-black/40 z-2" />
    </>
  );
};

export default HeroBackground;
