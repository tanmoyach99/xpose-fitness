import React from "react";
import ChooseRating from "./ChooseRating";
import "./Choose.css";
import choseImage from "../../../images/ratingbg.png";

const featureData = [
  {
    name: "Gym",
    rating: "99%",
    clName: "gym",
  },
  {
    name: "Yoga",
    rating: "80%",
    clName: "yoga",
  },
  {
    name: "Build Body",
    rating: "95%",
    clName: "build",
  },
  {
    name: "Fat loss",
    rating: "85%",
    clName: "fatLoss",
  },
  {
    name: " Martial Arts ",
    rating: "75%",
    clName: "martial",
  },
];

const Choose = () => {
  return (
    <div className="row feature-container mt-5 d-flex justify-content-center">
      <h1 className="gym-brand text-center"> Why Choose Us</h1>
      <div className="col-md-4">
        {featureData.map((feature) => (
          <ChooseRating feature={feature}></ChooseRating>
        ))}
      </div>
      <div className="col-md-6 ms-4">
        <img
          className="img-fluid mb-5"
          src={choseImage}
          alt=""
          style={{ height: "600px" }}
        />
      </div>
    </div>
  );
};

export default Choose;
