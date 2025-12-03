import React from 'react';
import { cn } from '@/lib/utils';
import Logo from './Logo';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';
import { useNavbar } from '@/hooks/use-navbar';
import { navigationItems } from './navbar/nav-items';
import DesktopNav from './navbar/DesktopNav';
import MobileNav from './navbar/MobileNav';
import DesktopActions from './navbar/DesktopActions';

const Navbar: React.FC = () => {
  const { 
    isScrolled, 
    isMobileMenuOpen, 
    setIsMobileMenuOpen, 
    handleNavClick 
  } = useNavbar();
  const isMobile = useIsMobile();

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-[1000] transition-all duration-300",
        isScrolled 
          ? "bg-white/95 backdrop-blur-md py-2 shadow-md border-b border-slate-200/50" 
          : "bg-white/80 backdrop-blur-sm py-3"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center"
        style={{
          background: 'transparent'
        }}
      >
        <Link to="/" onClick={() => {
          setIsMobileMenuOpen(false);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }} className="flex items-center">
          <Logo 
            size={isScrolled ? "small" : "medium"} 
            showSoundWaves={false} 
            className={isMobile ? "ml-0 -my-2" : ""}
          />
        </Link>

        <DesktopNav 
          navigationItems={navigationItems}
          handleNavClick={handleNavClick}
        />

        <DesktopActions />

        <button
          className="md:hidden text-slate-700 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <MobileNav
        navigationItems={navigationItems}
        handleNavClick={handleNavClick}
        isOpen={isMobileMenuOpen}
      />
    </nav>
  );
};

export default Navbar;
