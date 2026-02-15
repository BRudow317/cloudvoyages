import { Cloud, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Link } from 'react-router';

export function Footer() {
  return (
    <footer className="bg-card text-muted-foreground py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Cloud className="w-8 h-8 text-primary" />
              <span className="text-xl text-foreground">Cloud Voyages</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Expert cloud consulting for businesses of all sizes.
              Migrate, optimize, and scale with confidence.
            </p>
          </div>

          <div>
            <h3 className="text-foreground mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">Cloud Migration</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Infrastructure Management</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Security & Compliance</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Website Development</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-foreground mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><a href="#" className="hover:text-primary transition-colors">Case Studies</a></li>
              <li><Link to="/careers" className="hover:text-primary transition-colors">Careers</Link></li>
              <li><Link to="/internships" className="hover:text-primary transition-colors">Internships</Link></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-foreground mb-4">Connect</h3>
            <div className="flex gap-4 mb-4">
              <a href="#" className="hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
            <p className="text-sm text-muted-foreground">
              Stay updated with cloud insights and industry news.
            </p>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 Cloud Voyages. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
