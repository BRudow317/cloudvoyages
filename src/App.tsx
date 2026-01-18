import { Header } from '@/sections/Header';
import { Hero } from '@/sections/Hero';
import { CloudBenefits } from '@/sections/CloudBenefits';
import { WhyExperts } from '@/sections/WhyExperts';
import { SmallBusinessSolution } from '@/sections/SmallBusinessSolution';
import { ContactSection } from '@/sections/ContactSection';
import { Footer } from '@/sections/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <div id="benefits">
          <CloudBenefits />
        </div>
        <div id="expertise">
          <WhyExperts />
        </div>
        <div id="small-business">
          <SmallBusinessSolution />
        </div>
        <div id="contact">
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}
