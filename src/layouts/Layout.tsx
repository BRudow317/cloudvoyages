import { TopNav } from '@/components/nav/TopNav';
import { Footer } from '@/components/sections/Footer';
import { Outlet } from 'react-router';
import image from '@/assets/NightSky.jpg';
//import { ImageWithFallback } from '@/components/Fallback/ImageWithFallback';
import {
  ConsultationDialogProvider,
  useConsultationDialog,
} from '@/context/ConsultationDialogContext';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { CvForm } from '@/components/ui/CvForm';

export function Layout() {
  return (
    <ConsultationDialogProvider>
      <LayoutShell />
    </ConsultationDialogProvider>
  );
}

function LayoutShell() {
  const { open, setOpen, openDialog } = useConsultationDialog();

  return (
    <div className="min-h-screen relative overflow-hidden flex-grow">
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <img
          src={image}
          alt=""
          className="absolute left-0 top-0"
          style={{ width: '100vw', height: '100vh', minWidth: '720px', minHeight: '720px', objectFit: 'cover' }}
          aria-hidden="true"
        />
      </div>

      <TopNav onGetStarted={openDialog} />
      <main>
        <Outlet />
      </main>
      <Footer />

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-3xl">
          <DialogHeader>
            <DialogTitle>Schedule a Consultation</DialogTitle>
            <DialogDescription>
              Tell us about your project and we will follow up within 24 hours.
            </DialogDescription>
          </DialogHeader>
          <CvForm />
        </DialogContent>
      </Dialog>
    </div>
  );
}
