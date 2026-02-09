import { TopNav } from '@/sections/TopNav';

import { Footer } from '@/sections/Footer';
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
    <div
      style={{ backgroundImage: `url(${image})` }}
      className="min-h-screen bg-cover bg-fixed bg-center flex-grow"
    >
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
