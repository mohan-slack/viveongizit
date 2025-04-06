
import React from 'react';
import { NavItem } from './nav-items';

interface DesktopNavProps {
  navigationItems: NavItem[];
  handleNavClick: (href: string, isExternal: boolean, e: React.MouseEvent) => void;
}

const DesktopNav: React.FC<DesktopNavProps> = ({ 
  navigationItems,
  handleNavClick 
}) => {
  return (
    <ul className="hidden md:flex space-x-8">
      {navigationItems.map((item) => (
        <li key={item.label}>
          {item.href.includes('#') ? (
            <a 
              href={item.href}
              className="text-white hover:text-viveon-red transition-colors duration-300 text-sm tracking-wider font-medium relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-viveon-red after:left-0 after:bottom-[-4px] after:transition-all after:duration-300 hover:after:w-full"
              onClick={(e) => handleNavClick(item.href, item.isExternal, e)}
            >
              {item.label}
            </a>
          ) : (
            <a 
              href={item.href}
              className="text-white hover:text-viveon-red transition-colors duration-300 text-sm tracking-wider font-medium relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-viveon-red after:left-0 after:bottom-[-4px] after:transition-all after:duration-300 hover:after:w-full"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href, item.isExternal, e);
              }}
            >
              {item.label}
            </a>
          )}
        </li>
      ))}
    </ul>
  );
};

export default DesktopNav;
