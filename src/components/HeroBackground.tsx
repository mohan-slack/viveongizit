
import React from 'react';

const HeroBackground: React.FC = () => {
  return (
    <>
      {/* Animated floating orbs */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-viveon-red/20 rounded-full filter blur-3xl opacity-40 animate-float" style={{
          animationDelay: '0.5s'
        }}></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-viveon-neon-blue/20 rounded-full filter blur-3xl opacity-40 animate-float" style={{
          animationDelay: '1.2s'
        }}></div>
        <div className="absolute top-1/2 right-1/3 w-80 h-80 bg-viveon-neon-purple/20 rounded-full filter blur-3xl opacity-40 animate-float" style={{
          animationDelay: '0.8s'
        }}></div>
      </div>
      
      {/* Grid pattern overlay for elegant effect */}
      <div className="absolute inset-0 z-0 opacity-15" style={{
        backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(212, 196, 178, 0.3) 25%, rgba(212, 196, 178, 0.3) 26%, transparent 27%, transparent 74%, rgba(212, 196, 178, 0.3) 75%, rgba(212, 196, 178, 0.3) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(200, 178, 153, 0.2) 25%, rgba(200, 178, 153, 0.2) 26%, transparent 27%, transparent 74%, rgba(200, 178, 153, 0.2) 75%, rgba(200, 178, 153, 0.2) 76%, transparent 77%, transparent)',
        backgroundSize: '50px 50px'
      }}></div>
      
      {/* Bottom gradient for smooth transition */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-cream-100 to-transparent z-10"></div>
    </>
  );
};

export default HeroBackground;
