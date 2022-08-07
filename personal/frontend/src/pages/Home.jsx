import React from "react";
import Sidebar from "../components/Sidebar";
import Hero from "../components/Hero";
import Logo from "../components/Logo";
import Showcase from "../components/Showcase";
import Compliments from "../components/Compliments";
import Event from "../components/Event";
import Message from "../components/Message";

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
    </div>
  );
};

export default Home;
