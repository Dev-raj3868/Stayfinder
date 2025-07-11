
import React, { useState } from 'react';
import { Search, User, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';

interface HeaderProps {
  onSearchClick?: () => void;
  onLoginClick?: () => void;
}

const Header = ({ onSearchClick, onLoginClick }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Properties', path: '/properties' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActivePage = (path: string) => location.pathname === path;

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm backdrop-blur-md bg-white/95">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-ocean rounded-lg flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <span className="text-2xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-ocean-600">StayFinder</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 relative group ${
                  isActivePage(item.path)
                    ? 'text-ocean-600 bg-ocean-50'
                    : 'text-gray-700 hover:text-ocean-600 hover:bg-gray-50'
                }`}
              >
                {item.name}
                <span className={`absolute bottom-0 left-1/2 w-0 h-0.5 bg-ocean-500 transition-all duration-300 transform -translate-x-1/2 group-hover:w-full ${
                  isActivePage(item.path) ? 'w-full' : ''
                }`}></span>
              </Link>
            ))}
          </nav>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex items-center max-w-md flex-1 mx-8 lg:mx-4">
            <div 
              className="flex items-center w-full bg-gray-50 rounded-full px-4 py-2 cursor-pointer hover:shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              onClick={onSearchClick}
            >
              <Search className="h-5 w-5 text-gray-400 mr-3 transition-colors duration-300 group-hover:text-ocean-500" />
              <span className="text-gray-500 transition-colors duration-300">Where are you going?</span>
              <div className="ml-auto bg-ocean-500 rounded-full p-2 hover:bg-ocean-600 transition-colors duration-300">
                <Search className="h-4 w-4 text-white" />
              </div>
            </div>
          </div>

          {/* User Menu & Mobile Menu Button */}
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              className="hidden md:flex items-center space-x-2 rounded-full px-4 py-2 hover:shadow-lg hover:bg-gray-50 transition-all duration-300 transform hover:scale-105"
              onClick={onLoginClick}
            >
              <Menu className="h-4 w-4" />
              <User className="h-6 w-6" />
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden relative"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="relative w-6 h-6">
                <Menu 
                  className={`h-5 w-5 absolute transition-all duration-300 ${
                    isMenuOpen ? 'opacity-0 rotate-180' : 'opacity-100'
                  }`} 
                />
                <X 
                  className={`h-5 w-5 absolute transition-all duration-300 ${
                    isMenuOpen ? 'opacity-100' : 'opacity-0 -rotate-180'
                  }`} 
                />
              </div>
            </Button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden mt-4">
          <div 
            className="flex items-center w-full bg-gray-50 rounded-full px-4 py-3 cursor-pointer hover:bg-gray-100 transition-all duration-300"
            onClick={onSearchClick}
          >
            <Search className="h-5 w-5 text-gray-400 mr-3" />
            <span className="text-gray-500">Where are you going?</span>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="mt-4 pb-4 border-t border-gray-100 pt-4 space-y-2">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block px-4 py-3 rounded-lg font-medium transition-all duration-300 transform hover:translate-x-2 hover:bg-gray-50 ${
                  isActivePage(item.path) ? 'text-ocean-600 bg-ocean-50' : 'text-gray-700'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button
              variant="ghost"
              className="w-full justify-start text-left mt-4 hover:bg-gray-50 transition-all duration-300"
              onClick={() => {
                onLoginClick?.();
                setIsMenuOpen(false);
              }}
            >
              <User className="h-4 w-4 mr-2" />
              Login / Sign up
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
