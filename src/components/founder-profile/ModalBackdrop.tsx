
import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

interface ModalBackdropProps {
  onClose: () => void;
  children: React.ReactNode;
}

const ModalBackdrop: React.FC<ModalBackdropProps> = ({ 
  onClose, 
  children 
}) => {
  const isMobile = useIsMobile();
  
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      key="modal-backdrop"
    >
      {/* Blurred backdrop */}
      <motion.div 
        className="absolute inset-0 bg-black/70 backdrop-blur-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      />
      
      {/* Mobile-specific close button */}
      {isMobile && (
        <motion.button
          className="fixed top-4 right-4 z-[60] w-10 h-10 flex items-center justify-center rounded-full bg-viveon-red/90 border border-white/20 text-white shadow-lg"
          onClick={onClose}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <X size={24} />
        </motion.button>
      )}
      
      {/* Desktop particles */}
      {!isMobile && Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-white"
          style={{ 
            left: `${Math.random() * 100}%`, 
            top: `${Math.random() * 100}%`,
            opacity: 0.2 + Math.random() * 0.3
          }}
          animate={{
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.5, 1],
            x: [0, Math.random() * 40 - 20, 0],
            y: [0, Math.random() * 40 - 20, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      
      {children}
    </motion.div>
  );
};

export default ModalBackdrop;
