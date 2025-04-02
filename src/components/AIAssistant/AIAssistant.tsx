
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
  hideOnMobile?: boolean;
}

const AIAssistant: React.FC<AIAssistantProps> = ({ className, hideOnMobile = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  // Handle animation sequence
  const handleOpenAssistant = () => {
    setIsAnimating(true);
    setIsOpen(true);
  };

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

  // Determine if we should show the floating assistant
  const showFloatingAssistant = (() => {
    if (className?.includes('assistant-inline')) {
      return false;
    }
    if (hideOnMobile && isMobile) {
      return false;
    }
    return true;
  })();

  // Position adjustments based on device and layout mode
  const positionClasses = className?.includes('assistant-inline')
    ? "" // No positioning classes for inline mode
    : isMobile 
      ? "bottom-4 right-4" 
      : "bottom-8 right-8";

  // Don't render anything if configured to hide on mobile and we're on mobile
  if (hideOnMobile && isMobile && !className?.includes('assistant-inline')) {
    return null;
  }

  return (
    <div 
      ref={containerRef}
      className={cn(
        "perspective-1000",
        showFloatingAssistant ? "fixed z-50" : "relative z-20",
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
              onClick={handleOpenAssistant}
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
              {/* Earbud case icon with transparent background */}
              <div 
                className={cn(
                  "w-12 h-12 md:w-16 md:h-16 rounded-xl flex items-center justify-center relative",
                  "transition-all duration-300",
                  isHovered ? "shadow-viveon-red/30" : ""
                )}
              >
                <img 
                  src="/lovable-uploads/cdd308e7-4882-4bb2-9fd5-b1d504d99ba8.png"
                  alt="AI Assistant" 
                  className={cn(
                    "w-full h-full object-contain",
                    isHovered ? "scale-105" : "scale-100",
                    "transition-transform duration-300"
                  )}
                />
                
                {/* Glow effect on hover */}
                {isHovered && (
                  <div className="absolute inset-0 bg-viveon-red/10 animate-pulse rounded-xl"></div>
                )}
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
                <AIAssistantDock isAnimating={isAnimating} setIsAnimating={setIsAnimating} />
                <AIAssistantEarbuds isAnimating={isAnimating} />
              </div>
              
              <AIAssistantPanel isAnimating={isAnimating} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AIAssistant;
