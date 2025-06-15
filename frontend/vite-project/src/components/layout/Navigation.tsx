import React from 'react';
import { Sprout, Play, BarChart3, ShoppingCart, Menu, X } from 'lucide-react';

interface NavigationProps {
  activeSection: 'home' | 'tutorials' | 'dashboard' | 'shop';
  setActiveSection: (section: 'home' | 'tutorials' | 'dashboard' | 'shop') => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

const navigationItems = [
  { id: 'home', label: 'Home', icon: Sprout },
  { id: 'tutorials', label: 'Tutorials', icon: Play },
  { id: 'dashboard', label: 'My Plants', icon: BarChart3 },
  { id: 'shop', label: 'Shop', icon: ShoppingCart }
];

const Navigation: React.FC<NavigationProps> = ({
  activeSection,
  setActiveSection,
  mobileMenuOpen,
  setMobileMenuOpen
}) => {
  return (
    <nav className="bg-white/90 backdrop-blur-sm shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-2 rounded-lg">
                <Sprout className="h-8 w-8 text-white" />
              </div>
              <span className="ml-3 text-xl font-bold bg-gradient-to-r from-green-600 to-emerald-800 bg-clip-text text-transparent">
                FarmMentor
              </span>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden sm:flex sm:space-x-8">
            {navigationItems.map(item => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id as 'home' | 'tutorials' | 'dashboard' | 'shop')}
                className={`inline-flex items-center px-3 pt-1 border-b-2 text-sm font-medium transition-all duration-200 ${
                  activeSection === item.id
                    ? 'border-green-500 text-green-700 bg-green-50/50'
                    : 'border-transparent text-gray-500 hover:border-green-200 hover:text-green-600 hover:bg-green-50/30'
                }`}
              >
                <item.icon className={`h-5 w-5 mr-2 ${
                  activeSection === item.id ? 'text-green-600' : 'text-gray-400'
                }`} />
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-400 hover:text-green-600 hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors duration-200"
            >
              {mobileMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden absolute w-full bg-white/95 backdrop-blur-sm shadow-lg">
          <div className="pt-2 pb-3 space-y-1">
            {navigationItems.map(item => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveSection(item.id as 'home' | 'tutorials' | 'dashboard' | 'shop');
                  setMobileMenuOpen(false);
                }}
                className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium w-full text-left transition-all duration-200 ${
                  activeSection === item.id
                    ? 'bg-gradient-to-r from-green-50 to-transparent border-green-500 text-green-700'
                    : 'border-transparent text-gray-500 hover:bg-green-50/50 hover:border-green-200 hover:text-green-600'
                }`}
              >
                <div className="flex items-center">
                  <item.icon className={`h-5 w-5 mr-2 ${
                    activeSection === item.id ? 'text-green-600' : 'text-gray-400'
                  }`} />
                  {item.label}
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
