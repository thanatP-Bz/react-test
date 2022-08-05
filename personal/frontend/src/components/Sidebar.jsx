import React, { useState } from "react";
import { MdOutlineNotes, MdOutlineClear } from "react-icons/md";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div>
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white text-2xl top-2 right-2 fixed p-1 bg-green-400 rounded-md"
        >
          <MdOutlineNotes />
        </button>
      ) : (
        <div className="top-0 right-0 fixed bg-green-300 w-[25vw] h-full">
          <h2>this is sidebar</h2>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="top-2 right-2 fixed text-2xl text-green-400 bg-white p-1 rounded-md"
          >
            <MdOutlineClear />
          </button>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
