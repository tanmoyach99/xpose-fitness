import React from "react";
import "./courseDetails.css"; 
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const CoursesDetails = ({ courses, buyHandler }) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div
      data-aos="fade-left"
      className="col-md-3  course-card text-center m-5 pt-5 pb-5"
    >
      <Link to={"/details/" + courses._id} style={{ textDecoration: "none" }}>
        <img
          style={{ width: "50px" }}
          className="img-fluid blur mb-3"
          src={courses.imageURL}
          alt=""
        />
      </Link>
      <h4 className="gym-brand blur">{courses.name}</h4>

      <div className="buy-card d-text-center">
        <h2 className="text-white text-center"> $ {courses.price}</h2>
        <Link to="/orders">
          {" "}
          <button onClick={() => buyHandler(courses)} className="btn buy-btn ">
            Proceed to checkOut
          </button>
        </Link>
      </div>
      <br />
      <p className="text-secondary blur">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
        cupiditate optio labore voluptatibus vero unde quia porro facere dolor
        eum?
      </p>
      <button
        style={{ color: "magenta" }}
        onClick={() => buyHandler(courses)}
        className="btn gym-brand-btn"
      >
        Add To Cart
      </button>
    </div>
  );
};

export default CoursesDetails;
