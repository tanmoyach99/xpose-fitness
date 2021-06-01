import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "../Home/Header/Navbar/Navbar";
import "./AddCourses.css";
import Sidebar from "../Sidebar/Sidebar";

const AddCourses = () => {
  const [imageURL, setImageURL] = useState(null);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data, e) => {
    const eventData = {
      name: data.name,
      imageURL: imageURL,
      price: data.price,
    };
    const url = `http://localhost:5055/addCourses`;
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

  const handleImageUpload = (event) => {
    console.log(event.target.files[0]);
    const imageData = new FormData();
    imageData.set("key", "489dd6a91ab2be667304169a79328a02");
    imageData.append("image", event.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="order-section container-fluid">
      <Navbar></Navbar>
      <div className="row form-section">
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
                  placeholder="course name"
                  {...register("name")}
                />
                <br />
                <input
                  className="text-input"
                  name="price"
                  placeholder="course price"
                  {...register("price")}
                />
                <br />
                <input
                  className="btn btn-secondary text-input"
                  onChange={handleImageUpload}
                  type="file"
                />
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

export default AddCourses;
