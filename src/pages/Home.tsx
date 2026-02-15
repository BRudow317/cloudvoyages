/**
 * @PageName Home
 *
 */
import { Hero } from '@/components/sections/Hero';
import { SmallBusinessSolution } from '@/components/sections/SmallBusinessSolution';
import { ContactSection } from '@/components/sections/ContactSection';
import { useConsultationDialog } from '@/context/ConsultationDialogContext';

export const Home = () => {
  const { openDialog } = useConsultationDialog();

  return (
    <div>
      <Hero onGetStarted={openDialog} onScheduleConsultation={openDialog} />
      <div id="small-business">
        <SmallBusinessSolution onGetStarted={openDialog} />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
    </div>
  );
};
