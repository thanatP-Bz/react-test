import React from "react";
import Sidebar from "../components/Sidebar";
import Hero from "../components/Hero";
import Logo from "../components/Logo";
import Showcase from "../components/Showcase";
import Compliments from "../components/Compliments";

const Home = () => {
  return (
    <div>
      <Logo />
      <Sidebar />
      <Hero />
      <Showcase />
      <Compliments />
    </div>
  );
};

export default Home;
