import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import Navbar from "../Home/Header/Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";

const CourseReview = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data, e) => {
    const eventData = {
      name: data.name,
      title: data.title,
      description: data.description,
    };
    const url = `http://localhost:5055/addComments`;
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
                  name="name"
                  placeholder="name"
                  {...register("name")}
                />
                <br />
                <input
                  className="text-input"
                  name="title"
                  placeholder="title"
                  {...register("title")}
                />
                <br />
                <input
                  style={{ height: "200px" }}
                  className="text-input"
                  name="description"
                  placeholder="description"
                  {...register("description")}
                />
                <br />

                <br />
                <input className="btn gym-brand-btn text-input" type="submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseReview;
