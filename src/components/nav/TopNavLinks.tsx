import { Link } from 'react-router';

type NavItem = {
  label: string;
  to: string;
};

const navItems: NavItem[] = [
  { label: 'Home', to: '/' },
  { label: 'Why Experts', to: '/why-experts' },
  { label: 'Small Business', to: '/small-business' },
  { label: 'Contact', to: '/contact' },
];

type TopNavLinksProps = {
  orientation?: 'horizontal' | 'vertical';
  onNavigate?: () => void;
  className?: string;
};

export function TopNavLinks({
  orientation = 'horizontal',
  onNavigate,
  className = '',
}: TopNavLinksProps) {
  const layoutClassName =
    orientation === 'horizontal'
      ? 'flex items-center gap-8'
      : 'flex flex-col gap-4';

  return (
    <nav className={`${layoutClassName} ${className}`.trim()}>
      {navItems.map((item) => (
        <Link
          key={item.to}
          to={item.to}
          className="text-normal hover:text-primary transition-colors"
          onClick={onNavigate}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
