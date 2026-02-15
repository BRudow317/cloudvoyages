import { Rocket, Users, TrendingUp, Globe, CheckCircle2 } from 'lucide-react';
import Card from '@/components/ui/card/Card';
import { Button } from '@/components/ui/button';
// import { ImageWithFallback } from '@/components/Fallback/ImageWithFallback';

const features = [
  {
    icon: Globe,
    title: 'Professional Web Presence',
    description: 'Modern, responsive website that builds instant credibility with potential clients',
  },
  {
    icon: Users,
    title: 'Lead Generation Tools',
    description: 'Contact forms, call-to-actions, and analytics to capture and track leads',
  },
  {
    icon: Rocket,
    title: 'Fast Launch',
    description: 'Get your site live in days, not months. Start generating leads immediately',
  },
  {
    icon: TrendingUp,
    title: 'Scalable Foundation',
    description: 'Start small and grow. Cloud infrastructure that scales with your business',
  },
];

const packages = [
  {
    name: 'Starter',
    price: '$499',
    period: '/setup + $49/mo',
    description: 'Perfect for new businesses',
    features: [
      '5-page professional website',
      'Mobile-responsive design',
      'Contact form with email notifications',
      'Basic SEO optimization',
      'Cloud hosting included',
      '99.9% uptime guarantee',
    ],
    popular: false,
  },
  {
    name: 'Growth',
    price: '$999',
    period: '/setup + $99/mo',
    description: 'For businesses ready to scale',
    features: [
      '10-page custom website',
      'Advanced lead capture forms',
      'Google Analytics integration',
      'Premium SEO optimization',
      'Blog/news section',
      'Social media integration',
      'Priority support',
      'Monthly performance reports',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'pricing',
    description: 'Tailored to your needs',
    features: [
      'Unlimited pages',
      'Custom functionality',
      'CRM integration',
      'Advanced analytics dashboard',
      'Multi-language support',
      'Dedicated account manager',
      '24/7 support',
      'Custom cloud architecture',
    ],
    popular: false,
  },
];

export function SmallBusinessSolution({
  onGetStarted,
}: {
  onGetStarted?: () => void;
}) {
  return (
    <section className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4 text-primary">Small Business? We've Got You Covered</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional web presence and lead generation tools designed specifically for small businesses.
            Build credibility, capture leads, and grow your customer base.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl text-foreground">Turn Your Website Into a Lead Generation Machine</h3>
            <p className="text-muted-foreground">
              In today's digital world, your website is often the first impression potential customers have
              of your business. We create professional, cloud-powered sites that not only look great but
              actively work to grow your business.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <Card key={index} className="p-4">
                  <feature.icon className="w-8 h-8 text-primary mb-3" />
                  <h4 className="mb-2 text-foreground">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </Card>
              ))}
            </div>
          </div>
          {/* <div>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1718220216044-006f43e3a9b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzY4NDAxNTc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Modern workspace"
              className="rounded-2xl shadow-2xl w-full object-cover h-[500px]"
            />
          </div> */}
        </div>

        <div className="mb-12">
          <h3 className="text-3xl text-center mb-12 text-foreground">Choose Your Growth Plan</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {packages.map((pkg, index) => (
              <Card
                key={index}
                className={`p-6 relative ${pkg.popular ? 'border-2 border-primary shadow-xl' : ''}`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h4 className="text-2xl mb-2 text-foreground">{pkg.name}</h4>
                  <div className="text-4xl mb-1 text-primary">{pkg.price}</div>
                  <div className="text-muted-foreground text-sm">{pkg.period}</div>
                  <p className="text-sm text-muted-foreground mt-2">{pkg.description}</p>
                </div>
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full ${pkg.popular ? 'bg-primary hover:bg-primary/90 text-primary-foreground' : ''}`}
                  variant={pkg.popular ? 'default' : 'outline'}
                  onClick={onGetStarted}
                >
                  Get Started
                </Button>
              </Card>
            ))}
          </div>
        </div>

        <Card className="p-8 bg-accent text-accent-foreground">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-3xl mb-4">Why Choose Cloud Voyages for Your Small Business?</h3>
            <p className="text-lg mb-6 text-accent-foreground/80">
              We understand small businesses because we work with them every day. Our solutions are designed
              to be affordable, effective, and easy to manage—so you can focus on running your business.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" onClick={onGetStarted}>
                Schedule Free Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-accent-foreground text-accent-foreground hover:bg-accent-foreground/10">
                View Portfolio
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
