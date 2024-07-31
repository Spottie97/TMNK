import React from 'react';

const testimonials = [
  { name: 'Jane Doe', comment: 'Amazing experience, my brows look fantastic!' },
  { name: 'Mary Smith', comment: 'Highly professional and friendly service.' },
];

const Testimonials = () => {
  return (
    <div className="py-20 bg-gray-200 text-center">
      <h2 className="text-4xl font-semibold mb-10">Testimonials</h2>
      {testimonials.map((testimonial, index) => (
        <div key={index} className="mb-8">
          <p className="text-xl italic mb-4">"{testimonial.comment}"</p>
          <h4 className="text-lg font-semibold">- {testimonial.name}</h4>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
