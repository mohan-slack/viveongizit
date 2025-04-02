
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, Volume2 } from 'lucide-react';
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
              <div className={cn(
                "w-16 h-16 md:w-20 md:h-20 bg-black rounded-full flex items-center justify-center relative",
                "border-2 border-viveon-neon-blue shadow-lg",
                isHovered ? "border-viveon-red" : "border-viveon-neon-blue"
              )}>
                <div className="absolute inset-0 rounded-full bg-gradient-to-b from-gray-900/80 to-black"></div>
                <div className="relative z-10 flex flex-col items-center">
                  <div className="flex space-x-3">
                    <div className={cn(
                      "w-2 h-2 rounded-full bg-viveon-neon-blue",
                      isHovered ? "bg-viveon-red animate-pulse" : "bg-viveon-neon-blue"
                    )}></div>
                    <div className={cn(
                      "w-2 h-2 rounded-full bg-viveon-neon-blue",
                      isHovered ? "bg-viveon-red animate-pulse" : "bg-viveon-neon-blue"
                    )}></div>
                  </div>
                  <span className={cn(
                    "text-xs mt-1",
                    isHovered ? "text-viveon-red" : "text-viveon-neon-blue"
                  )}>HUX AI</span>
                </div>
                
                {/* Pulsing ring effect */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1.2, opacity: 0.3 }}
                      exit={{ scale: 1.5, opacity: 0 }}
                      transition={{ duration: 1, repeat: Infinity }}
                      className="absolute inset-0 rounded-full border-2 border-viveon-red"
                    ></motion.div>
                  )}
                </AnimatePresence>
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
