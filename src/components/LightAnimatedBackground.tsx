
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const LightAnimatedBackground: React.FC = () => {
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!backgroundRef.current) return;
      
      const { clientX, clientY } = e;
      const moveX = clientX - window.innerWidth / 2;
      const moveY = clientY - window.innerHeight / 2;
      
      backgroundRef.current.style.transform = `translate(${moveX * 0.01}px, ${moveY * 0.01}px)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden z-[-1]">
      {/* Light gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"></div>
      
      {/* Particles */}
      <div ref={backgroundRef} className="absolute inset-0">
        {/* Floating earbuds */}
        {[...Array(5)].map((_, i) => {
          const size = Math.random() * 30 + 30;
          const posX = Math.random() * 100;
          const posY = Math.random() * 100;
          const duration = Math.random() * 20 + 20;
          const delay = Math.random() * 10;
          
          return (
            <motion.div
              key={`earbud-${i}`}
              className="absolute rounded-full bg-gradient-to-br from-blue-100 to-blue-200 shadow-lg opacity-30"
              style={{
                width: `${size}px`,
                height: `${size * 1.5}px`,
                top: `${posY}%`,
                left: `${posX}%`,
              }}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: duration,
                delay: delay,
                ease: "easeInOut",
              }}
            >
              {/* Earbud stem */}
              <div className="absolute top-[60%] left-1/2 transform -translate-x-1/2 w-[2px] h-[40%] bg-white rounded-full"></div>
            </motion.div>
          );
        })}
        
        {/* Floating rings */}
        {[...Array(8)].map((_, i) => {
          const size = Math.random() * 40 + 20;
          const thickness = size * 0.2;
          const posX = Math.random() * 100;
          const posY = Math.random() * 100;
          const duration = Math.random() * 25 + 15;
          const delay = Math.random() * 10;
          
          return (
            <motion.div
              key={`ring-${i}`}
              className="absolute rounded-full bg-transparent border-2 border-viveon-neon-purple/10 opacity-40"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                borderWidth: `${thickness}px`,
                top: `${posY}%`,
                left: `${posX}%`,
              }}
              animate={{
                y: [0, -15, 0],
                scale: [1, 1.05, 1],
                rotate: [0, 180],
              }}
              transition={{
                repeat: Infinity,
                duration: duration,
                delay: delay,
                ease: "easeInOut",
              }}
            ></motion.div>
          );
        })}
      </div>
      
      {/* Abstract shapes */}
      <div className="absolute inset-0">
        {/* Gradient circles */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-viveon-neon-blue/5 to-viveon-neon-purple/5 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-gradient-to-r from-viveon-neon-purple/5 to-viveon-red/5 blur-3xl"></div>
        <div className="absolute top-1/2 right-1/3 w-72 h-72 rounded-full bg-gradient-to-r from-viveon-red/5 to-viveon-neon-blue/5 blur-3xl"></div>
      </div>
      
      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{ 
        backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(0, 100, 255, 0.2) 25%, rgba(0, 100, 255, 0.2) 26%, transparent 27%, transparent 74%, rgba(0, 100, 255, 0.2) 75%, rgba(0, 100, 255, 0.2) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(0, 100, 255, 0.2) 25%, rgba(0, 100, 255, 0.2) 26%, transparent 27%, transparent 74%, rgba(0, 100, 255, 0.2) 75%, rgba(0, 100, 255, 0.2) 76%, transparent 77%, transparent)',
        backgroundSize: '50px 50px'
      }}></div>
      
      {/* Light rays */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[150%] h-[100%] bg-gradient-to-b from-white/30 via-transparent to-transparent opacity-30 blur-3xl"></div>
      
      {/* Sound waves - subtle concentric circles */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        {[...Array(4)].map((_, i) => {
          const size = (i + 1) * 100;
          const duration = 4 + i * 0.5;
          
          return (
            <motion.div
              key={`wave-${i}`}
              className="absolute rounded-full border border-viveon-neon-blue/5"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                top: `50%`,
                left: `50%`,
                transform: 'translate(-50%, -50%)',
              }}
              animate={{
                scale: [1, 1.5],
                opacity: [0.2, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: duration,
                delay: i * 0.5,
                ease: "easeOut",
              }}
            ></motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default LightAnimatedBackground;
