import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import UniSoukEffectSection from '@/components/UniSoukEffectSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ConnectSection from '@/components/ConnectSection';
import Footer from '@/components/Footer';

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <UniSoukEffectSection />
        <TestimonialsSection />
        <ConnectSection />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;