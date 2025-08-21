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
                  
                </div>

                {/* Content */}
                <div className="space-y-4">
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

      </div>
    </section>
  );
};

export default HowItWorksSection;