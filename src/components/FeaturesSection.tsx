import { 
  Zap, 
  BarChart3, 
  RefreshCw, 
  Shield, 
  Clock, 
  TrendingUp, 
  Package, 
  DollarSign,
  Smartphone,
  Globe,
  Users
} from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      title: 'Real-time Synchronization',
      description: 'Automatically sync orders, inventory, and product data across Amazon and other marketplaces in real-time.',
      gradient: 'from-primary to-primary-hover'
    },
    {
      title: 'Unified Analytics Dashboard',
      description: 'Get comprehensive insights with combined analytics from all your marketplaces in one beautiful dashboard.',
      gradient: 'from-secondary to-secondary-hover'
    },
    {
      title: 'Smart Inventory Management',
      description: 'Centralized inventory tracking with automated stock updates and intelligent low-stock alerts across all platforms.',
      gradient: 'from-accent to-accent-hover'
    },
    {
      title: 'Revenue Optimization',
      description: 'Maximize profits with intelligent pricing insights, margin analysis, and performance tracking across channels.',
      gradient: 'from-primary to-secondary'
    }
  ];

  const integrations = [
    { name: 'Amazon', logo: '🛒', status: 'Active' },
    { name: 'ONDC', logo: '🌐', status: 'Active' },
    { name: 'Wix', logo: '🏗️', status: 'Active' },
    { name: 'WooCommerce', logo: '🔧', status: 'Active' },
    { name: 'Shopify', logo: '🏪', status: 'Active' }
  ];

  return (
    <section id="features" className="section-padding bg-gradient-to-b from-background to-neutral">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-section-title">
            Everything You Need to Scale Your 
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> Amazon Business</span>
          </h2>
          <p className="text-section-subtitle">
            Powerful features designed to streamline your multi-marketplace operations 
            and boost your business growth with intelligent automation.
          </p>
        </div>

        {/* Features Grid - Clean & Simple */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="relative p-8 rounded-2xl bg-gradient-to-br from-card via-card to-neutral border border-border shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${feature.gradient} rounded-t-2xl group-hover:h-2 transition-all duration-300`}></div>
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
              
              <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg group-hover:text-foreground transition-colors duration-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Platform Integrations */}
        <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Seamless Platform Integrations</h3>
            <p className="text-muted-foreground">
              Connect with multiple marketplaces and manage everything from one dashboard
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {integrations.map((integration, index) => (
              <div 
                key={index}
                className="text-center p-6 rounded-xl border border-border hover:shadow-lg transition-all duration-500 hover:-translate-y-2 hover:scale-110 group bg-gradient-to-br from-background to-neutral cursor-pointer relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="text-4xl mb-3 transform group-hover:scale-125 transition-transform duration-300">{integration.logo}</div>
                  <div className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors duration-300">{integration.name}</div>
                  <div className={`inline-flex items-center justify-center px-2 py-1 rounded-full text-xs mt-2 font-medium ${
                    integration.status === 'Active' ? 'bg-accent/20 text-accent' : 'bg-warning/20 text-warning'
                  } group-hover:scale-105 transition-transform duration-300`}>
                    <div className={`w-2 h-2 rounded-full mr-1 ${
                      integration.status === 'Active' ? 'bg-accent animate-pulse' : 'bg-warning'
                    }`}></div>
                    {integration.status}
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

export default FeaturesSection;