
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import Logo from './Logo';
import { Menu, X, ShoppingCart, User } from 'lucide-react';
import { Button } from './ui/button';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isMobile = useIsMobile();

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

  // Check if we need to scroll to a section after navigation
  useEffect(() => {
    // If there's a hash in the URL, scroll to that section
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          window.scrollTo({
            top: element.offsetTop - 80,
            behavior: 'smooth'
          });
        }, 100); // Small delay to ensure the DOM is ready
      }
    }
  }, [location]);

  const navigationItems = [
    { label: "Home", href: "/", isExternal: false },
    { label: "Products", href: "/products", isExternal: false },
    { label: "Features", href: "/features", isExternal: false },
    { label: "About", href: "/about", isExternal: false },
    { label: "Contact", href: "/#contact", isExternal: false }
  ];

  const handleNavClick = (href: string, isExternal: boolean, e: React.MouseEvent) => {
    if (isExternal) return; // Let external links work normally
    
    // For contact section or any other hash link
    if (href.includes('#')) {
      e.preventDefault();
      const isHomePage = location.pathname === '/';
      const hashPart = href.includes('/#') ? href.split('/#')[1] : href.split('#')[1];
      
      if (!isHomePage) {
        // If we're not on the home page, navigate programmatically
        navigate('/', { state: { scrollToSection: hashPart } });
      } else {
        // We're already on home page, just scroll
        const element = document.getElementById(hashPart);
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      }
      
      setIsMobileMenuOpen(false);
    } else {
      // Regular route navigation - need to scroll to top
      if (location.pathname === href) {
        // If already on the same page, just scroll to top
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      } else {
        // Navigate to the new page and scroll to top when it loads
        navigate(href, { state: { scrollToTop: true } });
      }
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-viveon-dark/90 backdrop-blur-md py-2" : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
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

        {/* Desktop Menu */}
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
            {navigationItems.map((item) => (
              <li key={item.label} className="py-2 border-b border-gray-800">
                {item.href.includes('#') ? (
                  <a 
                    href={item.href}
                    className="text-white hover:text-viveon-red transition-colors duration-300 block font-medium"
                    onClick={(e) => handleNavClick(item.href, item.isExternal, e)}
                  >
                    {item.label}
                  </a>
                ) : (
                  <a 
                    href={item.href}
                    className="text-white hover:text-viveon-red transition-colors duration-300 block font-medium"
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
