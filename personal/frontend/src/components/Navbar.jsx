import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./logo/Logo";
import SmallLogo from "./logo/SmallLogo";
import SmallNavbar from "./navbar/SmallNavbar";
import ProfileNav from "./navbar/ProfileNav";
import { MdOutlineNotes, MdOutlineClear } from "react-icons/md";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <nav className="bg-gray-700 w-[100vw] py-3 fixed top-0 left-0 z-20 ">
        <div className="flex justify-between mx-[7%]">
          <div className="flex relative">
            {/* button small screen */}

            {isOpen ? (
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white text-xl h-9 w-9 flex items-center justify-center bg-[#10ac84] rounded-md z-20 mr-4  md:hidden "
              >
                <MdOutlineClear />
              </button>
            ) : (
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white text-xl h-9 w-9  flex items-center justify-center bg-[#10ac84]  rounded-md z-20 mr-4 md:hidden"
              >
                <MdOutlineNotes />
              </button>
            )}

            {/* logo */}
            <Logo />

            {/* menu link */}
            <div className="ml-10 mt-2 hidden space-x-4 md:block">
              <Link to="/">
                <button className=" text-white font-bold hover:text-green-400">
                  Home
                </button>
              </Link>
              <Link to="/gallery">
                <button className=" text-white font-bold hover:text-green-400">
                  Gallery
                </button>
              </Link>
              <Link to="/about">
                <button className=" text-white font-bold hover:text-green-400">
                  About
                </button>
              </Link>
            </div>
          </div>

          {/* menu link  small screen*/}
          <SmallNavbar isOpen={isOpen} />

          {/* logo small screen */}
          <SmallLogo />

          {/* profile */}
          <ProfileNav />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
