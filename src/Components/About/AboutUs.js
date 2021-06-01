import React from "react";
import About from "../Home/About/About";
import Choose from "../Home/Choose/Choose";
import Explore from "../Home/Explore/Explore";
import Footer from "../Home/Footer/Footer";
import Navbar from "../Home/Header/Navbar/Navbar";

const AboutUs = () => {
  return (
    <div>
      <div style={{ backgroundColor: "black" }}>
        <Navbar></Navbar>
      </div>
      <About></About>
      <Explore></Explore>
      <Choose></Choose>
      <Footer></Footer>
    </div>
  );
};

export default AboutUs;
