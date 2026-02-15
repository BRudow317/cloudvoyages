/**
 * @PageName WhyExperts
 */
import { ArrowRight, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BrandText } from '@/components/ui/Brand';
import { ImageWithFallback } from '@/components/Fallback/ImageWithFallback';
import { CloudAdvantageData } from '@/components/sections/CloudAdvantageData';
import { Experts } from '@/components/sections/Experts';
import { ContactSection } from '@/components/sections/ContactSection';
import { useConsultationDialog } from '@/context/ConsultationDialogContext';

export const WhyExperts = () => {
  const { openDialog } = useConsultationDialog();

  return (
    <div>
      <section className="relative overflow-hidden bg-background/50 pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full">
                <TrendingUp className="w-5 h-5 text-primary" />
                <span className="text-sm text-primary">Cloud Migration Benefits</span>
              </div>

              <h1 className="text-5xl lg:text-6xl tracking-tight text-foreground">
                Move faster with the <BrandText /> migration advantage
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed">
                Cut infrastructure costs, modernize delivery, and unlock reliability at scale.
                Our cloud migration program is built to protect uptime while delivering measurable ROI.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" onClick={openDialog}>
                  Schedule Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="#benefits">See the data</a>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-400 to-emerald-400 rounded-2xl blur-3xl opacity-20" />
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80"
                alt="Cloud infrastructure visualization"
                className="relative rounded-2xl shadow-2xl w-full object-cover h-[420px]"
              />
            </div>
          </div>
        </div>
      </section>

      <div id="advantage">
        <CloudAdvantageData />
      </div>
      <div id="expertise">
        <Experts />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
    </div>
  );
};

