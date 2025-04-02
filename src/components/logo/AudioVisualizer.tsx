
import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AudioVisualizerProps {
  isActive: boolean;
}

const AudioVisualizer: React.FC<AudioVisualizerProps> = ({ isActive }) => {
  const [audioLevels, setAudioLevels] = useState<number[]>([]);
  const audioAnimationRef = useRef<number | null>(null);

  // Define audio bar colors to match the reference image
  const audioBarColors = [
    "#9C56DB", // Purple
    "#854ED6", // Purple
    "#6F45D1", // Purple
    "#5F3EB0", // Purple
    "#4768D9", // Blue
    "#3E7BE0", // Blue
    "#3493E5", // Light Blue
    "#2BA9EA", // Light Blue
    "#22BFEF", // Cyan
    "#B33A8B", // Pink
  ];

  // Generate random audio levels for visualization
  const generateAudioLevels = () => {
    const levels = Array.from({ length: 20 }, () => Math.random() * 0.7 + 0.3);
    setAudioLevels(levels);
    
    if (isActive) {
      audioAnimationRef.current = requestAnimationFrame(generateAudioLevels);
    } else if (audioAnimationRef.current) {
      cancelAnimationFrame(audioAnimationRef.current);
    }
  };

  // Start and stop audio animation
  useEffect(() => {
    if (isActive) {
      generateAudioLevels();
    }
    
    return () => {
      if (audioAnimationRef.current) {
        cancelAnimationFrame(audioAnimationRef.current);
      }
    };
  }, [isActive]);

  if (!isActive) return null;

  return (
    <>
      {/* Fullscreen Audio Visualization - Left Side */}
      <AnimatePresence>
        {isActive && (
          <motion.div
            className="absolute left-0 top-0 h-full w-1/2 flex items-center justify-end space-x-1 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-end h-full w-full justify-end space-x-1">
              {audioLevels.slice(0, 10).map((level, index) => (
                <motion.div
                  key={`left-${index}`}
                  className="w-2 md:w-2.5 rounded-t-md"
                  style={{
                    height: `${level * 100}%`,
                    backgroundColor: audioBarColors[index % audioBarColors.length],
                    boxShadow: `0 0 8px ${audioBarColors[index % audioBarColors.length]}`,
                  }}
                  animate={{ 
                    height: [`${level * 100}%`, `${(Math.random() * 0.8 + 0.2) * 100}%`],
                    opacity: [0.7, 1]
                  }}
                  transition={{ 
                    duration: 0.3 + (index * 0.03), 
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "mirror"
                  }}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Fullscreen Audio Visualization - Right Side */}
      <AnimatePresence>
        {isActive && (
          <motion.div
            className="absolute right-0 top-0 h-full w-1/2 flex items-center justify-start space-x-1 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-end h-full w-full justify-start space-x-1">
              {audioLevels.slice(10, 20).map((level, index) => (
                <motion.div
                  key={`right-${index}`}
                  className="w-2 md:w-2.5 rounded-t-md"
                  style={{
                    height: `${level * 100}%`,
                    backgroundColor: audioBarColors[(audioBarColors.length - 1 - index) % audioBarColors.length],
                    boxShadow: `0 0 8px ${audioBarColors[(audioBarColors.length - 1 - index) % audioBarColors.length]}`,
                  }}
                  animate={{ 
                    height: [`${level * 100}%`, `${(Math.random() * 0.8 + 0.2) * 100}%`],
                    opacity: [0.7, 1]
                  }}
                  transition={{ 
                    duration: 0.3 + (index * 0.03), 
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "mirror",
                    delay: index * 0.02
                  }}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AudioVisualizer;
