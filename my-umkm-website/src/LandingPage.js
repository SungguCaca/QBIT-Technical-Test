import React from "react";
import Navbar from "./Navbar";
import farms from "./assets/farms.png";
import bg1 from "./assets/bg1.png";
import m1 from "./assets/1.png";
import m2 from "./assets/2.png";
import m3 from "./assets/3.png";
import m4 from "./assets/4.png";
import m5 from "./assets/5.png";
import m6 from "./assets/6.png";

const LandingPage = () => {
  return (
    <div className="bg-green min-h-screen flex flex-col justify-center items-center relative">
      <Navbar />
      <div id="utama" className="mt-12 h-[37rem] z-10">
        {" "}
        <div className="text-center flex flex-col lg:flex-row lg:justify-between my-20">
          <div className="lg:self-start my-32 mr-12 ">
            <p className="text-6xl font-bold text-secondary">
              FRESH <span className="text-black">FROM</span>
            </p>
            <p className="text-6xl font-bold">
              <span className="text-black">THE</span> FIELD
            </p>

            <p className="text-md text-black">
              Provide fresh produce everyday, delivery direct to your home
            </p>
          </div>
          <div>
            <img
              src={bg1}
              alt="Bg1"
              className="w-full lg:max-w-2xl md:max-w-lg sm:max-w-sm mt-4"
            />
          </div>
        </div>
      </div>

      <div
        id="menu"
        className="w-full md:w-8/12 h-20 bg-white flex justify-center items-center rounded-full shadow-md mt-10 z-50"
      >
        <ul className="flex justify-center items-center text-white ">
          <li className="mx-2 w-1/4">
            <img src={m1} alt="1"  />
          </li>
          <li className="mx-2 w-1/6">
            <img src={m2} alt="2" />
          </li>
          <li className="mx-2 w-1/3">
            <img src={m3} alt="3" />
          </li>
          <li className="mx-2 w-2/4">
            <img src={m4} alt="4" />
          </li>
          <li className="mx-2 w-2/4">
            <img src={m5} alt="5" />
          </li>
          <li className="mx-2 w-1/4">
            <img src={m6} alt="6" />
          </li>
        </ul>
      </div>

      <div className="bg-white flex flex-col lg:flex-row h-[32rem] mt-[-2rem] py-20 px-10 h-96">
        <div className="lg:w-1/2">
          <div className="mb-8 lg:mb-0">
            <p className="text-3xl font-bold text-secondary">
              WE <span className="text-black">ARE</span>
            </p>
            <p className=" text-gray-700">
              <p className="text-3xl font-bold text-secondary">
                What{" "}
                <span className="text-base text-black font-normal">
                  started as a small operation between neighbours become a big
                  farmer family in our area with 70 farmers. We deliver our
                  products across the state and country. We also cooperate with
                  many farmers around the world.
                </span>
              </p>
            </p>
            <a href="#" target="_self" className="btn btn-md btn-primary mt-4">
              more detail
            </a>
          </div>
        </div>
        <div className="lg:w-1/2 flex justify-center items-center">
          <img src={farms} alt="6" className="w-7/12 md:w-6/12 lg:w-8/12" />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
