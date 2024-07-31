import React from 'react';

const SocialMediaLinks = () => {
  return (
    <div className="py-10 bg-lightBg text-center">
      <h2 className="text-4xl font-semibold mb-4">Follow Us</h2>
      <div className="flex justify-center space-x-6">
        <a href="https://www.facebook.com" className="text-blue-600">Facebook</a>
        <a href="https://www.instagram.com" className="text-pink-600">Instagram</a>
        <a href="https://www.twitter.com" className="text-blue-400">Twitter</a>
        <a href="https://www.linkedin.com" className="text-blue-700">LinkedIn</a>
      </div>
    </div>
  );
};

export default SocialMediaLinks;
