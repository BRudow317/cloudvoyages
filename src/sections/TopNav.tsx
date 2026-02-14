import { Menu } from 'lucide-react';//Cloud,
import { Button } from '@/components/ui/button';
import { Brand, BrandText } from '@/components/ui/Brand';
import { useState } from 'react';
import { Link } from 'react-router';

export function TopNav({
  onGetStarted,
}: {
  onGetStarted?: () => void;
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//<Cloud className="w-8 h-8 text-blue-600" />
  return (
    <header className="fixed top-0 left-0 right-0 bg-background/50 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <Brand />
            <BrandText className="text-2xl">Cloud Voyages</BrandText>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link to="/resume" className="text-normal hover:text-primary transition-colors">
              Benefits
            </Link>
            <Link to="/resume#expertise" className="text-normal hover:text-primary transition-colors">
              Why Experts
            </Link>
            <Link to="/#small-business" className="text-normal hover:text-primary transition-colors">
              Small Business
            </Link>
            <Link to="/#contact" className="text-normal hover:text-primary transition-colors">
              Contact
            </Link>
            <Button
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={onGetStarted}
            >
              Get Started
            </Button>
          </nav>

          <button
            className="md:hidden text-primary-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              <Link to="/resume" className="text-normal hover:text-primary transition-colors">
                Benefits
              </Link>
              <Link to="/resume#expertise" className="text-normal hover:text-primary transition-colors">
                Why Experts
              </Link>
              <Link to="/#small-business" className="text-normal hover:text-primary transition-colors">
                Small Business
              </Link>
              <Link to="/#contact" className="text-normal hover:text-primary transition-colors">
                Contact
              </Link>
              <Button
                className="bg-primary hover:bg-primary/90 text-primary-foreground w-full"
                onClick={onGetStarted}
              >
                Get Started
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
