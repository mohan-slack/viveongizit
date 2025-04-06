
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
      className={`relative max-h-[90vh] ${isMobile ? 'w-[95%] max-w-md' : 'w-11/12 max-w-xl'} bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl p-4 md:p-6 shadow-[0_10px_50px_rgba(0,0,0,0.5)] overflow-hidden overflow-y-auto`}
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
      <div className="absolute inset-0 bg-grid-lines opacity-10" />
      
      {/* Background glow */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-viveon-red via-viveon-neon-purple to-viveon-neon-blue rounded-2xl blur opacity-20" />
      
      {/* Desktop close button */}
      {!isMobile && (
        <motion.button
          className="absolute top-2 right-2 z-10 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-black/60 border border-white/10 text-white/80 hover:text-white"
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
          <X size={isMobile ? 18 : 20} />
        </motion.button>
      )}

      {/* Content container */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

export default ModalCard;
