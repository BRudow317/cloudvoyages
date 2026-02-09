import { Mail, Phone, MapPin} from 'lucide-react';
import { Card } from '@/components/ui/card';

import { PERSONAL_DATA } from '@/constants/PERSONAL_DATA';
import { CvForm } from '@/components/ui/CvForm';

export function ContactSection() {

  return (
    <section className="py-20 bg-background/0">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4 text-foreground">Ready to Start Your Cloud Journey?</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get in touch with our team for a free consultation. We'll assess your needs and
            provide a customized roadmap for your cloud transformation.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <Card className="p-6 text-center">
            <div className="inline-flex p-3 bg-secondary rounded-full mb-4">
              <Phone className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl mb-2 text-foreground">Call Us</h3>
            <p className="text-muted-foreground mb-2">Mon-Fri 8am-6pm EST</p>
            <a href={`tel:${PERSONAL_DATA.phone}`} className="text-primary hover:underline">
              {PERSONAL_DATA.phone}
            </a>
          </Card>

          <Card className="p-6 text-center">
            <div className="inline-flex p-3 bg-secondary rounded-full mb-4">
              <Mail className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-xl mb-2 text-foreground">Email Us</h3>
            <p className="text-muted-foreground mb-2">We respond within 4 hours</p>
            <a href={`mailto:${PERSONAL_DATA.email}`} className="text-accent hover:underline">
              {PERSONAL_DATA.email}
            </a>
          </Card>

          <Card className="p-6 text-center">
            <div className="inline-flex p-3 bg-secondary rounded-full mb-4">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl mb-2 text-foreground">Location</h3>
            <p className="text-muted-foreground mb-2">Headquarters</p>
            <p className="text-primary">
              Indianapolis, IN
            </p>
          </Card>
        </div>

        <CvForm />
      </div>
    </section>
  );
}
