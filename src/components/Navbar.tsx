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
          ? "bg-white shadow-sm py-3" 
          : "bg-transparent py-4"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex justify-between items-center">
        <Link to="/" onClick={() => {
          setIsMobileMenuOpen(false);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }} className="flex items-center">
          <Logo 
            size={isScrolled ? "small" : "medium"} 
            showSoundWaves={false} 
            className={isMobile ? "ml-0" : ""}
          />
        </Link>

        <DesktopNav 
          navigationItems={navigationItems}
          handleNavClick={handleNavClick}
        />

        <DesktopActions />

        <button
          className="md:hidden text-foreground p-2 hover:bg-secondary rounded-full transition-colors"
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
