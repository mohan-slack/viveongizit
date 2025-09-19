import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';
interface AIAssistantProps {
  className?: string;
  hideOnMobile?: boolean;
}
const AIAssistant: React.FC<AIAssistantProps> = ({
  className,
  hideOnMobile = false
}) => {
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
  const positionClasses = className?.includes('assistant-inline') ? "" // No positioning classes for inline mode
  : isMobile ? "bottom-4 right-4" : "bottom-8 right-8";

  // Don't render anything if configured to hide on mobile and we're on mobile
  if (hideOnMobile && isMobile && !className?.includes('assistant-inline')) {
    return null;
  }
  return <div ref={containerRef} className={cn("perspective-1000", showFloatingAssistant ? "fixed z-50" : "relative z-20", positionClasses, className)}>
      <AnimatePresence>
        {!isOpen ? <motion.div initial={{
        scale: 0.8,
        opacity: 0
      }} animate={{
        scale: 1,
        opacity: 1
      }} exit={{
        scale: 0.8,
        opacity: 0
      }} transition={{
        duration: 0.3,
        type: "spring"
      }} className="relative">
            <motion.div className="cursor-pointer" onClick={() => setIsOpen(true)} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} animate={{
          y: [0, -8, 0]
        }} transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}>
              {/* Robot head inspired by the image */}
              <div className={cn("w-12 h-12 md:w-16 md:h-16 bg-gradient-to-b from-gray-200 to-gray-300 rounded-lg flex items-center justify-center relative", "border-2 shadow-lg", isHovered ? "border-viveon-red" : "border-gray-300")}>
                {/* Robot face plate */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-b from-gray-200 to-gray-300 overflow-hidden">
                  {/* Metallic texture */}
                  <div className="absolute inset-0 opacity-30 bg-noise"></div>
                  
                  {/* Highlight reflections */}
                  <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-white/20 rounded-full blur-md"></div>
                  
                </div>
                
                {/* Robot eyes */}
                <div className="relative z-10 flex space-x-2 md:space-x-3">
                  <motion.div className={cn("w-2 h-2 md:w-3 md:h-3 rounded-full bg-viveon-neon-blue shadow-[0_0_10px_rgba(0,255,255,0.7)]", isHovered ? "animate-pulse" : "")} animate={isHovered ? {
                scale: [1, 1.2, 1],
                opacity: [0.8, 1, 0.8]
              } : {}} transition={{
                duration: 1.5,
                repeat: Infinity
              }}></motion.div>
                  
                </div>
                
                {/* Robot ears/antennas */}
                <div className="absolute -left-1 -top-1 md:-left-2 md:-top-2 w-2 h-4 md:w-4 md:h-6 bg-gradient-to-b from-gray-300 to-gray-400 rounded-full transform -rotate-12"></div>
                <div className="absolute -right-1 -top-1 md:-right-2 md:-top-2 w-2 h-4 md:w-4 md:h-6 bg-gradient-to-b from-gray-300 to-gray-400 rounded-full transform rotate-12"></div>
                
                {/* Mouth/speaker */}
                <div className="absolute bottom-2 md:bottom-3 left-0 right-0 flex justify-center">
                  <div className="w-5 md:w-8 h-0.5 md:h-1 bg-gray-600/50 rounded-full"></div>
                </div>
              </div>
            </motion.div>
          </motion.div> : <motion.div initial={{
        scale: 0.9,
        opacity: 0
      }} animate={{
        scale: 1,
        opacity: 1
      }} exit={{
        scale: 0.9,
        opacity: 0
      }} transition={{
        duration: 0.4
      }} className="flex flex-col items-center">
            <div className="relative">
              <Button className="absolute -top-2 -right-2 rounded-full p-0 w-6 h-6 bg-viveon-red hover:bg-viveon-red/80 z-20" onClick={() => setIsOpen(false)}>
                <X className="w-3 h-3" />
              </Button>
              
              <div className="w-72 bg-black/80 backdrop-blur-md rounded-xl p-4 border border-gray-800/50 shadow-lg">
                <div className="text-center">
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    HUX <span className="text-viveon-red">Smart Rings</span>
                  </h3>
                  <p className="text-sm text-gray-400 mt-2">
                    Experience the future of wearable technology with our intelligent smart rings featuring health monitoring, contactless payments, and seamless connectivity.
                  </p>
                  <Button className="bg-viveon-red hover:bg-viveon-red/80 text-white py-3 px-6 rounded-full mt-4" onClick={() => setIsOpen(false)}>
                    Explore Features
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>}
      </AnimatePresence>
    </div>;
};
export default AIAssistant;