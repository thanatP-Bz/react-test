import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Showcase from "../components/Showcase";
import Compliments from "../components/Compliments";
import Event from "../components/Event";
import Message from "../components/Message";
import HomeGallery from "../components/HomeGallery";
import Technology from "../components/Technology";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Showcase />
      <Compliments />
      <Event />
      <Message />
      <HomeGallery />
      <Technology />
      <Footer />
    </div>
  );
};

export default Home;
