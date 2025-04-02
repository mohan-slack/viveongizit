
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AIAssistantDock from './AIAssistantDock';
import AIAssistantEarbuds from './AIAssistantEarbuds';
import AIAssistantPanel from './AIAssistantPanel';
import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';

interface AIAssistantProps {
  className?: string;
}

const AIAssistant: React.FC<AIAssistantProps> = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  // Effect to handle clicks outside the assistant to close it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node) && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Position adjustments based on device
  const positionClasses = isMobile 
    ? "bottom-4 right-4" 
    : "bottom-8 right-8";

  return (
    <div 
      ref={containerRef}
      className={cn(
        "fixed z-50 perspective-1000",
        positionClasses,
        className
      )}
    >
      <AnimatePresence>
        {!isOpen ? (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3, type: "spring" }}
            className="relative"
          >
            <motion.div
              className="cursor-pointer"
              onClick={() => setIsOpen(true)}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {/* Robot head inspired by the image */}
              <div className={cn(
                "w-16 h-16 md:w-20 md:h-20 bg-white rounded-lg flex items-center justify-center relative",
                "border-2 shadow-lg",
                isHovered ? "border-viveon-red" : "border-gray-300"
              )}>
                {/* Robot face */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-b from-gray-100 to-gray-200"></div>
                
                {/* Robot eyes */}
                <div className="relative z-10 flex space-x-4">
                  <div className={cn(
                    "w-3 h-3 rounded-full bg-cyan-400",
                    isHovered ? "animate-pulse" : ""
                  )}></div>
                  <div className={cn(
                    "w-3 h-3 rounded-full bg-cyan-400",
                    isHovered ? "animate-pulse" : ""
                  )}></div>
                </div>
                
                {/* Robot ears/antennas */}
                <div className="absolute -left-2 -top-2 w-4 h-6 bg-white rounded-full transform -rotate-12"></div>
                <div className="absolute -right-2 -top-2 w-4 h-6 bg-white rounded-full transform rotate-12"></div>
              </div>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center"
          >
            <div className="relative mb-4">
              <Button 
                className="absolute -top-2 -right-2 rounded-full p-0 w-6 h-6 bg-viveon-red hover:bg-viveon-red/80 z-20"
                onClick={() => setIsOpen(false)}
              >
                <X className="w-3 h-3" />
              </Button>
              
              <div className="relative mb-4">
                <AIAssistantDock />
                <AIAssistantEarbuds />
              </div>
              
              <AIAssistantPanel />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AIAssistant;
