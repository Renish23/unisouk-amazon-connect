import { 
  ArrowRight, 
  Shield, 
  CheckCircle, 
  Clock, 
  Users,
  Star,
  Zap
} from 'lucide-react';
import { useState } from 'react';

const ConnectSection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const features = [
    'Free 14-day trial',
    'No setup fees',
    'Cancel anytime',
    'Bank-grade security',
    '24/7 support included'
  ];

  const urgencyIndicators = [
    { icon: Users, text: '12 sellers joined today' },
    { icon: Clock, text: 'Setup takes only 2 minutes' },
    { icon: Star, text: '4.9/5 seller satisfaction' }
  ];

  return (
    <section id="connect" className="section-padding bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to 
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> Supercharge </span>
              Your Amazon Business?
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Join 500+ successful sellers who have already streamlined their 
              operations and increased their revenue with UniSouk.
            </p>
          </div>

          {/* Main CTA Card */}
          <div className="bg-card rounded-2xl p-8 lg:p-12 shadow-xl border border-border">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Form Side */}
              <div>
                <h3 className="text-2xl font-bold mb-4">
                  Start Your Free Integration
                </h3>
                <p className="text-muted-foreground mb-6">
                  Connect your Amazon account in under 2 minutes. 
                  No credit card required for the trial.
                </p>

                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <input
                        type="email"
                        placeholder="Enter your business email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-hero w-full group disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center">
                          <div className="w-5 h-5 border-2 border-secondary-foreground border-t-transparent rounded-full animate-spin mr-2"></div>
                          Connecting...
                        </div>
                      ) : (
                        <>
                          Connect Amazon Account Now
                          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </form>
                ) : (
                  <div className="bg-accent/10 border border-accent/20 rounded-lg p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <CheckCircle className="w-6 h-6 text-accent" />
                      <h4 className="text-lg font-semibold text-accent">Success!</h4>
                    </div>
                    <p className="text-foreground mb-4">
                      Check your email for the Amazon integration link. You'll be up and running in minutes!
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Didn't receive the email? Check your spam folder or contact our support team.
                    </p>
                  </div>
                )}

                {/* Features List */}
                <div className="mt-6 space-y-3">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits Side */}
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-6 border border-border">
                  <h4 className="text-lg font-semibold mb-4 text-foreground">
                    What happens next?
                  </h4>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold flex-shrink-0">1</div>
                      <div>
                        <div className="font-medium text-foreground">Instant Access</div>
                        <div className="text-sm text-muted-foreground">Get your integration link via email</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center text-sm font-bold flex-shrink-0">2</div>
                      <div>
                        <div className="font-medium text-foreground">Quick Setup</div>
                        <div className="text-sm text-muted-foreground">Connect your Amazon account securely</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold flex-shrink-0">3</div>
                      <div>
                        <div className="font-medium text-foreground">Start Managing</div>
                        <div className="text-sm text-muted-foreground">Unified dashboard goes live immediately</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Urgency Indicators */}
                <div className="space-y-3">
                  {urgencyIndicators.map((indicator, index) => (
                    <div key={index} className="flex items-center space-x-3 text-sm">
                      <indicator.icon className="w-4 h-4 text-accent" />
                      <span className="text-muted-foreground">{indicator.text}</span>
                    </div>
                  ))}
                </div>

                {/* Security Badge */}
                <div className="flex items-center space-x-3 bg-muted rounded-lg p-4">
                  <Shield className="w-6 h-6 text-primary" />
                  <div>
                    <div className="font-medium text-foreground text-sm">Secure Integration</div>
                    <div className="text-xs text-muted-foreground">Bank-grade encryption & OAuth 2.0</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Alternative Options */}
          <div className="text-center mt-12 space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#demo"
                className="btn-hero-outline inline-flex items-center justify-center"
              >
                Watch Live Demo First
              </a>
              <a
                href="#support"
                className="text-primary hover:text-primary-hover font-medium inline-flex items-center justify-center"
              >
                Speak with Integration Expert
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>

            <p className="text-sm text-muted-foreground">
              Questions? Call us at{' '}
              <a href="tel:+911234567890" className="text-primary hover:text-primary-hover font-medium">
                +91 1234-567-890
              </a>{' '}
              or email{' '}
              <a href="mailto:support@unisouk.com" className="text-primary hover:text-primary-hover font-medium">
                support@unisouk.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectSection;