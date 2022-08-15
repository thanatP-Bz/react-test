import React from "react";

const SmallNavbar = ({ isOpen }) => {
  return (
    <div
      className={`fixed top-[68px] left-0 w-full ${
        !isOpen ? "hidden" : "block"
      } duration-700 ease-out `}
    >
      <div className="flex flex-col items-center bg-gray-600 md:hidden">
        <a
          className=" text-white font-bold py-4 hover:bg-green-400 w-full text-center"
          href="/home"
        >
          Home
        </a>
        <a
          className=" text-white font-bold py-4 hover:bg-green-400 w-full text-center"
          href="/Gallery"
        >
          Gallery
        </a>
        <a
          className=" text-white font-bold py-4 hover:bg-green-400 w-full text-center"
          href="/About"
        >
          About
        </a>
      </div>
    </div>
  );
};

export default SmallNavbar;
