import React from 'react';

const GoogleMap = () => {
  return (
    <div className="py-10 bg-lightBg text-center">
      <h2 className="text-4xl font-semibold mb-4">Our Location</h2>
      <div className="mx-auto max-w-4xl">
        <iframe
          src="https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=123+Main+Street,City,Country"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default GoogleMap;
