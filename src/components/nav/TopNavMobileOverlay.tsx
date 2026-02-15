import { useEffect } from 'react';
import { Link } from 'react-router';
import { Button } from '@/components/ui/button';
import { Brand, BrandText } from '@/components/ui/Brand';
import { TopNavLinks } from './TopNavLinks';

type TopNavMobileOverlayProps = {
  open: boolean;
  onClose: () => void;
  onGetStarted?: () => void;
};

export function TopNavMobileOverlay({
  open,
  onClose,
  onGetStarted,
}: TopNavMobileOverlayProps) {
  useEffect(() => {
    if (!open) {
      return;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [open]);

  if (!open) {
    return null;
  }

  return (
    <div
      id="mobile-nav"
      className="min-[760px]:hidden fixed inset-0 z-50"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
    >
      <button
        type="button"
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
        onClick={onClose}
        aria-label="Close navigation"
      />
      <div className="relative mx-4 mt-6 rounded-2xl border border-border bg-background shadow-xl">
        <div className="flex items-center justify-between border-b border-border px-4 py-3">
          <Link to="/" className="flex items-center gap-2" onClick={onClose}>
            <Brand />
            <BrandText className="text-xl">Cloud Voyages</BrandText>
          </Link>
          <button
            type="button"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            onClick={onClose}
          >
            Close
          </button>
        </div>
        <div className="px-4 py-5">
          <TopNavLinks orientation="vertical" onNavigate={onClose} />
          <Button
            className="bg-primary hover:bg-primary/90 text-primary-foreground w-full mt-6"
            onClick={() => {
              onClose();
              onGetStarted?.();
            }}
          >
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
}
