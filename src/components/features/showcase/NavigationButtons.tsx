
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface NavigationButtonsProps {
  onPrevPage: () => void;
  onNextPage: () => void;
}

const NavigationButtons: React.FC<NavigationButtonsProps> = ({
  onPrevPage,
  onNextPage,
}) => {
  return (
    <div className="flex gap-2">
      <Button 
        onClick={onPrevPage}
        variant="ghost" 
        size="icon"
        className="rounded-full bg-black/30 backdrop-blur-md hover:bg-black/50 border border-white/10"
      >
        <ChevronLeft className="w-5 h-5 text-white" />
      </Button>
      <Button 
        onClick={onNextPage}
        variant="ghost" 
        size="icon"
        className="rounded-full bg-black/30 backdrop-blur-md hover:bg-black/50 border border-white/10"
      >
        <ChevronRight className="w-5 h-5 text-white" />
      </Button>
    </div>
  );
};

export default NavigationButtons;
