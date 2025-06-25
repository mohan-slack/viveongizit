
import React from 'react';

const HeroBackground: React.FC = () => {
  return (
    <>
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-viveon-red/10 rounded-full filter blur-3xl opacity-30 animate-float" style={{
          animationDelay: '0.5s'
        }}></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-viveon-neon-blue/10 rounded-full filter blur-3xl opacity-30 animate-float" style={{
          animationDelay: '1.2s'
        }}></div>
        <div className="absolute top-1/2 right-1/3 w-80 h-80 bg-viveon-neon-purple/10 rounded-full filter blur-3xl opacity-30 animate-float" style={{
          animationDelay: '0.8s'
        }}></div>
      </div>
      
      <div className="absolute inset-0 z-0 opacity-10" style={{
        backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(255, 58, 47, 0.15) 25%, rgba(255, 58, 47, 0.15) 26%, transparent 27%, transparent 74%, rgba(255, 58, 47, 0.15) 75%, rgba(255, 58, 47, 0.15) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(0, 255, 255, 0.15) 25%, rgba(0, 255, 255, 0.15) 26%, transparent 27%, transparent 74%, rgba(0, 255, 255, 0.15) 75%, rgba(0, 255, 255, 0.15) 76%, transparent 77%, transparent)',
        backgroundSize: '50px 50px'
      }}></div>
      
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-viveon-darker to-transparent z-10"></div>
    </>
  );
};

export default HeroBackground;
