
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const EnhancedHeroSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [animationStarted, setAnimationStarted] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      const video = videoRef.current;
      // Set playback rate to make video slower
      video.playbackRate = 0.7;
      
      // Force video to play on all devices
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Auto-play was prevented, try again with user interaction
          const playVideo = () => {
            video.play();
            document.removeEventListener('click', playVideo);
            document.removeEventListener('touchstart', playVideo);
          };
          document.addEventListener('click', playVideo);
          document.addEventListener('touchstart', playVideo);
        });
      }
    }
    
    // Start animation after component mounts
    const timer = setTimeout(() => setAnimationStarted(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-viveon-darker">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          controls={false}
          className="w-full h-full object-cover"
          style={{ filter: 'brightness(0.8) contrast(1.1)' }}
        >
          <source src="/hux_video_clean_trimmed_retry.mp4" type="video/mp4" />
        </video>
        
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30" />
      </div>
      
      {/* Content overlay */}
      <div className="relative z-10 flex items-center justify-center min-h-screen pt-32">
        <div className="text-center px-4 max-w-4xl">
          {/* Main heading with smaller font */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-2xl lg:text-3xl font-bold text-white mb-8"
          >
            INTRODUCING THE FUTURE OF TECH
          </motion.h1>
          
          {/* Animated HUX with special effects */}
          <div className="relative mb-4">
            <div className="text-4xl md:text-6xl lg:text-7xl font-bold mb-2 flex items-center justify-center gap-1">
              {/* Letter H - glides from left with water ripple */}
              <motion.div 
                className="relative inline-block"
                initial={{ x: -200, opacity: 0 }}
                animate={animationStarted ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 1.2, delay: 0.5, type: "spring", bounce: 0.3 }}
              >
                <span className="bg-gradient-to-r from-viveon-neon-purple to-viveon-red bg-clip-text text-transparent">H</span>
                {/* Water ripple effect */}
                {animationStarted && (
                  <>
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute inset-0 border-2 border-viveon-neon-blue/40 rounded-full"
                        initial={{ scale: 0, opacity: 0.8 }}
                        animate={{ scale: [0, 2, 4], opacity: [0.8, 0.4, 0] }}
                        transition={{ duration: 1.5, delay: 0.5 + i * 0.2, repeat: 2 }}
                      />
                    ))}
                  </>
                )}
              </motion.div>
              
              {/* Letter U - drops from top with digital beam */}
              <motion.div 
                className="relative inline-block"
                initial={{ y: -300, opacity: 0 }}
                animate={animationStarted ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 1, delay: 1.2, type: "spring", bounce: 0.4 }}
              >
                <span className="bg-gradient-to-r from-viveon-neon-purple to-viveon-red bg-clip-text text-transparent">U</span>
                {/* Digital beam effect */}
                {animationStarted && (
                  <motion.div
                    className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-viveon-neon-blue to-transparent"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 80, opacity: [0, 1, 0] }}
                    transition={{ duration: 1.5, delay: 1.2 }}
                  />
                )}
              </motion.div>
              
              {/* Letter X - flies from right with sparkle */}
              <motion.div 
                className="relative inline-block"
                initial={{ x: 200, opacity: 0, rotate: 180 }}
                animate={animationStarted ? { x: 0, opacity: 1, rotate: 0 } : {}}
                transition={{ duration: 1.1, delay: 1.8, type: "spring", bounce: 0.3 }}
              >
                <span className="bg-gradient-to-r from-viveon-neon-purple to-viveon-red bg-clip-text text-transparent">X</span>
                
                {/* Trademark symbol positioned at top-right of X */}
                <motion.span 
                  initial={{ opacity: 0, scale: 0 }}
                  animate={animationStarted ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 2.5 }}
                  className="absolute -top-2 -right-3 text-viveon-neon-purple text-lg md:text-xl lg:text-2xl"
                >
                  ™
                </motion.span>
                
                {/* Sparkle effects */}
                {animationStarted && (
                  <>
                    {[...Array(8)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-viveon-neon-purple rounded-full"
                        style={{
                          top: `${Math.random() * 100}%`,
                          left: `${Math.random() * 100}%`,
                        }}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ 
                          scale: [0, 1.5, 0], 
                          opacity: [0, 1, 0],
                          x: (Math.random() - 0.5) * 100,
                          y: (Math.random() - 0.5) * 100 
                        }}
                        transition={{ 
                          duration: 2, 
                          delay: 1.8 + i * 0.1,
                          repeat: 1 
                        }}
                      />
                    ))}
                  </>
                )}
              </motion.div>
            </div>
          </div>
          
          {/* Company name with smaller font */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.8 }}
            className="text-xs md:text-sm text-gray-300 font-light"
          >
            Viveon Gizit
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default EnhancedHeroSection;
