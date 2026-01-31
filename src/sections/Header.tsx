import { Cloud, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Cloud className="w-8 h-8 text-blue-600" />
            <span className="text-2xl">Cloud Voyages</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#benefits" className="text-gray-700 hover:text-blue-600 transition-colors">
              Benefits
            </a>
            <a href="#expertise" className="text-gray-700 hover:text-blue-600 transition-colors">
              Why Experts
            </a>
            <a href="#small-business" className="text-gray-700 hover:text-blue-600 transition-colors">
              Small Business
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">
              Contact
            </a>
            <Button className="bg-blue-600 hover:bg-blue-700">
              Get Started
            </Button>
          </nav>

          <button 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col gap-4">
              <a href="#benefits" className="text-gray-700 hover:text-blue-600 transition-colors">
                Benefits
              </a>
              <a href="#expertise" className="text-gray-700 hover:text-blue-600 transition-colors">
                Why Experts
              </a>
              <a href="#small-business" className="text-gray-700 hover:text-blue-600 transition-colors">
                Small Business
              </a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">
                Contact
              </a>
              <Button className="bg-blue-600 hover:bg-blue-700 w-full">
                Get Started
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
