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
    <div className="hidden md:flex items-center gap-1 bg-slate-100 border border-slate-200 py-1 px-1 rounded-full">
      {navigationItems.map((item) => {
        const isActive = activeTab === item.label;

        return (
          <div key={item.label} className="relative">
            <a
              href={item.href}
              onClick={(e) => {
                setActiveTab(item.label);
                handleNavClick(item.href, item.isExternal, e);
              }}
              className={cn(
                "relative cursor-pointer text-sm font-medium px-5 py-2 rounded-full transition-all duration-200",
                "text-slate-600 hover:text-slate-900",
                isActive && "bg-white text-slate-900 shadow-sm"
              )}
            >
              {item.label}
              {isActive && (
                <motion.div
                  layoutId="nav-indicator"
                  className="absolute -top-0.5 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-pink-500 rounded-full"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 30,
                  }}
                />
              )}
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default DesktopNav;
