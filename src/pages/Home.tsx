/**
 * @PageName Home
 * 
 */
import { Hero } from '@/sections/Hero';
import { SmallBusinessSolution } from '@/sections/SmallBusinessSolution';
import { ContactSection } from '@/sections/ContactSection';

export const Home = () => {
  return <div>
    <Hero />
        <div id="small-business">
          <SmallBusinessSolution />
        </div>
        <div id="contact">
          <ContactSection />
        </div>
  </div>;
}