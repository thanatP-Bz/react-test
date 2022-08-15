import React, { useState } from "react";
import { Link } from "react-router-dom";

//icon
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
          className="text-white text-2xl p-1 bg-green-400 rounded-md z-20"
        >
          <MdOutlineNotes />
        </button>
      ) : (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className=" text-2xl  text-white  bg-green-400 p-1 rounded-md z-20"
        >
          <MdOutlineClear />
        </button>
      )}
      <div
        className={`top-[11%] right-0 fixed bg-slate-700 bg-opacity-60 w-[100vw] h-full z-10 md:w-[25vw] md:bg-opacity-50 ${
          isOpen ? " translate-x-0" : "translate-x-full"
        }  ease-in duration-300`}
      ></div>
    </div>
  );
};

export default Sidebar;
