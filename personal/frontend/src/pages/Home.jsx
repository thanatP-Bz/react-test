import React from "react";
import Sidebar from "../components/Sidebar";
import Hero from "../components/Hero";
import Logo from "../components/Logo";
import Showcase from "../components/Showcase";

const Home = () => {
  return (
    <div>
      <Logo />
      <Sidebar />
      <Hero />
      <Showcase />
    </div>
  );
};

export default Home;
