import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { PERSONAL_DATA } from '@/constants/PERSONAL_DATA';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send to a backend
    alert('Thank you for your interest! We will contact you within 24 hours.');
    setFormData({ name: '', email: '', company: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4">Ready to Start Your Cloud Journey?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with our team for a free consultation. We'll assess your needs and 
            provide a customized roadmap for your cloud transformation.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <Card className="p-6 text-center">
            <div className="inline-flex p-3 bg-blue-100 rounded-full mb-4">
              <Phone className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl mb-2">Call Us</h3>
            <p className="text-gray-600 mb-2">Mon-Fri 8am-6pm EST</p>
            <a href={`tel:${PERSONAL_DATA.phone}`} className="text-blue-600 hover:underline">
              {PERSONAL_DATA.phone}
            </a>
          </Card>

          <Card className="p-6 text-center">
            <div className="inline-flex p-3 bg-purple-100 rounded-full mb-4">
              <Mail className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl mb-2">Email Us</h3>
            <p className="text-gray-600 mb-2">We respond within 4 hours</p>
            <a href={`mailto:${PERSONAL_DATA.email}`} className="text-purple-600 hover:underline">
              {PERSONAL_DATA.email}
            </a>
          </Card>

          <Card className="p-6 text-center">
            <div className="inline-flex p-3 bg-cyan-100 rounded-full mb-4">
              <MapPin className="w-6 h-6 text-cyan-600" />
            </div>
            <h3 className="text-xl mb-2">Visit Us</h3>
            <p className="text-gray-600 mb-2">Headquarters</p>
            <p className="text-cyan-600">
              710 Pioneer Woods Dr<br />Indianapolis, IN 46240
            </p>
          </Card>
        </div>

        <Card className="p-8 max-w-2xl mx-auto">
          <h3 className="text-2xl mb-6 text-center">Send Us a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name *</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Cloud Bound"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@company.com"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="company">Company</Label>
                <Input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your Company"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(555) 123-4567"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message *</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell us about your project or ask any questions..."
                rows={5}
              />
            </div>

            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" size="lg">
              <Send className="w-5 h-5 mr-2" />
              Send Message
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
}
