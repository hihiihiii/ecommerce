import React from "react";
import Announcemnet from "../components/Announcemnet";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <div>
      <Announcemnet />
      <Navbar></Navbar>
      <Slider></Slider>
    </div>
  );
};

export default Home;
