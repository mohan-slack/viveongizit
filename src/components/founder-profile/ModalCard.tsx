
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

interface ModalCardProps {
  onClose: () => void;
  modalRef: React.RefObject<HTMLDivElement>;
  children: React.ReactNode;
}

const ModalCard: React.FC<ModalCardProps> = ({ 
  onClose, 
  modalRef,
  children 
}) => {
  const isMobile = useIsMobile();
  
  return (
    <motion.div
      ref={modalRef}
      className={`relative max-h-[80vh] ${isMobile ? 'w-[90%] max-w-sm' : 'w-full max-w-md'} bg-card/80 backdrop-blur-sm border border-border/50 rounded-xl p-4 shadow-lg overflow-hidden overflow-y-auto`}
      initial={{ scale: 0.9, y: 50, opacity: 0 }}
      animate={{ scale: 1, y: 0, opacity: 1 }}
      exit={{ scale: 0.9, y: 50, opacity: 0 }}
      transition={{
        type: "spring",
        damping: 25,
        stiffness: 200,
      }}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 bg-muted/10 rounded-xl" />
      
      {/* Close button */}
      <motion.button
        className="absolute top-2 right-2 z-10 w-6 h-6 flex items-center justify-center rounded-full bg-muted/60 text-muted-foreground hover:text-foreground"
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <X size={14} />
      </motion.button>

      {/* Content container */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

export default ModalCard;
