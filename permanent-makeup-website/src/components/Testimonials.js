import React from 'react';

const testimonials = [
  { name: 'Jane Doe', comment: 'Amazing experience, my brows look fantastic!' },
  { name: 'Mary Smith', comment: 'Highly professional and friendly service.' },
];

const Testimonials = () => {
  return (
    <div className="testimonials">
      <h2>Testimonials</h2>
      {testimonials.map((testimonial, index) => (
        <div key={index} className="testimonial-item">
          <p>"{testimonial.comment}"</p>
          <h4>- {testimonial.name}</h4>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
