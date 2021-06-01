import React, { useContext, useEffect, useState } from "react";
import { CourseContext } from "../../App";
import Navbar from "../Home/Header/Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";

const ManageService = () => {
  const [courses, setCourses] = useContext(CourseContext);

  useEffect(() => {
    const url = `http://localhost:5055/courses`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
      });
  }, []);
  // console.log(books)

  const handleDeleteButton = (id) => {
    console.log(id);
    fetch(`http://localhost:5055/deleteCourses/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.text())
      .then((result) => {
        setCourses(courses.filter((course) => course._id !== id));
      });
  };

  return (
    <div>
      <div style={{ backgroundColor: "lightskyblue" }}>
        <Navbar></Navbar>
      </div>
      <div className="row order-section">
        <div className="col-md-4">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-8 row">
          {courses.map((course) => (
            <div
              className="col-md-3 text-start m-5"
              style={{
                backgroundColor: "white",
                boxShadow: "2px 2px 10px lightgrey",
                borderRadius: "10px",
              }}
            >
              <div className="row">
                <div className="col-md-5 ms-4">
                  <img
                    src={course.imageURL}
                    alt=""
                    className="img-fluid mt-3"
                    style={{ height: "60px" }}
                  />
                </div>
                <div className="col-md-5">
                  <button
                    onClick={() => handleDeleteButton(course._id)}
                    className="btn mt-3 btn-primary"
                  >
                    DELETE COURSE
                  </button>
                </div>
              </div>
              <h4 className="gym-brand mt-2 ms-4"> {course.name}</h4>
              <h4 className="text-secondary ms-4"> ${course.price}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManageService;
