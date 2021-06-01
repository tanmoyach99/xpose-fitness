import React from "react";
import fitness1 from "../../../../images/fitness-gym-man-barbell-removebg-preview.png";
import Navbar from "../Navbar/Navbar";
import "./HeaderMain.css";

const HeaderMain = () => {
  return (
    <div className="header-bg container-fluid col-xs-12">
      <Navbar></Navbar>
      <div className=" row d-flex align-items-center">
        <div className="col-md-4 header-banner">
          <img className="img=fluid" src={fitness1} alt="" />
        </div>
        <div className="col-md-4 offset-md-3 ">
          <h1
            style={{ fontSize: "60px", fontWeight: "700" }}
            className="gym-brand"
          >
            SHAPE YOUR <br /> PERFECT BODY
          </h1>
          <p className="text-white ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            possimus dolor ducimus dolore laudantium quod optio temporibus
            itaque ut velit ipsa explicabo aspernatur corporis saepe, dolorum
            modi molestiae quam quos veritatis. Veniam enim aut suscipit,
            nostrum fugit soluta officia quo!
          </p>
          <button className="btn gym-brand-btn"> GET ADMIT </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderMain;
