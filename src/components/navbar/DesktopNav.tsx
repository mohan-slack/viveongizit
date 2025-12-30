import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { NavItem } from './nav-items';
import { cn } from '@/lib/utils';

interface DesktopNavProps {
  navigationItems: NavItem[];
  handleNavClick: (href: string, isExternal: boolean, e: React.MouseEvent) => void;
}

const DesktopNav: React.FC<DesktopNavProps> = ({ 
  navigationItems,
  handleNavClick 
}) => {
  const [activeTab, setActiveTab] = useState(navigationItems[0]?.label || 'Home');

  return (
    <div className="hidden md:flex items-center gap-8">
      {navigationItems.map((item) => {
        const isActive = activeTab === item.label;

        return (
          <a
            key={item.label}
            href={item.href}
            onClick={(e) => {
              setActiveTab(item.label);
              handleNavClick(item.href, item.isExternal, e);
            }}
            className={cn(
              "relative text-sm font-medium transition-colors duration-200",
              isActive 
                ? "text-foreground" 
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {item.label}
          </a>
        );
      })}
    </div>
  );
};

export default DesktopNav;
