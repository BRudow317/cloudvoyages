import { Cloud, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BrandText } from '@/components/ui/Brand';
// import { ImageWithFallback } from '@/components/Fallback/ImageWithFallback';
// import CloudVoyagesLogo from '@/assets/CloudVoyagesLogo6.png';

export function Hero({
  onGetStarted,
  onScheduleConsultation,
}: {
  onGetStarted?: () => void;
  onScheduleConsultation?: () => void;
}) {
  return (
    <section className="relative overflow-hidden bg-background/50 pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full">
              <Cloud className="w-5 h-5 text-primary" />
              <span className="text-sm text-primary">Trusted Cloud Experts</span>
            </div>

            <h1 className="text-5xl lg:text-6xl tracking-tight text-foreground">
              Navigate Your <BrandText /> with{' '}
              <span className="text-primary">
                Confidence
              </span>
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed">
              Expert cloud consulting that keeps your critical systems running smoothly.
              From migration to optimization to modernization, we ensure zero interruptions while maximizing your cloud ROI.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={onGetStarted}
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border text-foreground"
                onClick={onScheduleConsultation}
              >
                Schedule Consultation
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div>
                <div className="text-3xl text-primary">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime Guarantee</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <div className="text-3xl text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Expert Support</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <div className="text-3xl text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Migrations</div>
              </div>
            </div>
          </div>

          </div>
      </div>
    </section>
  );
}
{/* <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-400 to-purple-400 rounded-2xl blur-3xl opacity-20" />
            <ImageWithFallback
              src={CloudVoyagesLogo}
              alt="CloudVoyages Logo"
              className="relative rounded-2xl shadow-2xl w-full object-contain h-auto"
            />
          </div>
        </div> */}
