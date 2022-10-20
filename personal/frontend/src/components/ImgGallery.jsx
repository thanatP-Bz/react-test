import React from "react";
import { motion } from "framer-motion";
import k1 from "../images/k-1.jpg";
import k2 from "../images/k-2.jpg";
import k3 from "../images/k-3.jpg";
import k4 from "../images/k-4.jpg";
import k5 from "../images/k-5.jpg";
import k6 from "../images/k-6.jpg";
import k7 from "../images/k-7.jpg";
import k8 from "../images/k-8.jpg";
import kid1 from "../images/kid-1.jpg";
import kid2 from "../images/kid-2.jpg";
import kid3 from "../images/kid-3.jpg";
import kid4 from "../images/kid-4.jpg";
import kid5 from "../images/kid-5.jpg";
import kid6 from "../images/kid-6.jpg";
import kid7 from "../images/kid-7.jpg";
import kid8 from "../images/kid-8.jpg";

const ImgGallery = () => {
  return (
    <div className="mx-[7%] my-[7%]">
      <h1 className="text-5xl font font-['Lobster'] text-center py-4 mb-10">
        Galley
      </h1>
      <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <div>
          <button className="h-64 w-full">
            <img
              src={k1}
              className="h-full w-full object-cover rounded-md"
              alt="k1"
            />
          </button>
        </div>
        <div>
          <button className="h-64 w-full">
            <img
              src={k2}
              className="h-full w-full object-cover rounded-md"
              alt="k2"
            />
          </button>
        </div>
        <div>
          <button className="h-64 w-full">
            <img
              src={k3}
              className="h-full w-full object-cover rounded-md"
              alt="k3"
            />
          </button>
        </div>
        <div>
          <button className="h-64 w-full">
            <img
              src={k4}
              className="h-full w-full object-cover rounded-md"
              alt="k4"
            />
          </button>
        </div>
        <div>
          <button className="h-64 w-full bg-red-200">
            <img
              src={k5}
              className="h-full w-full object-cover rounded-md"
              alt="k5"
            />
          </button>
        </div>
        <div>
          <button className="h-64 w-full ">
            <img
              src={k6}
              className="h-full w-full object-cover rounded-md"
              alt="k6"
            />
          </button>
        </div>
        <div>
          <button className="h-64 w-full ">
            <img
              src={k7}
              className="h-full w-full object-cover rounded-md"
              alt="k8"
            />
          </button>
        </div>
        <div>
          <button className="h-64 w-full ">
            <img
              src={k8}
              className="h-full w-full object-cover rounded-md"
              alt="k8"
            />
          </button>
        </div>
        <div>
          <button className="h-64 w-full ">
            <img
              src={kid1}
              className="h-full w-full object-cover rounded-md"
              alt="k8"
            />
          </button>
        </div>
        <div>
          <button className="h-64 w-full ">
            <img
              src={kid2}
              className="h-full w-full object-cover rounded-md"
              alt="k8"
            />
          </button>
        </div>
        <div>
          <button className="h-64 w-full ">
            <img
              src={kid3}
              className="h-full w-full object-cover rounded-md"
              alt="k8"
            />
          </button>
        </div>
        <div>
          <button className="h-64 w-full ">
            <img
              src={kid4}
              className="h-full w-full object-cover rounded-md"
              alt="k8"
            />
          </button>
        </div>
        <div>
          <button className="h-64 w-full ">
            <img
              src={kid5}
              className="h-full w-full object-cover rounded-md"
              alt="k8"
            />
          </button>
        </div>
        <div>
          <button className="h-64 w-full ">
            <img
              src={kid6}
              className="h-full w-full object-cover rounded-md"
              alt="k8"
            />
          </button>
        </div>
        <div>
          <button className="h-64 w-full ">
            <img
              src={kid7}
              className="h-full w-full object-cover rounded-md"
              alt="k8"
            />
          </button>
        </div>
        <div>
          <button className="h-64 w-full ">
            <img
              src={kid8}
              className="h-full w-full object-cover rounded-md"
              alt="k8"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImgGallery;
