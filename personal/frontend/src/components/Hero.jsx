import React from "react";
import familyImg from "../images/family-2.jpg";

const Hero = () => {
  return (
    <div className=" w-full h-[100vh] relative">
      <img
        src={familyImg}
        alt="family-2"
        className="w-full h-[100vh] object-cover absolute inset-0 "
      />
      <div className="absolute inset-0 bg-slate-900 bg-opacity-50"></div>
      <div className="hero">
        <h1 className="text-6xl text-white font-bold pb-2 font-['Lobster']">
          This is Homepage
        </h1>
        <p className="text-lg text-white md:my-4 ">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt et
          magnam molestias debitis, ipsa sapiente. Lorem ipsum dolor sit amet,
          consectetur adipisicing
        </p>
        <button className="btn">Read More</button>
      </div>
    </div>
  );
};

export default Hero;