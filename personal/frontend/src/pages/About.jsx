import React from "react";
import friendImg from "../images/friend.jpg";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="my-[7%] mx-[7%]">
        <div className="grid grid-cols-1 md:grid-cols-5">
          <div className=" z-10 py-10 px-5 shadow-lg bg-white rounded-md text-center mr-0 md:mr-16 md:col-start-1 md:col-end-4 md:row-start-1 md:row-end-2 md:self-center">
            <h1 className="text-4xl font-['Lobster'] ">
              What I would like to say
            </h1>
            <p className="my-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi,
              qui ipsa fugiat dolorem neque error quidem amet vero iure
              officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Et quaerat dolorem, fugit minus repellendus ea!
            </p>
          </div>

          <div className="md:col-start-3 md:col-end-6 md:grid-rows-2 md:row-start-1 md:row-end-2">
            <img
              src={friendImg}
              className="col-span-3 object-cover rounded-md"
              alt="friend"
            />
          </div>
        </div>
      </div>

      <div className="my-[3%] mx-[7%]">
        <div className="grid grid-cols-1 md:grid-cols-5">
          <div className="md:col-start-1 md:col-end-4 md:grid-rows-2 md:row-start-1 md:row-end-2">
            <img
              src={friendImg}
              className="col-span-3 object-cover rounded-md"
              alt="friend"
            />
          </div>

          <div className=" z-10 p-5 shadow-lg bg-white rounded-md text-center mr-0 md:ml-16 md:col-start-3 md:col-end-6 md:row-start-1 md:row-end-2 md:self-center">
            <h1 className="text-4xl font-['Lobster'] ">
              What I would like to say
            </h1>
            <p className="my-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi,
              qui ipsa fugiat dolorem neque error quidem amet vero iure
              officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Et quaerat dolorem, fugit minus repellendus ea!
            </p>
          </div>
        </div>
      </div>

      <div className="my-[7%] mx-[7%]">
        <div className="grid grid-cols-1 md:grid-cols-5">
          <div className=" z-10 p-5 shadow-lg bg-white rounded-md text-center mr-0 md:mr-16 md:col-start-1 md:col-end-4 md:row-start-1 md:row-end-2 md:self-center">
            <h1 className="text-4xl font-['Lobster'] ">
              What I would like to say
            </h1>
            <p className="my-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi,
              qui ipsa fugiat dolorem neque error quidem amet vero iure
              officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Et quaerat dolorem, fugit minus repellendus ea!
            </p>
          </div>

          <div className="md:col-start-3 md:col-end-6 md:grid-rows-2 md:row-start-1 md:row-end-2">
            <img
              src={friendImg}
              className="col-span-3 object-cover rounded-md"
              alt="friend"
            />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default About;
