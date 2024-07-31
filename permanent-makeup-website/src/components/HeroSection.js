import React from 'react';
import '../styles/custom.css'; // Import the custom styles

const HeroSection = () => {
  return (
    <div className="custom-hero text-center">
      <h1 className="text-5xl font-bold mb-4">Welcome to TAMROOK</h1>
      <p className="text-lg mb-8">Your beauty, our expertise.</p>
      <button className="custom-hero-button">Book Now</button>
    </div>
  );
};

export default HeroSection;
