import { TopNav } from '@/sections/TopNav';

import { Footer } from '@/sections/Footer';
import { Outlet } from 'react-router';
import image from '@/assets/NightSky.jpg';
import { ImageWithFallback } from '@/components/Fallback/ImageWithFallback';

export function Layout() {
  return (
    <div style={{ backgroundImage: `url(${image})` }} className="min-h-screen bg-cover bg-fixed bg-center flex-grow">
      <TopNav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
