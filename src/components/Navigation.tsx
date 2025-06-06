
import { Menu, X } from "lucide-react";
import { useState } from "react";

interface NavigationProps {
  activeSection: 'home' | 'share' | 'stories';
  setActiveSection: (section: 'home' | 'share' | 'stories') => void;
}

export const Navigation = ({ activeSection, setActiveSection }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home' as const, label: 'Home' },
    { id: 'share' as const, label: 'Share Your Story' },
    { id: 'stories' as const, label: 'Stories' }
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-blue-900">
              Sauti Zetu
            </h1>
            <span className="ml-2 text-sm text-orange-600 font-medium">Our Voices</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? 'bg-blue-900 text-white'
                      : 'text-gray-700 hover:bg-blue-100 hover:text-blue-900'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-900"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveSection(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors ${
                    activeSection === item.id
                      ? 'bg-blue-900 text-white'
                      : 'text-gray-700 hover:bg-blue-100 hover:text-blue-900'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
