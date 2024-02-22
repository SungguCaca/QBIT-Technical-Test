import React from 'react';
import logo from './assets/logo.png';

const Product = () => {
  return (
    <div className="bg-gray-200 min-h-screen flex flex-col items-center justify-center p-4 lg:p-8">
      <Navbar />

      <div className="container mx-auto">
        <h1 className="text-2xl lg:text-4xl font-medium mb-5 text-center">WHAT WE DO</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          <div className="bg-white border border-gray-200 shadow-lg rounded-lg p-6">
            <img src={logo} alt="Technology Services" className="w-24 h-24 mb-4 mx-auto" />
            <h2 className="text-lg font-semibold text-center mb-2">Technology Services</h2>
            <p className="text-sm text-gray-600">Penatibus vivamus amet. Mi vel lobortis etiam metus dis lacinia aliquam consequat sapien. Nunc nostra cubilia imperdiet consequat. Nulla parturient nostra integer.</p>
          </div>
          <div className="bg-white border border-gray-200 shadow-lg rounded-lg p-6">
            <img src={logo} alt="Economic Services" className="w-24 h-24 mb-4 mx-auto" />
            <h2 className="text-lg font-semibold text-center mb-2">Economic Services</h2>
            <p className="text-sm text-gray-600">Penatibus vivamus amet. Mi vel lobortis etiam metus dis lacinia aliquam consequat sapien. Nunc nostra cubilia imperdiet consequat. Nulla parturient nostra integer.</p>
          </div>
          <div className="bg-white border border-gray-200 shadow-lg rounded-lg p-6">
            <img src={logo} alt="Business Services" className="w-24 h-24 mb-4 mx-auto" />
            <h2 className="text-lg font-semibold text-center mb-2">Business Services</h2>
            <p className="text-sm text-gray-600">Penatibus vivamus amet. Mi vel lobortis etiam metus dis lacinia aliquam consequat sapien. Nunc nostra cubilia imperdiet consequat. Nulla parturient nostra integer.</p>
          </div>
          <div className="bg-white border border-gray-200 shadow-lg rounded-lg p-6">
            <img src={logo} alt="Real Estate Services" className="w-24 h-24 mb-4 mx-auto" />
            <h2 className="text-lg font-semibold text-center mb-2">Real Estate Services</h2>
            <p className="text-sm text-gray-600">Penatibus vivamus amet. Mi vel lobortis etiam metus dis lacinia aliquam consequat sapien. Nunc nostra cubilia imperdiet consequat. Nulla parturient nostra integer.</p>
          </div>
          <div className="bg-white border border-gray-200 shadow-lg rounded-lg p-6">
            <img src={logo} alt="Industrial Services" className="w-24 h-24 mb-4 mx-auto" />
            <h2 className="text-lg font-semibold text-center mb-2">Industrial Services</h2>
            <p className="text-sm text-gray-600">Penatibus vivamus amet. Mi vel lobortis etiam metus dis lacinia aliquam consequat sapien. Nunc nostra cubilia imperdiet consequat. Nulla parturient nostra integer.</p>
          </div>
          <div className="bg-white border border-gray-200 shadow-lg rounded-lg p-6">
            <img src={logo} alt="Security Services" className="w-24 h-24 mb-4 mx-auto" />
            <h2 className="text-lg font-semibold text-center mb-2">Security Services</h2>
            <p className="text-sm text-gray-600">Penatibus vivamus amet. Mi vel lobortis etiam metus dis lacinia aliquam consequat sapien. Nunc nostra cubilia imperdiet consequat. Nulla parturient nostra integer.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
