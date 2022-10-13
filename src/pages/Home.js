import React from "react";
import Announcement from "../components/Announcement";
import Categoies from "../components/Categoies";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newletter from "../components/Newletter";
import Product from "../components/Product";
import Products from "../components/Products";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar></Navbar>
      <Slider></Slider>
      <Categoies></Categoies>
      <Products></Products>
      <Newletter />
      <Footer />
    </div>
  );
};

export default Home;
