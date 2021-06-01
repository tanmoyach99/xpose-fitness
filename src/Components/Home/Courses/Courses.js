import React, { useContext, useEffect, useState } from "react";
import kettlebell from "../../../images/kettlebell (1).png";
import martialArt from "../../../images/martial-arts.png";
import swimming from "../../../images/swimming.png";
import jogging from "../../../images/jogging.png";
import weightlifting from "../../../images/weightlifting.png";
import yoga from "../../../images/lotus.png";
import Fade from "react-reveal/Fade";
import CoursesDetails from "./CoursesDetails";
import { CartContext } from "../../../App";
import ReactPaginate from "react-paginate";

const Courses = () => {
  const [cart, setCart] = useContext(CartContext);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const url = `http://localhost:5055/courses`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  const buyHandler = (courseData) => {
    const addId = courseData._id;
    const newCart = [...cart, courseData];
    setCart(newCart);
    console.log(cart);
    console.log("buy clicked");
  };

  const [pageNumber, setPageNumber] = useState(0);

  const CoursePerPage = 3;
  const pagesVisited = pageNumber * CoursePerPage;

  const disCourse = courses.slice(pagesVisited, pagesVisited + CoursePerPage);

  const pageCount = Math.ceil(courses.length / CoursePerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div>
      <Fade left>
        <div className="mt-5 text-center">
          <h1 className="gym-brand">OUR COURSES</h1>
          <p-mt-2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
            quaerat.
          </p-mt-2>
        </div>

        <div className="row  d-flex justify-content-center m-5 ">
          {disCourse.map((courses) => (
            <CoursesDetails
              key={courses._id}
              buyHandler={buyHandler}
              courses={courses}
            ></CoursesDetails>
          ))}
        </div>
        <div className="m-2 text-center">
          <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"paginationBtn"}
            previousLinkClassName={"previousBtn"}
            nextLinkClassName={"nextBtn"}
            activeClassName={"paginationActive"}
          />
        </div>
      </Fade>
    </div>
  );
};

export default Courses;
