
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const EnhancedHeroSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [animationStarted, setAnimationStarted] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    // Start animation immediately
    setAnimationStarted(true);
    
    if (videoRef.current && !videoLoaded) {
      const video = videoRef.current;
      
      // Configure video properties
      video.muted = true;
      video.loop = true;
      video.playsInline = true;
      video.controls = false;
      video.preload = 'auto';
      
      const handleVideoReady = async () => {
        try {
          video.playbackRate = 0.7;
          await video.play();
          setVideoLoaded(true);
          setVideoError(false);
        } catch (error) {
          console.log('Video autoplay blocked, waiting for user interaction');
          
          const playOnInteraction = async () => {
            try {
              await video.play();
              setVideoLoaded(true);
              setVideoError(false);
            } catch (err) {
              setVideoError(true);
            }
          };
          
          document.addEventListener('click', playOnInteraction, { once: true });
          document.addEventListener('touchstart', playOnInteraction, { once: true });
        }
      };

      const handleError = () => {
        setVideoError(true);
        setVideoLoaded(false);
      };
      
      video.addEventListener('loadeddata', handleVideoReady);
      video.addEventListener('error', handleError);
      
      return () => {
        video.removeEventListener('loadeddata', handleVideoReady);
        video.removeEventListener('error', handleError);
      };
    }
  }, [videoLoaded]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-viveon-darker">
      {/* Enhanced Video/Image Background */}
      <div className="absolute inset-0 w-full h-full flex items-center justify-center">
        <div className="relative w-full max-w-7xl mx-auto" style={{ aspectRatio: '21/9' }}>
          {!videoError ? (
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              controls={false}
              className="w-full h-full rounded-lg object-cover shadow-2xl"
              style={{ 
                filter: 'brightness(0.85) contrast(1.15) saturate(1.1)',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
              }}
            >
              <source src="/hux_video_clean_trimmed_retry.mp4" type="video/mp4" />
            </video>
          ) : (
            <img 
              src="/lovable-uploads/b4315c7f-658c-4f78-81f2-9438f8bbb6cd.png"
              alt="HUX Smart Ring"
              className="w-full h-full rounded-lg object-cover shadow-2xl"
              style={{ 
                filter: 'brightness(0.85) contrast(1.15) saturate(1.1)',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
              }}
            />
          )}
        </div>
        
        {/* Enhanced gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
      </div>
      
      {/* Enhanced content overlay */}
      <div className="relative z-10 flex items-start justify-center min-h-screen pt-20">
        <div className="text-center px-4 max-w-5xl mt-12">
          {/* Main heading with better positioning */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-3xl lg:text-4xl font-bold text-white mb-12 tracking-wide"
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
          
          {/* Company name closer to HUX with larger font */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.8 }}
            className="text-sm md:text-lg lg:text-xl text-gray-200 font-light mt-2 tracking-wider"
          >
            Viveon Gizit
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default EnhancedHeroSection;
