import { 
  Mail, 
  Phone, 
  MapPin, 
  Twitter, 
  Linkedin, 
  Facebook,
  Instagram,
  Shield,
  Award,
  CheckCircle
} from 'lucide-react';

const Footer = () => {
  const companyLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Our Story', href: '#story' },
    { name: 'Careers', href: '#careers' },
    { name: 'Press Kit', href: '#press' },
    { name: 'Blog', href: '#blog' }
  ];

  const featureLinks = [
    { name: 'Amazon Integration', href: '#amazon' },
    { name: 'Multi-platform Management', href: '#platforms' },
    { name: 'Analytics Dashboard', href: '#analytics' },
    { name: 'Inventory Sync', href: '#inventory' },
    { name: 'Order Management', href: '#orders' }
  ];

  const supportLinks = [
    { name: 'Help Center', href: '#help' },
    { name: 'API Documentation', href: '#api' },
    { name: 'Integration Guide', href: '#guide' },
    { name: 'Video Tutorials', href: '#tutorials' },
    { name: 'Contact Support', href: '#contact' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '#privacy' },
    { name: 'Terms of Service', href: '#terms' },
    { name: 'Cookie Policy', href: '#cookies' },
    { name: 'Refund Policy', href: '#refund' }
  ];

  const socialLinks = [
    { name: 'Twitter', icon: Twitter, href: '#twitter' },
    { name: 'LinkedIn', icon: Linkedin, href: '#linkedin' },
    { name: 'Facebook', icon: Facebook, href: '#facebook' },
    { name: 'Instagram', icon: Instagram, href: '#instagram' }
  ];

  const trustBadges = [
    { icon: Shield, text: 'SSL Secured' },
    { icon: Award, text: 'ISO 27001 Certified' },
    { icon: CheckCircle, text: 'GDPR Compliant' }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer Content */}
      <div className="section-container py-16">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <img 
                src="/lovable-uploads/927a81c3-316a-42f5-9ed9-ac01d5ce692f.png" 
                alt="UniSouk Logo" 
                className="h-8 w-auto mb-4 brightness-0 invert"
              />
              <p className="text-primary-foreground/80 leading-relaxed max-w-md">
                UniSouk empowers Amazon sellers with powerful tools to manage 
                multiple marketplaces from one unified dashboard. Scale your 
                business with confidence.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-secondary" />
                <a href="tel:+919033002465" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  +91 90330 02465
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-secondary" />
                <a href="mailto:connect@unisouk.com" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  connect@unisouk.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-secondary mt-0.5" />
                <span className="text-primary-foreground/80">
                  Tech Park, Electronic City<br />
                  Bangalore, Karnataka 560100
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-secondary text-primary-foreground hover:text-secondary-foreground flex items-center justify-center transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Features Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Features</h4>
            <ul className="space-y-3">
              {featureLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Support</h4>
            <ul className="space-y-3">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-primary-foreground/10">
        <div className="section-container py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            {/* Copyright */}
            <div className="text-primary-foreground/80 text-sm">
              © 2024 UniSouk. All rights reserved. Built with ❤️ for Amazon sellers.
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center gap-6">
              {legalLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Trust Badges */}
            <div className="flex space-x-4">
              {trustBadges.map((badge, index) => (
                <div 
                  key={index}
                  className="flex items-center space-x-2 text-xs text-primary-foreground/80"
                >
                  <badge.icon className="w-4 h-4" />
                  <span>{badge.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;