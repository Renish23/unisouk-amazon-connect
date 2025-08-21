import { CheckCircle, ArrowRight, TrendingUp, Clock, Target, Zap } from 'lucide-react';

const UniSoukEffectSection = () => {
  const transformationData = [
    {
      metric: '40%',
      label: 'Sales Increase',
      description: 'Average sales growth within 3 months',
      icon: TrendingUp,
      color: 'from-primary to-secondary'
    },
    {
      metric: '15+ hrs',
      label: 'Time Saved Weekly',
      description: 'Focus on growth, not manual tasks',
      icon: Clock,
      color: 'from-secondary to-accent'
    },
    {
      metric: '25%',
      label: 'Cost Reduction',
      description: 'Eliminate stockouts and optimize spend',
      icon: Target,
      color: 'from-accent to-primary'
    }
  ];

  const beforeAfter = {
    before: [
      'Managing multiple seller panels separately',
      'Manual inventory tracking',
      'Delayed order processing',
      'Limited business visibility',
      'Time-consuming reports'
    ],
    after: [
      'Single unified dashboard',
      'Automated inventory sync',
      'Real-time order management',
      'Complete business analytics',
      'Automated insights & reports'
    ]
  };

  return (
    <section id="unisouk-effect" className="section-padding bg-gradient-to-b from-neutral to-background">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-section-title">
            The 
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent"> UniSouk Effect</span>
          </h2>
          <p className="text-section-subtitle">
            Real transformation experienced by our sellers. See the measurable impact UniSouk makes on Amazon businesses.
          </p>
        </div>

        {/* Transformation Metrics */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {transformationData.map((item, index) => (
            <div 
              key={index}
              className="relative p-8 rounded-2xl bg-card border border-border shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:scale-105 group text-center cursor-pointer"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-5 rounded-2xl group-hover:opacity-15 transition-all duration-500`}></div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${item.color} text-white mb-6 group-hover:scale-125 group-hover:rotate-6 transition-all duration-500 shadow-lg group-hover:shadow-2xl`}>
                  <item.icon className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
                </div>
                
                <div className="space-y-3">
                  <div className={`text-4xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300`}>
                    {item.metric}
                  </div>
                  <div className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">{item.label}</div>
                  <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Before vs After Transformation */}
        <div className="bg-gradient-to-br from-card via-card to-neutral rounded-3xl p-8 lg:p-12 shadow-xl border border-border">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Your Business Transformation Journey</h3>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              From scattered operations to unified success - see how UniSouk transforms your Amazon selling experience
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Before */}
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-destructive/20 to-destructive/10 rounded-2xl -z-10"></div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-l-destructive">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-destructive/10 text-destructive flex items-center justify-center">
                    <Target className="w-6 h-6" />
                  </div>
                  <h4 className="text-2xl font-bold text-foreground">Before UniSouk</h4>
                </div>
                
                <div className="space-y-4">
                  {beforeAfter.before.map((point, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* After */}
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-accent/20 to-primary/10 rounded-2xl -z-10"></div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-l-accent">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-primary text-white flex items-center justify-center">
                    <Zap className="w-6 h-6" />
                  </div>
                  <h4 className="text-2xl font-bold text-foreground">After UniSouk</h4>
                </div>
                
                <div className="space-y-4">
                  {beforeAfter.after.map((point, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-foreground font-medium">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Arrow Between Columns - Desktop Only */}
          <div className="hidden lg:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-accent text-white flex items-center justify-center shadow-lg animate-pulse">
              <ArrowRight className="w-8 h-8" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default UniSoukEffectSection;