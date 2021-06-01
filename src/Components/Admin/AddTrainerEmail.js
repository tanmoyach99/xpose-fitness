import React from "react";
import { useForm } from "react-hook-form";
import Navbar from "../Home/Header/Navbar/Navbar";
import "./AddCourses.css";
import Sidebar from "../Sidebar/Sidebar";

const AddTrainerEmail = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data, e) => {
    const eventData = {
      email: data.email,
    };
    const url = `https://desolate-springs-66408.herokuapp.com/addTrainerEmail`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(eventData),
    }).then((res) => console.log("server side response", res));
    console.log(eventData);
    console.log(data);
    e.target.reset();
  };

  return (
    <div className="order-section">
      <Navbar></Navbar>
      <div className="row">
        <div className="col-md-4">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-8">
          <div className="add-form p-5 m-5">
            <div className="input-field">
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  className="text-input"
                  name="email"
                  placeholder=" ADD ADMIN EMAIL"
                  {...register("email")}
                />
                <input className="btn gym-brand-btn text-input" type="submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTrainerEmail;
