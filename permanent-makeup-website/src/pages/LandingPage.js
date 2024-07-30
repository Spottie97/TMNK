import React from 'react';
import HeroSection from '../components/HeroSection';
import ServicesOverview from '../components/ServicesOverview';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <HeroSection />
      <ServicesOverview />
      <Testimonials />
      <CTA />
    </div>
  );
};

export default LandingPage;
