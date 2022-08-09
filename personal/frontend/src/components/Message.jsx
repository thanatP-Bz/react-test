import React from "react";
import family3 from "../images/family-3.jpg";

const Message = () => {
  return (
    <div className="my-[5%] mx-[7%]">
      <div className="grid grid-cols-1 md:grid-cols-5">
        <div className=" z-10 bg-white p-5 shadow-lg rounded-md text-center md:col-start-1 md:col-end-4 md:row-start-1 md:row-end-2 md:self-center">
          <h1 className="text-4xl font-['Lobster'] text-gray-700 ">
            What I would like to say
          </h1>
          <p className="my-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, qui
            ipsa fugiat dolorem neque error quidem amet vero iure officiis.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quaerat
            dolorem, fugit minus repellendus ea!
          </p>
        </div>

        <div className="md:col-start-3  md:col-end-6 md:grid-rows-2 md:row-start-1 md:row-end-2">
          <img
            src={family3}
            className="col-span-3 object-cover rounded-md"
            alt="family3"
          />
        </div>
      </div>
    </div>
  );
};

export default Message;
