import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import UploadForm from "../components/UploadForm";
import ImgGallery from "../components/ImgGallery";

const Gallery = () => {
  return (
    <>
      <Navbar />
      <UploadForm />
      <ImgGallery />
      <Footer />
    </>
  );
};

export default Gallery;
