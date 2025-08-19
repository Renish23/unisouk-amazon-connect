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
      icon: RefreshCw,
      title: 'Real-time Synchronization',
      description: 'Automatically sync orders, inventory, and product data across Amazon and other marketplaces in real-time.',
      color: 'text-primary'
    },
    {
      icon: BarChart3,
      title: 'Unified Analytics Dashboard',
      description: 'Get comprehensive insights with combined analytics from all your marketplaces in one beautiful dashboard.',
      color: 'text-secondary'
    },
    {
      icon: Package,
      title: 'Inventory Management',
      description: 'Centralized inventory tracking with automated stock updates and low-stock alerts across all platforms.',
      color: 'text-accent'
    },
    {
      icon: DollarSign,
      title: 'Revenue Optimization',
      description: 'Maximize profits with pricing insights, margin analysis, and performance tracking across channels.',
      color: 'text-warning'
    },
    {
      icon: Clock,
      title: 'Time-saving Automation',
      description: 'Automate repetitive tasks like order processing, inventory updates, and report generation.',
      color: 'text-primary'
    },
    {
      icon: Shield,
      title: 'Secure Integration',
      description: 'Bank-grade security with encrypted data transmission and secure API connections to protect your business.',
      color: 'text-accent'
    }
  ];

  const integrations = [
    { name: 'Amazon', logo: '🛒', status: 'Active' },
    { name: 'Flipkart', logo: '🛍️', status: 'Active' },
    { name: 'Myntra', logo: '👕', status: 'Active' },
    { name: 'Meesho', logo: '📱', status: 'Active' },
    { name: 'Shopify', logo: '🏪', status: 'Coming Soon' },
    { name: 'WooCommerce', logo: '🔧', status: 'Coming Soon' }
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

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="card-feature group hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`integration-icon ${feature.color} mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
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

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {integrations.map((integration, index) => (
              <div 
                key={index}
                className="text-center p-4 rounded-lg border border-border hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-3xl mb-2">{integration.logo}</div>
                <div className="font-medium text-sm text-foreground">{integration.name}</div>
                <div className={`text-xs mt-1 ${
                  integration.status === 'Active' ? 'text-accent' : 'text-warning'
                }`}>
                  {integration.status}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-8 mt-16">
          {[
            { number: '500+', label: 'Active Sellers', icon: Users },
            { number: '99.9%', label: 'Uptime', icon: Shield },
            { number: '₹2Cr+', label: 'Monthly GMV', icon: TrendingUp },
            { number: '24/7', label: 'Support', icon: Smartphone }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                <stat.icon className="w-6 h-6" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">{stat.number}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;