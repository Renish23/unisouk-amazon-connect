import { ArrowRight, CheckCircle, Users, TrendingUp, Shield, Star } from 'lucide-react';
import heroImage from '@/assets/hero-business-owner.jpg';
import dashboardMockup from '@/assets/dashboard-mockup.jpg';

const HeroSection = () => {
  const trustBadges = [
    { text: '100% Free ONDC Onboarding', highlight: true },
    { text: 'No Hidden Charges', highlight: false },
  ];

  const trustIndicators = [
    { text: 'Trusted by 7.5 lakhs+ sellers across India' },
    { text: '2-minute setup' },
  ];

  return (
    <section className="relative min-h-screen flex items-center section-padding bg-gradient-to-br from-green-900 via-green-800 to-emerald-900 overflow-hidden text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3 mb-6">
              {trustBadges.map((badge, index) => (
                <div key={index} className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium ${
                  badge.highlight 
                    ? 'bg-orange-500 text-white' 
                    : 'bg-white/10 text-white border border-white/20'
                }`}>
                  <Star className="w-4 h-4 mr-2" />
                  <span>{badge.text}</span>
                </div>
              ))}
            </div>

            {/* Headline */}
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Sell More. <span className="text-orange-400">Grow Fast.</span><br />
                Join ONDC with UniSouk!
              </h1>
              <p className="text-xl text-white/80 leading-relaxed max-w-xl">
                India's easiest way to tap lakhs of buyers & boost your business online. 
                Join the digital commerce revolution with zero setup costs.
              </p>
            </div>

            {/* Key Benefits - Simplified */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0" />
                <span className="text-white font-medium">Multi-channel selling</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0" />
                <span className="text-white font-medium">ONDC network access</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0" />
                <span className="text-white font-medium">Zero commission</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://dashboard.unisouk.com/auth/login/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors group inline-flex items-center justify-center"
              >
                Start Selling on ONDC
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://app.storylane.io/share/szxlx9zg6i2j"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors group inline-flex items-center justify-center"
              >
                Watch Demo
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-8 pt-4">
              {trustIndicators.map((indicator, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <span className="text-white/80 text-sm">{indicator.text}</span>
                </div>
              ))}
            </div>

          </div>

          {/* Business Owner Image */}
          <div className="relative animate-slide-in-right">
            <div className="relative">
              <img
                src={heroImage}
                alt="Successful ONDC seller with UniSouk"
                className="w-full h-auto rounded-xl shadow-2xl"
              />
              
              {/* Floating Profit Indicator */}
              <div className="absolute -top-6 -right-6 bg-orange-500 text-white rounded-full px-6 py-3 shadow-lg animate-scale-in">
                <div className="flex items-center space-x-2">
                  <TrendingUp className="w-5 h-5" />
                  <span className="font-bold text-lg">↗ Profit ↗</span>
                </div>
              </div>
              
              {/* Success Indicator */}
              <div className="absolute -bottom-6 -left-6 bg-white text-green-900 rounded-lg p-4 shadow-lg animate-scale-in" style={{ animationDelay: '0.2s' }}>
                <div className="text-2xl font-bold text-green-800">₹50K+</div>
                <div className="text-sm text-green-600">Monthly Earnings</div>
              </div>
              
              {/* ONDC Badge */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-green-900 rounded-lg px-4 py-2 shadow-lg animate-scale-in" style={{ animationDelay: '0.4s' }}>
                <div className="flex items-center space-x-2">
                  <Shield className="w-4 h-4 text-green-600" />
                  <span className="font-semibold text-sm">ONDC Verified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;