import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Globe, Search, User } from 'lucide-react';
import GovernmentLogo from './GovernmentLogo';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Demo', path: '/demo' },
    { name: 'Contact', path: '/contact' }
  ];
  
  const languages = [
    'English', 'हिन्दी', 'বাংলা', 'తెలుగు', 'मराठी', 
    'தமிழ்', 'ગુજરાતી', 'ಕನ್ನಡ', 'മലയാളം', 'ਪੰਜਾਬੀ'
  ];
  
  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      {/* Top bar with government info */}
      <div className="bg-accent-dark text-white py-1 px-4">
        <div className="container mx-auto flex justify-between items-center text-xs">
          <div className="flex items-center space-x-4">
            <span>Government of India</span>
            <span>|</span>
            <span>Ministry of Law & Justice</span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Globe size={14} className="mr-1" />
              <select className="bg-transparent text-white text-xs border-none focus:ring-0">
                {languages.map((lang) => (
                  <option key={lang} value={lang} className="text-accent-dark">
                    {lang}
                  </option>
                ))}
              </select>
            </div>
            <a href="#" className="hover:underline">A- A A+</a>
            <a href="#" className="hover:underline">Screen Reader</a>
          </div>
        </div>
      </div>
      
      {/* Main navigation */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <GovernmentLogo className="h-12 w-auto mr-3" />
              <div>
                <h1 className="text-2xl font-bold text-accent-dark">
                  <span className="text-primary">Vaa</span>
                  <span className="text-secondary">Ni</span>
                </h1>
                <p className="text-xs text-neutral-600">Voice Access to Navigate Institutions</p>
              </div>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'text-primary bg-primary-light/10'
                    : 'text-neutral-700 hover:text-primary hover:bg-neutral-100'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <button className="ml-2 p-2 text-neutral-700 hover:text-primary rounded-full hover:bg-neutral-100">
              <Search size={20} />
            </button>
            <Link 
              to="/login" 
              className="ml-2 flex items-center px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors"
            >
              <User size={18} className="mr-1" />
              <span>Login</span>
            </Link>
          </nav>
          
          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-neutral-700 hover:text-primary hover:bg-neutral-100"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-neutral-200">
          <div className="container mx-auto px-4 py-2">
            <nav className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2 rounded-md text-base font-medium ${
                    location.pathname === link.path
                      ? 'text-primary bg-primary-light/10'
                      : 'text-neutral-700 hover:text-primary hover:bg-neutral-100'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-2 mt-2 border-t border-neutral-200">
                <Link 
                  to="/login" 
                  className="flex items-center px-3 py-2 text-base font-medium text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <User size={18} className="mr-2" />
                  <span>Login / Register</span>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;