import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      business: 'Electronics Seller',
      revenue: '₹50L+ Annual Revenue',
      rating: 5,
      text: 'UniSouk transformed our Amazon business completely. We went from managing 3 different seller panels to having everything in one place. Our sales increased by 45% in just 4 months!',
      image: '👨‍💼',
      metrics: '45% sales increase'
    },
    {
      name: 'Priya Sharma',
      business: 'Fashion & Lifestyle',
      revenue: '₹25L+ Annual Revenue',
      rating: 5,
      text: 'The inventory sync feature is a game-changer. No more stockouts or overselling across platforms. I save 20+ hours every week that I now spend on growing my business instead of managing it.',
      image: '👩‍💼',
      metrics: '20+ hours saved weekly'
    },
    {
      name: 'Amit Patel',
      business: 'Home & Kitchen',
      revenue: '₹80L+ Annual Revenue',
      rating: 5,
      text: 'The analytics dashboard gives me insights I never had before. I can see which products perform best on which platform and optimize accordingly. ROI improved by 35%!',
      image: '👨‍💻',
      metrics: '35% ROI improvement'
    }
  ];

  const trustMetrics = [
    { value: '4.9/5', label: 'Average Rating' },
    { value: '500+', label: 'Happy Sellers' },
    { value: '99.9%', label: 'Uptime' },
    { value: '24/7', label: 'Support' }
  ];

  return (
    <section id="testimonials" className="section-padding bg-gradient-to-b from-neutral to-background">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-section-title">
            Loved by 
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> 500+ Amazon Sellers</span>
          </h2>
          <p className="text-section-subtitle">
            Don't just take our word for it. Here's what successful sellers are saying 
            about their experience with UniSouk's Amazon integration.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="card-testimonial hover:scale-105 transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                <Quote className="w-4 h-4 text-secondary-foreground" />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-warning fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-foreground mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Metric Highlight */}
              <div className="inline-flex items-center bg-accent/10 text-accent rounded-full px-4 py-2 text-sm font-semibold mb-6">
                {testimonial.metrics}
              </div>

              {/* Author Info */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-2xl">
                  {testimonial.image}
                </div>
                <div>
                  <div className="font-bold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.business}</div>
                  <div className="text-sm text-accent font-medium">{testimonial.revenue}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Metrics */}
        <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Trusted by Sellers Nationwide</h3>
            <p className="text-muted-foreground">
              Join the growing community of successful Amazon sellers
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {trustMetrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">{metric.value}</div>
                <div className="text-muted-foreground">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Social Proof */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 bg-muted rounded-full px-6 py-3">
            <div className="flex -space-x-2">
              {['👨‍💼', '👩‍💼', '👨‍💻', '👩‍💻', '👨‍🔧'].map((emoji, index) => (
                <div 
                  key={index}
                  className="w-8 h-8 rounded-full bg-card border-2 border-background flex items-center justify-center text-sm"
                >
                  {emoji}
                </div>
              ))}
            </div>
            <div className="text-sm text-muted-foreground ml-4">
              <span className="font-semibold text-foreground">500+ sellers</span> are already using UniSouk
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;