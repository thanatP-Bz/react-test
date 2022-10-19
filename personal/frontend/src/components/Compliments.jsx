import React from "react";
import { motion } from "framer-motion";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { FaHandsHelping } from "react-icons/fa";
import { RiEmotionHappyFill } from "react-icons/ri";

const Compliments = () => {
  return (
    <div className="bg-gray-100 py-[1%]">
      <div className="mx-[7%] my-[5%]">
        <motion.div
          initial={{ y: 500 }}
          animate={{ y: 0 }}
          transition={{ ease: "easeOut", duration: 1 }}
          className="grid grid-cols-1 bg-white p-5 rounded-md shadow-lg md:grid-cols-3"
        >
          <div className="p-5">
            <div className="flex">
              <BsFillSuitHeartFill className="com-icon" />
              <h1 className="com-header-1 font-['Lobster']">Kindness</h1>
            </div>
            <p className="mt-4 text-gray-800">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi,
              exercitationem.
            </p>
          </div>
          <div className="p-5">
            <div className="flex">
              <FaHandsHelping className="com-icon" />
              <h1 className="com-header-1 font-['Lobster']">Fair</h1>
            </div>
            <p className="mt-4 text-gray-800">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi,
              exercitationem.
            </p>
          </div>
          <div className="p-5">
            <div className="flex">
              <RiEmotionHappyFill className="com-icon" />
              <h1 className="com-header-1 font-['Lobster']">Kindness</h1>
            </div>
            <p className="mt-4 text-gray-800">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi,
              exercitationem.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Compliments;
