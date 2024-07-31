import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('your-publishable-key-here');

const BookingForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('');
  const [priceId, setPriceId] = useState('price_xxx'); // Replace with actual price ID

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Save booking information if needed (e.g., to a database or state management)
    const bookingData = {
      name,
      email,
      service,
      // Add more data if needed, like selected date
    };

    // Proceed to Stripe Checkout
    const stripe = await stripePromise;
    const response = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ priceId, serviceName: service }),
    });

    const session = await response.json();

    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      console.error(result.error.message);
    }
  };

  return (
    <div className="py-10 bg-lightBg text-center">
      <h2 className="text-4xl font-semibold mb-4">Book Your Appointment</h2>
      <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="w-full px-3 py-2 border rounded"
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="w-full px-3 py-2 border rounded"
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="service">
            Service
          </label>
          <input
            className="w-full px-3 py-2 border rounded"
            id="service"
            type="text"
            value={service}
            onChange={(e) => setService(e.target.value)}
          />
        </div>
        <button
          className="bg-primary text-lightText px-4 py-2 rounded hover:bg-secondary"
          type="submit"
        >
          Book and Pay
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
