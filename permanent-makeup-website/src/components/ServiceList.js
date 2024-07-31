import React from 'react';

const services = [
  { name: 'Eyebrows', description: 'Microblading and shading', duration: '2 hours', price: '$200' },
  { name: 'Eyeliner', description: 'Permanent eyeliner', duration: '1.5 hours', price: '$150' },
  { name: 'Lip Blush', description: 'Enhance lip color', duration: '2 hours', price: '$250' },
];

const ServiceList = () => {
  return (
    <div className="py-10 bg-lightBg text-center">
      <h2 className="text-4xl font-semibold mb-4">Available Services</h2>
      <div className="flex flex-wrap justify-center">
        {services.map((service, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/3 p-4">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-2xl font-medium mb-2">{service.name}</h3>
              <p className="text-gray-600 mb-2">{service.description}</p>
              <p className="text-gray-600 mb-2">Duration: {service.duration}</p>
              <p className="text-primary font-semibold">{service.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceList;
