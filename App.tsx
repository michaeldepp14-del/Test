
import React from 'react';
import Navbar from './components/Navbar';
import PromoBanner from './components/PromoBanner';
import Hero from './components/Hero';
import TrustBanner from './components/TrustBanner';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Testimonials from './components/Testimonials';
import ServiceArea from './components/ServiceArea';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import MobileActionBar from './components/MobileActionBar';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-white">
      <PromoBanner />
      <Navbar />
      <main>
        <Hero />
        <TrustBanner />
        <Services />
        <WhyUs />
        <Testimonials />
        <ServiceArea />
        <ContactSection />
      </main>
      <Footer />
      <MobileActionBar />
    </div>
  );
};

export default App;
