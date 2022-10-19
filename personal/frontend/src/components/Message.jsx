import React from "react";
import { motion } from "framer-motion";
import friendImg from "../images/friend.jpg";

const Message = () => {
  return (
    <div className="my-[3%] mx-[7%]">
      <div className="grid grid-cols-1 md:grid-cols-5">
        <motion.div
          initial={{ x: -500 }}
          animate={{ x: 0 }}
          transition={{ ease: "easeOut", duration: 1 }}
          className=" z-10 p-5 shadow-lg bg-white rounded-md text-center mr-0 md:mr-10 md:col-start-1 md:col-end-4 md:row-start-1 md:row-end-2 md:self-center"
        >
          <h1 className="text-4xl font-['Lobster'] ">
            What I would like to say
          </h1>
          <p className="my-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, qui
            ipsa fugiat dolorem neque error quidem amet vero iure officiis.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quaerat
            dolorem, fugit minus repellendus ea!
          </p>
        </motion.div>

        <motion.div
          initial={{ x: 500 }}
          animate={{ x: 0 }}
          transition={{ ease: "easeOut", duration: 1 }}
          className="md:col-start-3 md:col-end-6 md:grid-rows-2 md:row-start-1 md:row-end-2"
        >
          <img
            src={friendImg}
            className="col-span-3 object-cover rounded-md"
            alt="friend"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Message;
