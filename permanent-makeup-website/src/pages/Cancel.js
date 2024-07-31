import React from 'react';
import { Link } from 'react-router-dom';

const Cancel = () => {
  return (
    <div className="py-10 bg-lightBg text-center">
      <h2 className="text-4xl font-semibold mb-4">Payment Unsuccessful</h2>
      <p>Unfortunately, your payment could not be processed. Please try again or cancel your booking.</p>
      <div className="mt-4">
        <Link to="/booking">
          <button className="bg-primary text-lightText px-4 py-2 rounded hover:bg-secondary">
            Try Again
          </button>
        </Link>
        <Link to="/">
          <button className="bg-gray-500 text-lightText px-4 py-2 rounded hover:bg-gray-600 ml-4">
            Cancel Booking
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Cancel;
