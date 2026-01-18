import { Cloud, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ImageWithFallback } from '@/components/Fallback/ImageWithFallback';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full">
              <Cloud className="w-5 h-5 text-blue-600" />
              <span className="text-sm text-blue-700">Trusted Cloud Experts</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl tracking-tight">
              Navigate Your Cloud Journey with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Confidence
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Expert cloud consulting that keeps your critical systems running smoothly. 
              From migration to optimization, we ensure zero interruptions while maximizing your cloud ROI.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline">
                Schedule Consultation
              </Button>
            </div>
            
            <div className="flex items-center gap-8 pt-4">
              <div>
                <div className="text-3xl">99.9%</div>
                <div className="text-sm text-gray-600">Uptime Guarantee</div>
              </div>
              <div className="w-px h-12 bg-gray-300" />
              <div>
                <div className="text-3xl">24/7</div>
                <div className="text-sm text-gray-600">Expert Support</div>
              </div>
              <div className="w-px h-12 bg-gray-300" />
              <div>
                <div className="text-3xl">500+</div>
                <div className="text-sm text-gray-600">Migrations</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-400 to-purple-400 rounded-2xl blur-3xl opacity-20" />
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1744868562210-fffb7fa882d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZyUyMHNlcnZlcnxlbnwxfHx8fDE3Njg0NjIwNzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Cloud computing servers"
              className="relative rounded-2xl shadow-2xl w-full object-cover h-[500px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
