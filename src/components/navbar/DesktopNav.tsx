
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
    <div className="hidden md:flex items-center gap-3 bg-white/5 border border-white/20 backdrop-blur-lg py-1 px-1 rounded-full">
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
                "relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors",
                "text-white/80 hover:text-viveon-red",
                isActive && "bg-white/10 text-viveon-red"
              )}
            >
              {item.label}
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-viveon-red/5 rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-viveon-red rounded-t-full">
                    <div className="absolute w-12 h-6 bg-viveon-red/20 rounded-full blur-md -top-2 -left-2" />
                    <div className="absolute w-8 h-6 bg-viveon-red/20 rounded-full blur-md -top-1" />
                    <div className="absolute w-4 h-4 bg-viveon-red/20 rounded-full blur-sm top-0 left-2" />
                  </div>
                </motion.div>
              )}
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default DesktopNav;
