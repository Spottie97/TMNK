import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('your-publishable-key-here');

const services = [
  { name: 'Eyebrow Perfection', priceId: 'price_eyebrow', duration: 2 },
  { name: 'Eyeliner Enhancement', priceId: 'price_eyeliner', duration: 1.5 },
  { name: 'Lip Blush', priceId: 'price_lip', duration: 2 },
];

const BookingForm = ({ availableTimes }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedService, setSelectedService] = useState(services[0]);
  const [time, setTime] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const stripe = await stripePromise;

    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          priceId: selectedService.priceId,
          serviceName: selectedService.name,
          time,
        }),
      });

      const session = await response.json();

      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      });

      if (result.error) {
        console.error(result.error.message);
      }
    } catch (error) {
      console.error('Error creating checkout session:', error);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-4xl font-semibold mb-4 text-primary text-center">Book Your Appointment</h2>
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
          <select
            className="w-full px-3 py-2 border rounded"
            id="service"
            value={selectedService.name}
            onChange={(e) => {
              const service = services.find(s => s.name === e.target.value);
              setSelectedService(service);
            }}
          >
            {services.map((service, index) => (
              <option key={index} value={service.name}>
                {service.name}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="time">
            Available Times
          </label>
          <select
            className="w-full px-3 py-2 border rounded"
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          >
            {availableTimes.map((timeSlot, index) => (
              <option key={index} value={timeSlot}>{timeSlot}</option>
            ))}
          </select>
        </div>
        <div className="flex justify-center">
          <button
            className="bg-primary text-lightText px-4 py-2 rounded hover:bg-secondary"
            type="submit"
          >
            Book and Pay
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
