import { Button } from '@/components/ui/button';
import { TopNavLinks } from './TopNavLinks';

type TopNavDesktopProps = {
  onGetStarted?: () => void;
};

export function TopNavDesktop({ onGetStarted }: TopNavDesktopProps) {
  return (
    <div className="hidden min-[760px]:flex items-center gap-8">
      <TopNavLinks />
      <Button
        className="bg-primary hover:bg-primary/90 text-primary-foreground"
        onClick={onGetStarted}
      >
        Get Started
      </Button>
    </div>
  );
}
