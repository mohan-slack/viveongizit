import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const DesktopActions: React.FC = () => {
  return (
    <div className="hidden md:flex items-center">
      <Link to="/products/hux-aura-ring">
        <Button 
          className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-6 py-2 text-sm font-medium shadow-sm transition-all duration-200 hover:shadow-md"
        >
          Get HUX Ring
        </Button>
      </Link>
    </div>
  );
};

export default DesktopActions;
