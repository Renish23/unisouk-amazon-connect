import { CheckCircle, ArrowRight, Zap, Settings, TrendingUp } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      number: 1,
      title: 'Connect Your Account',
      description: 'Securely link your Amazon seller account with our OAuth 2.0 integration in just one click.',
      icon: Zap,
      features: [
        'Secure OAuth 2.0 authentication',
        'Instant account verification',
        'No data storage on our servers',
        'Bank-grade security protocols'
      ]
    },
    {
      number: 2,
      title: 'Configure Settings',
      description: 'Customize your dashboard preferences and set up automated sync rules for your business needs.',
      icon: Settings,
      features: [
        'Personalized dashboard layout',
        'Custom sync preferences',
        'Automated inventory rules',
        'Notification preferences'
      ]
    },
    {
      number: 3,
      title: 'Monitor & Optimize',
      description: 'Access real-time insights and let our AI-powered tools help you optimize your Amazon business.',
      icon: TrendingUp,
      features: [
        'Real-time performance metrics',
        'AI-powered recommendations',
        'Automated reporting',
        'Growth optimization insights'
      ]
    }
  ];

  return (
    <section id="how-it-works" className="section-padding bg-gradient-to-b from-background to-neutral">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-section-title">
            Get Started in 
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> 3 Simple Steps</span>
          </h2>
          <p className="text-section-subtitle">
            Transform your Amazon business management in under 5 minutes with our streamlined onboarding process.
          </p>
        </div>

        {/* Interactive Timeline */}
        <div className="relative">
          {/* Timeline Line - Desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent opacity-20"></div>
          <div className="hidden lg:block absolute top-24 left-0 h-1 bg-gradient-to-r from-primary to-secondary transition-all duration-1000" style={{ width: '100%' }}></div>

          {/* Steps Grid */}
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                {/* Timeline Node - Desktop */}
                <div className="hidden lg:block absolute -top-2 left-1/2 transform -translate-x-1/2 z-10">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary text-white flex items-center justify-center text-xl font-bold shadow-lg group-hover:scale-110 transition-all duration-300 border-4 border-background`}>
                    {step.number}
                  </div>
                </div>

                {/* Step Card */}
                <div className="bg-card rounded-2xl p-8 shadow-lg border border-border hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 mt-8 lg:mt-12 group-hover:border-primary/30">
                  {/* Mobile Number */}
                  <div className="lg:hidden flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary text-white text-lg font-bold mb-6 mx-auto">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 text-primary mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-8 h-8" />
                  </div>

                  {/* Content */}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-lg group-hover:text-foreground transition-colors duration-300">
                      {step.description}
                    </p>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3">
                    {step.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Step Connector - Mobile */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden flex justify-center mt-8">
                      <ArrowRight className="w-6 h-6 text-primary/60" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-8 border border-border">
            <h3 className="text-2xl font-bold mb-4 text-foreground">Ready to Get Started?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join hundreds of successful Amazon sellers who have streamlined their operations with UniSouk.
            </p>
            <a
              href="https://dashboard.unisouk.com/auth/login/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hero group inline-flex items-center justify-center"
            >
              Start Your Free Trial
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;