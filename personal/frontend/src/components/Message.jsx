import React from "react";
import family3 from "../images/family-3.jpg";

const Message = () => {
  return (
    <div className="my-[10%] mx-[7%] flex flex-row-reverse relative">
      <div className="absolute w-full shadow-lg top-[100%] left-[0%] z-10 bg-white px-10 py-5 rounded-md text-center md:py-5 md:top-[35%] md:max-w-lg">
        <h1 className="text-4xl font-['Lobster'] text-gray-700 ">
          What I would like to say
        </h1>
        <p className="my-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, qui
          ipsa fugiat dolorem neque error quidem amet vero iure officiis. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Et quaerat dolorem,
          fugit minus repellendus ea!
        </p>
      </div>

      <img
        src={family3}
        className="hidden rounded-md md:w-3/5 md:block"
        alt="family3"
      />
    </div>
  );
};

export default Message;
