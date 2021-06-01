import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import { UserContext } from "../../App";
import Navbar from "../Home/Header/Navbar/Navbar";
import Payment from "./Payment";

const ProceedPayment = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [loggedInUser, setloggedInUser] = useContext(UserContext);

  const { _id } = useParams();
  const [courses, setCourses] = useState([]);
  const [orderData, setOrderData] = useState("");

  useEffect(() => {
    const url = `https://desolate-springs-66408.herokuapp.com/courses`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, [_id]);

  const payment = courses.find((course) => course._id === _id);

  const onSubmit = (data) => {
    const paymentData = {
      name: loggedInUser.name,
      email: loggedInUser.email,
      courseName: payment.name,
      coursePrice: payment.price,
    };
    setOrderData(paymentData);
  };
  console.log(loggedInUser.name, loggedInUser.email);

  const handleProcessPayment = (paymentId) => {
    const orderDetails = {
      ...loggedInUser,
      products: payment,
      order: orderData,
      paymentId,
      orderTime: new Date(),
    };
    const url = `https://desolate-springs-66408.herokuapp.com/addOrder`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(orderDetails),
    }).then((res) => console.log("server side response", res));
    console.log(orderDetails);
  };

  return (
    <div>
      <div style={{ backgroundColor: "black" }}>
        {" "}
        <Navbar></Navbar>{" "}
      </div>
      <div style={{ display: orderData ? "none" : "block" }}>
        <div
          style={{ backgroundColor: "lightsteelblue" }}
          className="d-flex m-5 p-5 justify-content-center"
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              defaultValue={loggedInUser.name}
              {...register("name")}
              placeholder="Your Name"
            />
            {errors.name && <span>This field is required</span>}
            <br />
            <input
              defaultValue={loggedInUser.email}
              {...register("email")}
              placeholder="Your Email"
            />
            {errors.email && <span>This field is required</span>}
            <br />
            <input
              defaultValue={payment?.name}
              {...register("courseName")}
              placeholder="course name"
            />
            {errors.courseName && <span>This field is required</span>}
            <br />
            <input
              defaultValue={payment?.price}
              {...register("coursePrice")}
              placeholder="course price"
            />
            {errors.coursePrice && <span>This field is required</span>}

            <input className="gym-brand-btn" type="submit" />
          </form>
        </div>
      </div>
      <div style={{ display: orderData ? "block" : "none" }}>
        {" "}
        <Payment processPayment={handleProcessPayment}></Payment>{" "}
      </div>
    </div>
  );
};

export default ProceedPayment;
