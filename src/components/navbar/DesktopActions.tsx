
import React from 'react';
import { Button } from '@/components/ui/button';
import { GradientButton } from '@/components/ui/gradient-button';
import { ShoppingCart, User } from 'lucide-react';

const DesktopActions: React.FC = () => {
  return (
    <div className="hidden md:flex items-center space-x-4">
      <Button variant="ghost" size="icon" className="text-white hover:text-viveon-red">
        <User size={20} />
      </Button>
      <Button variant="ghost" size="icon" className="text-white hover:text-viveon-red">
        <ShoppingCart size={20} />
      </Button>
      <GradientButton className="font-medium">
        SHOP NOW
      </GradientButton>
    </div>
  );
};

export default DesktopActions;
