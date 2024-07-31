import React from 'react';
import brows from '../images/brows.jpg';
import eyeliner from '../images/eyeliner.jpg';
import lips from '../images/lips.jpg';

const services = [
  { name: 'Brows', description: 'Perfectly shaped brows to enhance your look.', image: brows },
  { name: 'Eyeliner', description: 'Precision eyeliner to define your eyes.', image: eyeliner },
  { name: 'Lips', description: 'Luscious lips with beautiful color.', image: lips },
];

const ServicesOverview = () => {
  return (
    <div className="py-10 bg-white text-center">
      <h2 className="text-4xl font-semibold mb-10 text-primary">Our Services</h2>
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
              <p className="text-gray-200">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesOverview;
