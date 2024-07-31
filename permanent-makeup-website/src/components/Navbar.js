import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-darkBg p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lightText text-xl font-bold">
          <Link to="/">TMRK</Link>
        </div>
        <div className="flex space-x-4">
          <Link to="/" className="text-lightText hover:text-secondary">Home</Link>
          <Link to="/about" className="text-lightText hover:text-secondary">About</Link>
          <Link to="/packages" className="text-lightText hover:text-secondary">Packages</Link>
          <Link to="/booking" className="text-lightText hover:text-secondary">Booking</Link>
          <Link to="/contact" className="text-lightText hover:text-secondary">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
