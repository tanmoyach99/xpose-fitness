import React from "react";
import { Link } from "react-router-dom";

const OrderDetails = ({ orderedCourses }) => {
  const paymentHandler = (orderedCoursesData) => {
    const addId = orderedCoursesData._id;
    // console.log("paymentHandler Clicked");
    // console.log(addId);
    // const newCart = [...cart, orderedCoursesData];
    // setCart(newCart);
    // console.log(cart);
  };
  return (
    <div
      className="col-md-3 text-start   p-2 m-5"
      style={{
        backgroundColor: "white",
        boxShadow: "2px 2px 10px lightgrey",
        borderRadius: "10px",
      }}
    >
      <div className="row">
        <div className="col-md-5 ms-4">
          <img
            src={orderedCourses.imageURL}
            alt=""
            className="img-fluid"
            style={{ height: "60px" }}
          />
        </div>
        <div className="col-md-5">
          <Link to={"/admit/payment/" + orderedCourses._id}>
            <button
              onClick={() => paymentHandler(orderedCourses)}
              className="btn mt-3 btn-primary"
            >
              Pay
            </button>
          </Link>
        </div>
      </div>
      <h4 className="gym-brand mt-2 ms-4"> {orderedCourses.name}</h4>
      <h4 className="text-secondary ms-4"> ${orderedCourses.price}</h4>
      <p className="text-secondary ms-4">
        Lorem ipsum, dolor sit <br /> amet consectetur adipisicing elit.
        Distinctio, ea!
      </p>
    </div>
  );
};

export default OrderDetails;
