import React from 'react';
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <div className="py-20 bg-purple-600 text-white text-center">
      <h2 className="text-4xl font-semibold mb-8">Ready to Enhance Your Beauty?</h2>
      <Link to="/booking">
        <button className="custom-cta-button">Book an Appointment</button>
      </Link>
    </div>
  );
};

export default CTA;
