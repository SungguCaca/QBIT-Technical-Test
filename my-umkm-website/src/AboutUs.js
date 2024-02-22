import React from "react";
import Navbar from "./Navbar";

const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-gray-200 min-h-screen flex flex-col items-center justify-center p-4 lg:p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl lg:text-4xl font-medium mb-5 text-center">
            Welcome to Lokamart
          </h1>
          <h2 className="text-base lg:text-lg mb-5 text-center">
            Welcome to Farm Fresh, an MSME e-commerce platform for fresh
            products directly from local farmers. Farm Fresh is part of the MSME
            (Micro, Small and Medium Enterprises) e-commerce application that
            allows MSMEs to sell their products online through a digital
            platform. The background of this MSME e-commerce application comes
            from the increasing number of internet users and changes in consumer
            behavior that are increasingly inclined to buy products online. This
            creates an opportunity for MSMEs to market their products more
            effectively and reach a wider market.
          </h2>
          <h1 className="text-2xl lg:text-4xl font-medium mb-10 text-center">
            What We Provide?
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="bg-green-500 border border-gray-200 shadow-lg rounded-lg p-6">
              <h5 className="text-2xl font-semibold mb-2 text-center tracking-tight">
                <span className="text-secondary">
                  Fresh Produce from Local Farmers
                </span>
              </h5>
              <p className="text-center font-normal">
                We offer a wide range of fresh and quality plantation products
                directly from local farmers. By buying from Lokamart, you not
                only support local MSMEs, but also get fresh products at the
                best prices and attractive offers.
              </p>
            </div>
            <div className="bg-green-500 border border-gray-200 shadow-lg rounded-lg p-6">
              <h5 className="text-2xl font-semibold mb-2 text-center tracking-tight">
                <span className="text-secondary">
                  Best Quality & Special Offers
                </span>
              </h5>
              <p className="text-center font-normal">
                There is a wide variety of vegetables, fruits and other
                agricultural products, At Farm Fresh, we are always committed to
                providing the best quality and special offers to our customers.
                We ensure that every product you buy at Farm Fresh provides
                maximum value for your money.
              </p>
            </div>
            <div className="bg-green-500 border border-gray-200 shadow-lg rounded-lg p-6">
              <h5 className="text-2xl font-semibold mb-2 text-center tracking-tight">
                <span className="text-secondary">Price & Offers</span>
              </h5>
              <p className="text-center font-normal">
                There are many variations of passages of lorem ipsum available,
                but the majority have suffered alteration in some form
              </p>
            </div>
            <div className="bg-green-500 border border-gray-200 shadow-lg rounded-lg p-6">
              <h5 className="text-2xl font-semibold mb-2 text-center tracking-tight">
                <span className="text-secondary">Local MSME Support</span>
              </h5>
              <p className="text-center font-normal">
                By shopping at Farm Fresh, you are also supporting the growth of
                local MSMEs. We believe that MSMEs are the backbone of the local
                economy, and by purchasing products from them, you are
                contributing to improving the welfare of local communities and
                helping to strengthen the regional economy.
              </p>
            </div>
            <div className="bg-green-500 border border-gray-200 shadow-lg rounded-lg p-6">
              <h5 className="text-2xl font-semibold mb-2 text-center tracking-tight">
                <span className="text-secondary">
                  Attractive Promos and Discounts
                </span>
              </h5>
              <p className="text-center font-normal">
                Get attractive promos and discounts every time at Farm Fresh. We
                regularly offer special deals and discounts to provide added
                value to our customers. Don't miss the opportunity to save money
                and get quality products at affordable prices.
              </p>
            </div>
            <div className="bg-green-500 border border-gray-200 shadow-lg rounded-lg p-6">
              <h5 className="text-2xl font-semibold mb-2 text-center tracking-tight">
                <span className="text-secondary">Easy Online Shopping</span>
              </h5>
              <p className="text-center font-normal">
                Enjoy the convenience of shopping for fresh produce from local
                farmers without having to leave the house. With Farm Fresh's
                digital platform, you can explore a wide selection of products
                and make purchases quickly and easily.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
