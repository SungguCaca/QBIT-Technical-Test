import React from "react";
import Navbar from "./Navbar";
import carrot from "./assets/carrot.jpg";
import tomato from "./assets/tomato.jpg";
import cucumber from "./assets/cucumber.jpg";
import lettuce from "./assets/lettuce.jpg";
import broccoli from "./assets/broccoli.jpg";
import spinach from "./assets/spinach.jpg";

const Product = () => {
  return (
    <div className="bg-gray-200 min-h-screen flex flex-col items-center justify-center p-4 lg:p-8">
      <Navbar />

      <div className="container mx-auto">
        <h1 className="text-2xl lg:text-4xl font-medium mb-5 text-center">
          Variety of Vegetables
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          <div className="bg-white border border-gray-200 shadow-lg rounded-lg p-6">
            <img src={carrot} alt="Carrot" className="w-24 h-24 mb-4 mx-auto" />
            <h2 className="text-lg font-semibold text-center mb-2">Carrot</h2>
            <p className="text-sm text-gray-600">
              Carrots are rich in vitamin A and fiber. They are known for
              promoting good eyesight and supporting a healthy digestive system.
              Price: Rp 5000/kg
            </p>
          </div>
          <div className="bg-white border border-gray-200 shadow-lg rounded-lg p-6">
            <img src={tomato} alt="Tomato" className="w-24 h-24 mb-4 mx-auto" />
            <h2 className="text-lg font-semibold text-center mb-2">Tomato</h2>
            <p className="text-sm text-gray-600">
              Tomatoes are packed with vitamin C and antioxidants. They are
              beneficial for skin health and may reduce the risk of certain
              diseases. Price: Rp 7000/kg
            </p>
          </div>
          <div className="bg-white border border-gray-200 shadow-lg rounded-lg p-6">
            <img
              src={cucumber}
              alt="Cucumber"
              className="w-24 h-24 mb-4 mx-auto"
            />
            <h2 className="text-lg font-semibold text-center mb-2">Cucumber</h2>
            <p className="text-sm text-gray-600">
              Cucumbers are hydrating and low in calories. They are refreshing
              and make a great addition to salads and sandwiches. Price: Rp
              4000/kg
            </p>
          </div>
          <div className="bg-white border border-gray-200 shadow-lg rounded-lg p-6">
            <img
              src={lettuce}
              alt="Lettuce"
              className="w-24 h-24 mb-4 mx-auto"
            />
            <h2 className="text-lg font-semibold text-center mb-2">Lettuce</h2>
            <p className="text-sm text-gray-600">
              Lettuce is a leafy green vegetable rich in fiber and vitamin K.
              It's commonly used in salads and wraps. Price: Rp 6000/kg
            </p>
          </div>
          <div className="bg-white border border-gray-200 shadow-lg rounded-lg p-6">
            <img
              src={broccoli}
              alt="Broccoli"
              className="w-24 h-24 mb-4 mx-auto"
            />
            <h2 className="text-lg font-semibold text-center mb-2">Broccoli</h2>
            <p className="text-sm text-gray-600">
              Broccoli is high in vitamin C and contains sulforaphane, a
              compound with potential health benefits. Price: Rp 8000/kg
            </p>
          </div>
          <div className="bg-white border border-gray-200 shadow-lg rounded-lg p-6">
            <img
              src={spinach}
              alt="Spinach"
              className="w-24 h-24 mb-4 mx-auto"
            />
            <h2 className="text-lg font-semibold text-center mb-2">Spinach</h2>
            <p className="text-sm text-gray-600">
              Spinach is a dark leafy green vegetable rich in iron and vitamin
              A. It's versatile and can be used in various dishes. Price: Rp
              5500/kg
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
