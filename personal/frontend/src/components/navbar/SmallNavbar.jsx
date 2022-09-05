import React from "react";
import { Link } from "react-router-dom";

const SmallNavbar = ({ isOpen }) => {
  return (
    <div
      className={`fixed top-[68px] left-0 w-full ${
        !isOpen ? "hidden" : "block"
      } duration-700 ease-out `}
    >
      <div className="flex flex-col items-center bg-gray-600 md:hidden">
        <Link to="/">
          <button className=" text-white font-bold py-4 hover:text-green-400 text-center">
            Home
          </button>
        </Link>
        <Link to="/gallery">
          <button className=" text-white font-bold py-4 hover:text-green-400  text-center">
            Gallery
          </button>
        </Link>
        <Link to="/about">
          <button className=" text-white font-bold py-4 hover:text-green-400 w-full text-center">
            About
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SmallNavbar;
