import React from 'react';
import brows from '../images/brows.jpg'; // Replace with actual paths
import eyeliner from '../images/eyeliner.jpg';
import lips from '../images/lips.jpg';

const services = [
  {
    name: 'Eyebrow Perfection',
    description: 'Perfectly shaped and styled eyebrows.',
    duration: '2 hours',
    price: '$200',
    image: brows,
  },
  {
    name: 'Eyeliner Enhancement',
    description: 'Enhance your eyes with professional eyeliner.',
    duration: '1.5 hours',
    price: '$150',
    image: eyeliner,
  },
  {
    name: 'Lip Blush',
    description: 'Add color and definition to your lips.',
    duration: '2 hours',
    price: '$250',
    image: lips,
  },
];

const ServiceList = () => {
  return (
    <div className="py-10 bg-lightBg text-center">
      <h2 className="text-4xl font-semibold mb-4 text-primary">Available Services</h2>
      <div className="flex flex-wrap justify-center">
        {services.map((service, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 md:w-1/3 p-4 bg-cover bg-center"
            style={{
              backgroundImage: `url(${service.image})`,
            }}
          >
            <div className="bg-black bg-opacity-50 p-6 rounded-lg">
              <h3 className="text-2xl font-medium mb-4 text-white">{service.name}</h3>
              <p className="text-gray-200 mb-2">{service.description}</p>
              <p className="text-gray-200 mb-2">Duration: {service.duration}</p>
              <p className="text-green-500 font-bold">{service.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceList;
