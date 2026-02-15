import { Brand, BrandText } from '@/components/ui/Brand';
import { Menu } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router';
import { TopNavDesktop } from './TopNavDesktop';
import { TopNavMobileOverlay } from './TopNavMobileOverlay';

export function TopNav({
  onGetStarted,
}: {
  onGetStarted?: () => void;
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const closeMobileMenu = () => setMobileMenuOpen(false);
//<Cloud className="w-8 h-8 text-blue-600" />
  return (
    <header className="fixed top-0 left-0 right-0 bg-background/50 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <Brand />
            <BrandText className="text-2xl">Cloud Voyages</BrandText>
          </Link>

          <TopNavDesktop onGetStarted={onGetStarted} />

          <button
            className="min-[760px]:hidden"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav"
            aria-label="Toggle navigation"
          >
            <Menu className="w-9 h-9 text-foreground" aria-hidden="true" />
          </button>
        </div>
      </div>
      <TopNavMobileOverlay
        open={mobileMenuOpen}
        onClose={closeMobileMenu}
        onGetStarted={onGetStarted}
      />
    </header>
  );
}
