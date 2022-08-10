import React from "react";
import Sidebar from "../components/Sidebar";
import Hero from "../components/Hero";
import Logo from "../components/Logo";
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
      <Logo />
      <Sidebar />
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
