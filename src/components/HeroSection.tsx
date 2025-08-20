import { ArrowRight, CheckCircle, Users, TrendingUp, Shield } from 'lucide-react';
import heroImage from '@/assets/hero-business-owner.jpg';
import dashboardMockup from '@/assets/dashboard-mockup.jpg';

const HeroSection = () => {
  const trustIndicators = [
    { icon: Users, text: '500+ Active Sellers' },
    { icon: TrendingUp, text: '₹2Cr+ Monthly GMV' },
    { icon: Shield, text: 'Bank-grade Security' },
  ];

  return (
    <section className="relative min-h-screen flex items-center section-padding bg-gradient-to-br from-background via-neutral to-background overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Trust Badge */}
            <div className="inline-flex items-center space-x-2 trust-badge">
              <CheckCircle className="w-4 h-4" />
              <span>Trusted by 500+ Amazon Sellers</span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-hero bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Manage Your Amazon Business from One Powerful Dashboard
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                Connect your Amazon seller account to UniSouk and unlock unified 
                marketplace management, real-time analytics, and automated inventory 
                sync across all platforms.
              </p>
            </div>

            {/* Key Benefits - Simplified */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-foreground font-medium">Real-time sync</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-foreground font-medium">Unified dashboard</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-foreground font-medium">Advanced analytics</span>
              </div>
            </div>

            {/* CTA Button - Single Primary */}
            <div>
              <a
                href="#connect"
                className="btn-hero group inline-flex items-center justify-center"
              >
                Connect Amazon Account
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Trust Indicators - Simplified */}
            <div className="flex flex-wrap gap-6 pt-6">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Users className="w-4 h-4 text-accent" />
                <span>500+ Active Sellers</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Shield className="w-4 h-4 text-accent" />
                <span>Bank-grade Security</span>
              </div>
            </div>
          </div>

          {/* Dashboard Preview */}
          <div className="relative animate-slide-in-right">
            <div className="dashboard-preview">
              <img
                src={dashboardMockup}
                alt="UniSouk Amazon Integration Dashboard"
                className="w-full h-auto rounded-xl shadow-hero"
              />
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-card rounded-lg p-4 shadow-lg border border-border animate-scale-in">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-accent rounded-full"></div>
                  <span className="text-sm font-medium">Live Sync Active</span>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-card rounded-lg p-4 shadow-lg border border-border animate-scale-in" style={{ animationDelay: '0.2s' }}>
                <div className="text-2xl font-bold text-primary">₹1.2L</div>
                <div className="text-sm text-muted-foreground">Today's Revenue</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;