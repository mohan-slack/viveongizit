import React from 'react';
import { Button } from '@/components/ui/button';
import { ShoppingCart, User } from 'lucide-react';

const DesktopActions: React.FC = () => {
  return (
    <div className="hidden md:flex items-center space-x-3">
      <Button variant="ghost" size="icon" className="text-slate-600 hover:text-slate-900 hover:bg-slate-100">
        <User size={20} />
      </Button>
      <Button variant="ghost" size="icon" className="text-slate-600 hover:text-slate-900 hover:bg-slate-100">
        <ShoppingCart size={20} />
      </Button>
      <Button className="bg-pink-500 hover:bg-pink-600 text-white font-medium px-6 rounded-full">
        SHOP NOW
      </Button>
    </div>
  );
};

export default DesktopActions;
