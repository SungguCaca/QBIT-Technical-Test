import React from 'react';
import Navbar from "./Navbar";
import carrot from './assets/carrot.jpg';
import tomato from './assets/tomato.jpg';
import cucumber from './assets/cucumber.jpg';
import lettuce from './assets/lettuce.jpg';
import broccoli from './assets/broccoli.jpg';
import spinach from './assets/spinach.jpg';

const Product = () => {
  return (
    <div className="bg-gray-200 min-h-screen flex flex-col items-center justify-center p-4 lg:p-8">
      <Navbar />

      <div className="container mx-auto">
        <h1 className="text-2xl lg:text-4xl font-medium mb-5 text-center">MACAM-MACAM SAYURAN</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          <div className="bg-white border border-gray-200 shadow-lg rounded-lg p-6">
            <img src={carrot} alt="Carrot" className="w-24 h-24 mb-4 mx-auto" />
            <h2 className="text-lg font-semibold text-center mb-2">Wortel</h2>
            <p className="text-sm text-gray-600">Sayuran yang kaya akan vitamin A dan serat. Harga: Rp 5000/kg</p>
          </div>
          <div className="bg-white border border-gray-200 shadow-lg rounded-lg p-6">
            <img src={tomato} alt="Tomato" className="w-24 h-24 mb-4 mx-auto" />
            <h2 className="text-lg font-semibold text-center mb-2">Tomat</h2>
            <p className="text-sm text-gray-600">Buah yang kaya akan vitamin C dan antioksidan. Harga: Rp 7000/kg</p>
          </div>
          <div className="bg-white border border-gray-200 shadow-lg rounded-lg p-6">
            <img src={cucumber} alt="Cucumber" className="w-24 h-24 mb-4 mx-auto" />
            <h2 className="text-lg font-semibold text-center mb-2">Timun</h2>
            <p className="text-sm text-gray-600">Sayuran yang mengandung banyak air dan rendah kalori. Harga: Rp 4000/kg</p>
          </div>
          <div className="bg-white border border-gray-200 shadow-lg rounded-lg p-6">
            <img src={lettuce} alt="Lettuce" className="w-24 h-24 mb-4 mx-auto" />
            <h2 className="text-lg font-semibold text-center mb-2">Selada</h2>
            <p className="text-sm text-gray-600">Sayuran hijau yang kaya akan serat dan vitamin K. Harga: Rp 6000/kg</p>
          </div>
          <div className="bg-white border border-gray-200 shadow-lg rounded-lg p-6">
            <img src={broccoli} alt="Broccoli" className="w-24 h-24 mb-4 mx-auto" />
            <h2 className="text-lg font-semibold text-center mb-2">Brokoli</h2>
            <p className="text-sm text-gray-600">Sayuran yang mengandung banyak vitamin C dan sulforaphane. Harga: Rp 8000/kg</p>
          </div>
          <div className="bg-white border border-gray-200 shadow-lg rounded-lg p-6">
            <img src={spinach} alt="Spinach" className="w-24 h-24 mb-4 mx-auto" />
            <h2 className="text-lg font-semibold text-center mb-2">Bayam</h2>
            <p className="text-sm text-gray-600">Sayuran hijau gelap yang kaya akan zat besi dan vitamin A. Harga: Rp 5500/kg</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
