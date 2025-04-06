
import React, { useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import { FounderProfile } from '@/types/founder';
import { useIsMobile } from '@/hooks/use-mobile';
import { useModalEffects } from '@/hooks/use-modal-effects';
import ModalBackdrop from './founder-profile/ModalBackdrop';
import ModalCard from './founder-profile/ModalCard';
import ProfileHeader from './founder-profile/ProfileHeader';
import ProfileContent from './founder-profile/ProfileContent';

interface FounderProfileModalProps {
  founder: FounderProfile;
  onClose: () => void;
}

const FounderProfileModal: React.FC<FounderProfileModalProps> = ({ 
  founder, 
  onClose 
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  
  // Use the extracted modal effects hook
  useModalEffects({
    containerRef,
    modalRef,
    onClose,
    isMobile
  });

  return (
    <AnimatePresence>
      <ModalBackdrop onClose={onClose}>
        <div ref={containerRef}>
          <ModalCard onClose={onClose} modalRef={modalRef}>
            <ProfileHeader founder={founder} />
            <ProfileContent founder={founder} />
          </ModalCard>
        </div>
      </ModalBackdrop>
    </AnimatePresence>
  );
};

export default FounderProfileModal;
