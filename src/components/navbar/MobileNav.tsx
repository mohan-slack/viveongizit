
import React from 'react';
import { NavItem } from './nav-items';
import { GradientButton } from '@/components/ui/gradient-button';

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
    <div className="md:hidden bg-viveon-dark/95 backdrop-blur-lg animate-fadeIn">
      <ul className="py-4 px-4 flex flex-col">
        {navigationItems.map((item) => (
          <li key={item.label} className="py-2 border-b border-gray-800">
            <a 
              href={item.href}
              className="text-white hover:text-viveon-red transition-colors duration-300 block font-medium"
              onClick={(e) => handleNavClick(item.href, item.isExternal, e)}
            >
              {item.label}
            </a>
          </li>
        ))}
        <li className="py-4 flex justify-center">
          <GradientButton className="w-full font-medium">
            SHOP NOW
          </GradientButton>
        </li>
      </ul>
    </div>
  );
};

export default MobileNav;
