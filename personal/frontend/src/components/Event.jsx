import React from "react";
import { motion } from "framer-motion";
import eventImg from "../images/event.jpg";

const Event = () => {
  return (
    <div className=" mb-[10%] w-full h-[100vh] relative md:h-[85vh] lg:h-[85vh]">
      <img
        className="w-full h-full object-cover object-top absolute inset-0"
        src={eventImg}
        alt="event"
      />
      <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
      <motion.div
        initial={{ top: 500 }}
        animate={{ top: 150 }}
        transition={{ ease: "easeOut", duration: 1 }}
        className="absolute top-[30%] left-[50%] -translate-x-[50%] text-white text-center xxs:top-[10%] xs:top-[20%] sm:top-[30%]  md:top-[35%]"
      >
        <h1 className="text-4xl font-bold font-['Lobster']">
          The good memories events
        </h1>
        <p className="py-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
          suscipit autem? In, debitis obcaecati quo ab saepe odit? Possimus,
          voluptatem?
        </p>
        <button className="btn whitespace-nowrap">Read More</button>
      </motion.div>
    </div>
  );
};

export default Event;
