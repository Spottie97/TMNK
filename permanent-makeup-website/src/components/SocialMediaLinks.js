import React from 'react';

const SocialMediaLinks = () => {
  return (
    <div className="py-10 bg-white text-center">
      <h2 className="text-4xl font-semibold mb-4 text-primary">Follow Us</h2>
      <div className="flex justify-center space-x-6">
        <a href="https://www.facebook.com" className="text-blue-600 hover:text-blue-800">Facebook</a>
        <a href="https://www.instagram.com" className="text-pink-600 hover:text-pink-800">Instagram</a>
        <a href="https://www.twitter.com" className="text-blue-400 hover:text-blue-600">Twitter</a>
        <a href="https://www.linkedin.com" className="text-blue-700 hover:text-blue-900">LinkedIn</a>
      </div>
    </div>
  );
};

export default SocialMediaLinks;
