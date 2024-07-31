import React from 'react';

const portfolioImages = [
  { before: 'before1.jpg', after: 'after1.jpg', description: 'Eyebrows' },
  { before: 'before2.jpg', after: 'after2.jpg', description: 'Eyeliner' },
  { before: 'before3.jpg', after: 'after3.jpg', description: 'Lip Blush' },
];

const Portfolio = () => {
  return (
    <div className="py-10 bg-lightBg text-center">
      <h2 className="text-4xl font-semibold mb-4 text-primary">Portfolio</h2>
      <div className="flex flex-wrap justify-center">
        {portfolioImages.map((image, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/3 p-4">
            <div className="p-4 bg-white rounded-lg shadow-md">
              <h3 className="text-2xl font-medium mb-4 text-darkText">{image.description}</h3>
              <div className="flex flex-col md:flex-row justify-center items-center">
                <img src={image.before} alt={`${image.description} Before`} className="w-full md:w-1/2 p-2"/>
                <img src={image.after} alt={`${image.description} After`} className="w-full md:w-1/2 p-2"/>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
