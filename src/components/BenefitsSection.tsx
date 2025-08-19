import { 
  TrendingUp, 
  Clock, 
  DollarSign, 
  BarChart3, 
  CheckCircle, 
  ArrowRight,
  Target,
  Zap,
  Shield,
  Users
} from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: 'Increase Sales by 40%',
      description: 'Sellers using UniSouk see an average 40% increase in sales within 3 months through better inventory management and cross-platform optimization.',
      metric: '+40%',
      metricLabel: 'Sales Growth'
    },
    {
      icon: Clock,
      title: 'Save 15+ Hours Weekly',
      description: 'Automate manual tasks like inventory updates, order processing, and report generation. Focus on growing your business instead of managing spreadsheets.',
      metric: '15+ hrs',
      metricLabel: 'Time Saved'
    },
    {
      icon: DollarSign,
      title: 'Reduce Costs by 25%',
      description: 'Eliminate stockouts, reduce overstock situations, and optimize your advertising spend with data-driven insights across all platforms.',
      metric: '-25%',
      metricLabel: 'Cost Reduction'
    },
    {
      icon: BarChart3,
      title: 'Better Decision Making',
      description: 'Make informed decisions with comprehensive analytics, trend analysis, and performance insights from all your sales channels.',
      metric: '360°',
      metricLabel: 'View of Business'
    }
  ];

  const comparisonData = {
    before: {
      title: 'Before UniSouk',
      points: [
        'Managing multiple seller panels separately',
        'Manual inventory tracking across platforms',
        'Delayed order processing and fulfillment',
        'Limited visibility into overall performance',
        'Time-consuming report generation',
        'Reactive business decisions'
      ]
    },
    after: {
      title: 'After UniSouk',
      points: [
        'Single dashboard for all marketplaces',
        'Automated inventory synchronization',
        'Real-time order management',
        'Comprehensive business analytics',
        'Automated reporting and insights',
        'Data-driven business growth'
      ]
    }
  };

  return (
    <section id="benefits" className="section-padding bg-gradient-to-b from-background to-neutral">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-section-title">
            Transform Your Amazon Business with 
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> Measurable Results</span>
          </h2>
          <p className="text-section-subtitle">
            Real benefits experienced by our sellers. Join hundreds of successful 
            businesses that have scaled their operations with UniSouk.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="card-elegant text-center group hover:scale-105 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 text-primary mb-6 group-hover:scale-110 transition-transform">
                <benefit.icon className="w-8 h-8" />
              </div>
              
              <div className="space-y-2 mb-4">
                <div className="text-3xl font-bold text-primary">{benefit.metric}</div>
                <div className="text-sm text-muted-foreground font-medium">{benefit.metricLabel}</div>
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-foreground">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Before/After Comparison */}
        <div className="bg-card rounded-2xl p-8 lg:p-12 shadow-lg border border-border">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">The UniSouk Difference</h3>
            <p className="text-muted-foreground text-lg">
              See how UniSouk transforms your Amazon selling experience
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Before */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-destructive/10 text-destructive flex items-center justify-center">
                  <Target className="w-6 h-6" />
                </div>
                <h4 className="text-2xl font-bold text-foreground">{comparisonData.before.title}</h4>
              </div>
              
              <div className="space-y-4">
                {comparisonData.before.points.map((point, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* After */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-accent/10 text-accent flex items-center justify-center">
                  <Zap className="w-6 h-6" />
                </div>
                <h4 className="text-2xl font-bold text-foreground">{comparisonData.after.title}</h4>
              </div>
              
              <div className="space-y-4">
                {comparisonData.after.points.map((point, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-foreground font-medium">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12 pt-8 border-t border-border">
            <a
              href="#connect"
              className="btn-hero group inline-flex items-center justify-center"
            >
              Experience the Difference
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <p className="text-sm text-muted-foreground mt-3">
              Free setup • No long-term contracts • Cancel anytime
            </p>
          </div>
        </div>

        {/* Social Proof Numbers */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-6 border border-primary/20">
            <div className="text-4xl font-bold text-primary mb-2">₹2Cr+</div>
            <div className="text-muted-foreground">Monthly GMV Processed</div>
          </div>
          <div className="text-center bg-gradient-to-br from-secondary/5 to-secondary/10 rounded-xl p-6 border border-secondary/20">
            <div className="text-4xl font-bold text-secondary mb-2">500+</div>
            <div className="text-muted-foreground">Active Sellers</div>
          </div>
          <div className="text-center bg-gradient-to-br from-accent/5 to-accent/10 rounded-xl p-6 border border-accent/20">
            <div className="text-4xl font-bold text-accent mb-2">99.9%</div>
            <div className="text-muted-foreground">Uptime Guarantee</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;