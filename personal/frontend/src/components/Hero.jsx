import React from "react";
import happykids from "../images/happykids.jpg";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className=" w-full h-[100vh] relative">
      <img
        src={happykids}
        alt="family-2"
        className="w-full h-[100vh] object-cover absolute inset-0 "
      />
      <div className="absolute inset-0 bg-slate-900 bg-opacity-50"></div>
      <motion.div
        animate={{ top: 150 }}
        initial={{ top: 500 }}
        transition={{ ease: "easeOut", duration: 0.7 }}
        className="hero"
      >
        <h1 className="text-6xl text-white font-bold pb-2 font-['Lobster']">
          This is Homepage
        </h1>
        <p className="text-lg text-white md:my-4 ">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt et
          magnam molestias debitis, ipsa sapiente. Lorem ipsum dolor sit amet,
          consectetur adipisicing
        </p>
        <button className="btn">Read More</button>
      </motion.div>
    </div>
  );
};

export default Hero;
