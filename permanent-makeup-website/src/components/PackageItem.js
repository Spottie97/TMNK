import React from 'react';

const PackageItem = ({ name, description, price, image, offer }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      <img className="w-full" src={image} alt={name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">{description}</p>
        {offer && <p className="text-red-500 font-bold mt-2">{offer}</p>}
        <p className="text-green-500 font-bold mt-2">{price}</p>
      </div>
    </div>
  );
};

export default PackageItem;
