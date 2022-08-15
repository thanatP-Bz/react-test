import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-600 text-white px-[7%] py-5 flex items-center justify-center flex-col text-center md:text-start">
      <h1 className="text-2xl mb-4 font-['Lobster']">LOGO</h1>

      <div className="w-[80%] h-[1px] mx-auto my-2 bg-white"></div>
      <p className="p-2 mb-2 md:mb-0 text-sm">
        This website is personal please do not copy any pictures without
        permission from the family
      </p>
      <p className="text-sm">
        Copyright @2022 All Right Reserved. This website created by Benz
      </p>
    </div>
  );
};

export default Footer;
