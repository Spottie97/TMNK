import React from 'react';

const services = [
  { name: 'Eyebrows', description: 'Perfectly shaped and filled brows.' },
  { name: 'Eyeliner', description: 'Enhance your eyes with our eyeliner services.' },
  { name: 'Lip Blush', description: 'Add color and definition to your lips.' },
];

const ServicesOverview = () => {
  return (
    <div className="services-overview">
      <h2>Our Services</h2>
      <div className="services-list">
        {services.map((service, index) => (
          <div key={index} className="service-item">
            <h3>{service.name}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesOverview;
