import { AlertTriangle, CheckCircle2, XCircle } from 'lucide-react';
import Card from '@/components/ui/card/Card.tsx';
import { ImageWithFallback } from '@/components/Fallback/ImageWithFallback';

const riskFactors = [
  {
    risk: 'Downtime During Migration',
    withoutExperts: 'Average 72 hours of critical downtime',
    withExperts: 'Zero-downtime migration guaranteed',
    icon: AlertTriangle,
  },
  {
    risk: 'Security Vulnerabilities',
    withoutExperts: 'Misconfigurations in 80% of DIY migrations',
    withExperts: 'Enterprise-grade security from day one',
    icon: AlertTriangle,
  },
  {
    risk: 'Cost Overruns',
    withoutExperts: 'Budget exceeds by 150% on average',
    withExperts: 'Fixed pricing with cost optimization',
    icon: AlertTriangle,
  },
  {
    risk: 'Performance Issues',
    withoutExperts: 'Slow response times, poor architecture',
    withExperts: 'Optimized performance and scalability',
    icon: AlertTriangle,
  },
];

export function Experts() {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-destructive/10 rounded-full mb-6">
            <AlertTriangle className="w-5 h-5 text-destructive" />
            <span className="text-sm text-destructive">Critical Systems Need Expert Care</span>
          </div>
          <h2 className="text-4xl mb-4 text-foreground">Don't Risk Your Business on DIY Cloud Migration</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your critical systems keep your business running. One mistake during migration can cost you
            customers, revenue, and reputation. Here's why you need experts:
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1709715357520-5e1047a2b691?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjBtZWV0aW5nfGVufDF8fHx8MTc2ODQ5NTM4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Expert team collaboration"
              className="rounded-2xl shadow-2xl w-full object-cover h-[400px]"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-3xl text-foreground">The Real Cost of Going It Alone</h3>
            <div className="space-y-4">
              {riskFactors.map((factor, index) => (
                <Card key={index} className="p-4 border-l-4 border-destructive">
                  <div className="flex items-start gap-4">
                    <factor.icon className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <h4 className="mb-2 text-foreground">{factor.risk}</h4>
                      <div className="flex items-start gap-2 mb-2 text-sm">
                        <XCircle className="w-4 h-4 text-destructive flex-shrink-0 mt-0.5" />
                        <span className="text-destructive">{factor.withoutExperts}</span>
                      </div>
                      <div className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-primary">{factor.withExperts}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-card rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl mb-6 text-center text-foreground">What Our Expert Team Handles for You</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-5xl mb-3">🔍</div>
              <h4 className="mb-2 text-foreground">Assessment & Planning</h4>
              <p className="text-sm text-muted-foreground">
                Comprehensive analysis of your current infrastructure and customized migration roadmap
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-3">🚀</div>
              <h4 className="mb-2 text-foreground">Zero-Downtime Migration</h4>
              <p className="text-sm text-muted-foreground">
                Seamless transition with continuous monitoring ensuring your systems stay online
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-3">🛡️</div>
              <h4 className="mb-2 text-foreground">Ongoing Optimization</h4>
              <p className="text-sm text-muted-foreground">
                24/7 monitoring, security updates, and performance tuning to maximize ROI
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
