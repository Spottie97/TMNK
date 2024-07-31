import React from 'react';

const services = [
  { name: 'Eyebrows', description: 'Perfectly shaped and filled brows.' },
  { name: 'Eyeliner', description: 'Enhance your eyes with our eyeliner services.' },
  { name: 'Lip Blush', description: 'Add color and definition to your lips.' },
];

const ServicesOverview = () => {
  return (
    <div className="py-20 bg-white text-center">
      <h2 className="text-4xl font-semibold mb-10">Our Services</h2>
      <div className="flex flex-wrap justify-center">
        {services.map((service, index) => (
          <div key={index} className="w-1/3 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-2xl font-medium mb-4">{service.name}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesOverview;
