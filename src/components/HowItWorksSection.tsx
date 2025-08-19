import { 
  Link2, 
  Settings, 
  BarChart3, 
  CheckCircle, 
  ArrowRight,
  Clock,
  Shield,
  Zap
} from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      number: 1,
      title: 'Connect Your Account',
      description: 'Securely connect your Amazon seller account with one-click OAuth integration. No passwords or sensitive data shared.',
      icon: Link2,
      time: '2 minutes',
      features: ['Secure OAuth', 'No password required', 'Instant verification']
    },
    {
      number: 2,
      title: 'Configure Settings',
      description: 'Set up your preferences for inventory sync, order management, and notification settings according to your business needs.',
      icon: Settings,
      time: '5 minutes',
      features: ['Custom sync rules', 'Notification preferences', 'Business rules setup']
    },
    {
      number: 3,
      title: 'Monitor & Optimize',
      description: 'Access real-time analytics, manage orders across platforms, and optimize your business performance from one dashboard.',
      icon: BarChart3,
      time: 'Ongoing',
      features: ['Real-time analytics', 'Cross-platform management', 'Performance insights']
    }
  ];

  return (
    <section id="how-it-works" className="section-padding bg-gradient-to-b from-neutral to-background">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-section-title">
            Get Started in 
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> 3 Simple Steps</span>
          </h2>
          <p className="text-section-subtitle">
            Connect your Amazon account and start managing your multi-marketplace business 
            in minutes, not hours. No technical expertise required.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Lines */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-accent transform -translate-y-1/2 z-0"></div>
          
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="text-center group">
                {/* Step Circle */}
                <div className="relative mb-8">
                  <div className="step-circle mx-auto group-hover:scale-110 transition-transform duration-300">
                    <span className="text-xl font-bold">{step.number}</span>
                  </div>
                  
                  {/* Icon */}
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-card border border-border rounded-full p-2 shadow-lg">
                    <step.icon className="w-5 h-5 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <div className="inline-flex items-center space-x-2 text-sm text-muted-foreground bg-muted rounded-full px-3 py-1">
                    <Clock className="w-4 h-4" />
                    <span>{step.time}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed max-w-sm mx-auto">
                    {step.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-2 mt-6">
                    {step.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center justify-center space-x-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Start CTA */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 border border-border">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-muted-foreground mb-6">
                Join hundreds of successful sellers who have already streamlined their 
                Amazon business with UniSouk's powerful integration.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#connect"
                  className="btn-hero group inline-flex items-center justify-center"
                >
                  Start Free Integration
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#demo"
                  className="btn-hero-outline inline-flex items-center justify-center"
                >
                  Watch Demo Video
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center gap-6 mt-8 pt-6 border-t border-border">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Shield className="w-4 h-4 text-accent" />
                  <span>Enterprise Security</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Zap className="w-4 h-4 text-secondary" />
                  <span>Instant Setup</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  <span>No Long-term Commitment</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;