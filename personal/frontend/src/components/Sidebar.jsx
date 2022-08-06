import React, { useState } from "react";
import { MdOutlineNotes, MdOutlineClear } from "react-icons/md";
import { IoHome } from "react-icons/io5";
import { AiFillPicture } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { RiLoginBoxFill, RiLogoutBoxFill } from "react-icons/ri";
import { FaPenAlt } from "react-icons/fa";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const bodyHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div onClick={bodyHandler}>
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white text-2xl top-5 right-10 fixed p-1 bg-green-400 rounded-md z-20"
        >
          <MdOutlineNotes />
        </button>
      ) : (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className=" fixed text-2xl top-5 right-10 text-white  bg-green-400 p-1 rounded-md z-20"
        >
          <MdOutlineClear />
        </button>
      )}
      <div
        className={`top-0 right-0 fixed bg-slate-700 bg-opacity-60 w-[100vw] h-full z-10 md:w-[25vw] md:bg-opacity-50 ${
          isOpen ? " translate-x-0" : "translate-x-full"
        }  ease-in duration-300`}
      >
        <div className="mt-20 flex flex-col">
          <button className="sidebar-btn">
            <IoHome className="sidebar-icon" />
            Home
          </button>
          <button className="sidebar-btn">
            <AiFillPicture className="sidebar-icon" />
            Galley
          </button>
          <button className="sidebar-btn">
            <BsFillInfoCircleFill className="sidebar-icon" />
            About
          </button>
          <button className="sidebar-btn">
            <RiLoginBoxFill className="sidebar-icon" />
            Login
          </button>
          <button className="sidebar-btn">
            <FaPenAlt className="sidebar-icon" />
            Sign Up
          </button>
          <button className="sidebar-btn ">
            <RiLogoutBoxFill className="sidebar-icon" />
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
