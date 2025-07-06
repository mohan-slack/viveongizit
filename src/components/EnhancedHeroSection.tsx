
import React, { useEffect, useRef } from 'react';

const EnhancedHeroSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      // Set playback rate to make video slower
      videoRef.current.playbackRate = 0.7;
    }
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
          className="w-full h-full object-cover"
          style={{ filter: 'brightness(0.8) contrast(1.1)' }}
        >
          <source src="/b3212ce873334143963cad34fdbd9dc5.mp4" type="video/mp4" />
        </video>
        
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30" />
      </div>
      
      {/* Content overlay */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="text-center px-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
            INTRODUCING THE FUTURE OF TECH
          </h1>
          <div className="text-6xl md:text-8xl lg:text-9xl font-bold bg-gradient-to-r from-viveon-neon-purple to-viveon-red bg-clip-text text-transparent mb-2">
            HUX™
          </div>
          <p className="text-lg md:text-xl text-gray-300 font-light">
            by Viveon Gizit Pvt. Ltd.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EnhancedHeroSection;
