import React from "react";
import { FaReact } from "react-icons/fa";
import { DiNodejsSmall } from "react-icons/di";
import { SiExpress, SiMongodb, SiTailwindcss } from "react-icons/si";

const Technology = () => {
  return (
    <div className="bg-gray-100 p-[10px]">
      <div className="mx-[7%] my-[7%]">
        <h1 className="text-4xl font font-['Lobster'] text-center mb-10 p-2 text-gray-700">
          Programming Languages for creating this website
        </h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          <button className="tech-box">
            <FaReact className="tech-icon text-[#61dbfd]" />
            <h1 className="p-2">React.Js</h1>
          </button>
          <button className="tech-box">
            <DiNodejsSmall className="tech-icon text-[#68a063]" />
            <h1 className="p-2">Node.Js</h1>
          </button>
          <button className="tech-box">
            <SiExpress className="tech-icon text-[#f0db4f]" />
            <h1 className="p-2">Express.Js</h1>
          </button>
          <button className="tech-box">
            <SiMongodb className="tech-icon text-[#4db33d]" />
            <h1 className="p-2">MongoDB</h1>
          </button>
          <button className="tech-box">
            <SiTailwindcss className="tech-icon text-[#2fb9c6]" />
            <h1 className="p-2">TailwindCSS</h1>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Technology;
