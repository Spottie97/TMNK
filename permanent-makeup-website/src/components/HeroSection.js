import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="custom-hero text-center">
      <h1 className="text-5xl font-bold mb-4">Welcome to TAMROOK</h1>
      <p className="text-lg mb-8">Your beauty, our expertise.</p>
      <Link to="/packages">
        <button className="custom-hero-button">Explore Packages</button>
      </Link>
    </div>
  );
};

export default HeroSection;
