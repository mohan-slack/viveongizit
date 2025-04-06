
import React, { useEffect, RefObject } from 'react';
import { useIsMobile } from './use-mobile';

interface UseModalEffectsProps {
  containerRef: RefObject<HTMLDivElement>;
  modalRef: RefObject<HTMLDivElement>;
  onClose: () => void;
  isMobile: boolean;
}

export function useModalEffects({ 
  containerRef, 
  modalRef, 
  onClose, 
  isMobile 
}: UseModalEffectsProps) {
  // Effect for parallax movement - only on desktop
  useEffect(() => {
    if (isMobile) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      // Calculate mouse position as percentage of screen
      const x = (clientX / innerWidth) - 0.5;
      const y = (clientY / innerHeight) - 0.5;
      
      // Apply subtle rotation based on mouse position
      containerRef.current.style.transform = `
        perspective(1000px) 
        rotateY(${x * 2}deg) 
        rotateX(${-y * 2}deg)
      `;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [containerRef, isMobile]);
  
  // Enhanced outside click detection with touchstart for mobile
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent | TouchEvent) => {
      // Check if click/touch is outside the modal content
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    
    // Add event listeners for both mouse and touch events
    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('touchstart', handleOutsideClick);
    
    // Clean up event listeners
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('touchstart', handleOutsideClick);
    };
  }, [onClose, modalRef]);
  
  // Handle escape key press
  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    
    window.addEventListener('keydown', handleEscKey);
    
    return () => {
      window.removeEventListener('keydown', handleEscKey);
    };
  }, [onClose]);
}
