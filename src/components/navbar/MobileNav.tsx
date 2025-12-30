import React from 'react';
import { NavItem } from './nav-items';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface MobileNavProps {
  navigationItems: NavItem[];
  handleNavClick: (href: string, isExternal: boolean, e: React.MouseEvent) => void;
  isOpen: boolean;
}

const MobileNav: React.FC<MobileNavProps> = ({ 
  navigationItems,
  handleNavClick,
  isOpen 
}) => {
  if (!isOpen) return null;

  return (
    <div className="md:hidden absolute top-full left-0 right-0 bg-background border-t border-border shadow-elevated animate-fade-in">
      <div className="px-6 py-4 space-y-1">
        {navigationItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            onClick={(e) => handleNavClick(item.href, item.isExternal, e)}
            className="block py-3 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-secondary rounded-xl px-4 transition-colors"
          >
            {item.label}
          </a>
        ))}
        
        <div className="pt-4 pb-2">
          <Link to="/products/hux-aura-ring" className="block">
            <Button className="w-full bg-foreground text-background hover:bg-foreground/90 rounded-full py-3 text-base font-medium">
              Get HUX Ring
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
