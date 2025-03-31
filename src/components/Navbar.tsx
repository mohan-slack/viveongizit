
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import Logo from './Logo';
import { Menu, X, ShoppingCart, User } from 'lucide-react';
import { Button } from './ui/button';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'EARBUDS', href: '#earbuds' },
    { name: 'SMART RINGS', href: '#rings' },
    { name: 'FEATURES', href: '#features' },
    { name: 'ABOUT', href: '#about' },
    { name: 'CONTACT', href: '#contact' }
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-viveon-dark/90 backdrop-blur-md py-2" : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Logo size={isScrolled ? "small" : "medium"} showSoundWaves={!isScrolled} />

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href}
                className="text-white hover:text-viveon-red transition-colors duration-300 text-sm tracking-wider font-medium relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-viveon-red after:left-0 after:bottom-[-4px] after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="text-white hover:text-viveon-red">
            <User size={20} />
          </Button>
          <Button variant="ghost" size="icon" className="text-white hover:text-viveon-red">
            <ShoppingCart size={20} />
          </Button>
          <Button className="bg-viveon-red hover:bg-viveon-red/80 text-white font-medium">
            SHOP NOW
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-viveon-dark/95 backdrop-blur-lg animate-fadeIn">
          <ul className="py-4 px-4 flex flex-col">
            {navLinks.map((link) => (
              <li key={link.name} className="py-2 border-b border-gray-800">
                <a 
                  href={link.href}
                  className="text-white hover:text-viveon-red transition-colors duration-300 block font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li className="py-4 flex justify-center">
              <Button className="bg-viveon-red hover:bg-viveon-red/80 text-white w-full font-medium">
                SHOP NOW
              </Button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
