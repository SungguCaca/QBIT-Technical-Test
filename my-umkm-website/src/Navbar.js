import React from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/logo.png';

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 p-2 bg-green flex justify-between items-center">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="w-25 h-16 ml-6" />
      </div>
      <div className="flex font-semibold">
        <Link to="/" className="text-black mr-4">Home</Link>
        <Link to="/about" className="text-black mr-4">About Us</Link>
        <Link to="/contact" className="text-black mr-4">Contact Us</Link>
        <Link to="/product" className="text-black mr-6">Product</Link>
      </div>
    </div>
  );
}

export default Navbar;
