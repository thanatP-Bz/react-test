import React from "react";
import familyImg from "../images/family-2.jpg";

const Hero = () => {
  return (
    <div className=" w-full h-screen relative overflow-hidden">
      <img
        src={familyImg}
        alt="family-2"
        className="w-full h-full object-cover absolute inset-0"
      />
      <div className="absolute inset-0 bg-slate-900 bg-opacity-50"></div>
      <div className="top-[30%] left-[0] relative h-full max-w-sm text-center md:max-w-xl md:left-[7%] md:text-start">
        <h1 className="text-6xl text-white font-bold pb-2">This is Homepage</h1>
        <p className="text-lg text-white my-4 ">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt et
          magnam molestias debitis, ipsa sapiente. Lorem ipsum dolor sit amet,
          consectetur adipisicing
        </p>
        <button className="text-lg my-5 py-2 px-7 text-white rounded-md bg-green-400 hover:bg-green-500">
          Read More
        </button>
      </div>
    </div>
  );
};

export default Hero;
