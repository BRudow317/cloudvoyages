/**
 * @PageName Home
 *
 */
import { Hero } from '@/sections/Hero';
import { SmallBusinessSolution } from '@/sections/SmallBusinessSolution';
import { ContactSection } from '@/sections/ContactSection';
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
