import React from 'react';
import logo from './assets/logo.png';

const LandingPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center relative">
      {/* Header */}
      <div className="absolute top-0 left-0 p-4 flex items-center">
        <img src={logo} alt="Logo" className="w-8 h-8 mr-2" />
        <div className="ml-auto">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-2">About Us</button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Contact Us</button>
        </div>
      </div>

      {/* Content */}
      <div className="text-center">
        <h1 className="text-4xl font-bold">Welcome to Our UMKM</h1>
        <p className="text-green-500">Fresh</p>
        <p className="text-black">from the field</p>
      </div>

      {/* Image */}
      <div className="absolute top-0 right-0 p-4">
        <img src="./assets/bg1.jpg" alt="Image" className="w-64 h-auto" />
      </div>
    </div>
  );
}

export default LandingPage;
