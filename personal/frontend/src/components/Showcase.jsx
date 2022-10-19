import React from "react";
import { motion } from "framer-motion";
import kid1 from "../images/kid-1.jpg";
import kid2 from "../images/kid-2.jpg";

const Showcase = () => {
  return (
    <div>
      <div className="mx-[7%] pt-[10%] ">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <motion.div
            initial={{ x: -500 }}
            animate={{ x: 0 }}
            transition={{ ease: "easeOut", duration: 1 }}
            className="grid grid-cols-2 gap-2 h-4/5"
          >
            <div>
              <img
                className="h-full w-full object-cover rounded-md md:h-4/5"
                src={kid1}
                alt="kid1"
              />
            </div>
            <div>
              <img
                className="h-full w-full object-cover rounded-md md:h-4/5"
                src={kid2}
                alt="kid2"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 500 }}
            animate={{ x: 0 }}
            transition={{ ease: "easeOut", duration: 1 }}
            className="ml-5 text-center md:text-start"
          >
            <h1 className="text-4xl font-bold font-['Lobster'] text-gray-700">
              It started in 2018
            </h1>
            <p className="text-gray-800 my-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa
              illo iusto doloribus explicabo commodi cum! Cumque odio voluptatem
              molestias deleniti?
            </p>
            <button className="btn">Read More</button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
