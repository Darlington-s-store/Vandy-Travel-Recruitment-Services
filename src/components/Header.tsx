import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';

interface DropdownItem {
  name: string;
  href: string;
}

interface NavigationItem {
  name: string;
  href: string;
  hasDropdown?: boolean;
  dropdownItems?: DropdownItem[];
}

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  const navigation: NavigationItem[] = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { 
      name: 'Services', 
      href: '/services'
    },
    { name: 'Study Abroad', href: '/study-abroad' },
    { name: 'Country Packages', href: '/country-packages' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
    { name: 'Book Now', href: '/book-appointment' },
    { name: 'Enroll Now', href: '/apply' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary-700 text-white py-2 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="hidden md:flex items-center space-x-4">
              <Globe className="h-4 w-4" />
              <span>24/7 Global Support Available</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <motion.header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-white'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <motion.img
                src="/logo.jpg"
                alt="Vandy Recruitment Agency"
                className="h-12 w-12 rounded-full shadow-md"
                whileHover={{ scale: 1.05, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              />
              <div>
                <h1 className="text-2xl font-bold text-primary-700">Vandy</h1>
                <p className="text-sm text-gray-600">Travel & Recruitment Services</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              <div className="flex-grow" />
              {navigation.map((item) => (
                <div key={item.name} className="relative">
                  {item.hasDropdown ? (
                    <div
                      className="relative"
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
                    >
                      <button
                        className={`text-sm font-medium transition-colors relative group flex items-center space-x-1 ${
                          location.pathname === item.href
                            ? 'text-primary-600'
                            : 'text-gray-600 hover:text-primary-600'
                        }`}
                      >
                        <span>{item.name}</span>
                        <ChevronDown className="h-4 w-4" />
                        <span
                          className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full ${
                            location.pathname === item.href ? 'w-full' : ''
                          }`}
                        />
                      </button>
                      
                      <AnimatePresence>
                        {isServicesOpen && (
                          <motion.div
                            className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100 py-2"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.2 }}
                          >
                            {item.dropdownItems?.map((dropdownItem: DropdownItem) => (
                              <Link
                                key={dropdownItem.name}
                                to={dropdownItem.href}
                                className="block text-sm text-gray-500 hover:text-primary-600"
                                onClick={() => setIsMenuOpen(false)}
                              >
                                {dropdownItem.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className={`text-sm font-medium transition-colors relative group ${
                        location.pathname === item.href
                          ? 'text-primary-600'
                          : 'text-gray-600 hover:text-primary-600'
                      } ${
                        item.name === 'Blog' || item.name === 'Contact' 
                          ? 'bg-primary-50 hover:bg-primary-100' 
                          : item.name === 'Book Now' 
                            ? 'bg-gradient-to-r from-secondary-500 to-accent-500 text-white px-3 py-1 rounded-full hover:shadow-lg' 
                            : item.name === 'Enroll Now' 
                              ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-3 py-1 rounded-full hover:shadow-lg' 
                              : ''
                      }`}
                    >
                      {item.name}
                      {item.name !== 'Book Now' && item.name !== 'Enroll Now' && (
                        <span
                          className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full ${
                            location.pathname === item.href ? 'w-full' : ''
                          }`}
                        />
                      )}
                    </Link>
                  )}
                </div>
              ))}
            </nav>



            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="lg:hidden bg-white border-t"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-4 py-6 space-y-4">
                {navigation.map((item) => (
                  <div key={item.name}>
                    <div onClick={() => setIsMenuOpen(false)}
                      className={`block text-base font-medium transition-colors ${
                        location.pathname === item.href
                          ? 'text-primary-600'
                          : 'text-gray-600 hover:text-primary-600'
                        } ${
                          item.name === 'Book Now' 
                            ? 'bg-gradient-to-r from-secondary-500 to-accent-500 text-white px-3 py-2 rounded-full hover:shadow-lg' 
                            : item.name === 'Enroll Now' 
                              ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-3 py-2 rounded-full hover:shadow-lg' 
                              : ''
                        }`}
                    >
                      <Link to={item.href} className="block">
                        {item.name}
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
};

export default Header;