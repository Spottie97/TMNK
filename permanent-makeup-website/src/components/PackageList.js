import React from 'react';
import PackageItem from './PackageItem';

const packages = [
  {
    name: 'Complete Makeover',
    description: 'Full package including eyebrows, eyeliner, and lip blush.',
    price: '$500',
    image: '/images/complete-makeover.jpg', // Replace with actual image paths
    offer: 'Save $100 if booked this month!',
  },
  {
    name: 'Eyebrow Perfection',
    description: 'Perfectly shaped and styled eyebrows.',
    price: '$200',
    image: '/images/eyebrow-perfection.jpg',
    offer: null,
  },
  {
    name: 'Eyeliner Enhancement',
    description: 'Enhance your eyes with our professional eyeliner service.',
    price: '$150',
    image: '/images/eyeliner-enhancement.jpg',
    offer: 'Special offer: 10% off!',
  },
  // Add more packages as needed
];

const PackageList = () => {
  return (
    <div className="py-10 bg-lightBg text-center">
      <h2 className="text-4xl font-semibold mb-4 text-primary">Our Packages</h2>
      <div className="flex flex-wrap justify-center">
        {packages.map((pkg, index) => (
          <PackageItem key={index} {...pkg} />
        ))}
      </div>
    </div>
  );
};

export default PackageList;
