import React, { useContext, useEffect, useState } from "react";
import icon1 from "../../images/box.png";
import icon2 from "../../images/checklist.png";
import icon3 from "../../images/book.png";
import icon4 from "../../images/add1.png";
import icon5 from "../../images/add2.png";
import icon6 from "../../images/list1.png";
import icon7 from "../../images/Manage1.png";
import { Link } from "react-router-dom";
import { TrainerContext, UserContext } from "../../App";
import "./Sidebar.css";

const Sidebar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [isTrainer, setIsTrainer] = useContext(TrainerContext);

  console.log(loggedInUser.name);

  useEffect(() => {
    const url = `https://desolate-springs-66408.herokuapp.com/isTrainer`;
    fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email: loggedInUser.email }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setIsTrainer(data);
      });
  }, []);

  return (
    <div>
      <div className="side-bar">
        <div className="mt-5 p-5 m-5 text-white sidebar">
          <ul>
            {isTrainer ? (
              <div>
                <ul>
                  <Link to="/addCourse">
                    <img src={icon4} alt="" /> ADD COURSE
                  </Link>
                  <br />
                  <br />
                  <Link to="/addTrainers">
                    {" "}
                    <img src={icon5} alt="" />
                    ADD TRAINER
                  </Link>
                  <br />
                  <br />
                  <Link to="/orderList">
                    {" "}
                    <img src={icon6} alt="" />
                    ORDER LIST
                  </Link>
                  <br />
                  <br />
                  <Link to="/trainer">
                    <img src={icon7} alt="" />
                    ADD EMAIL TRAINER
                  </Link>
                  <br />
                  <br />
                  <Link to="/manage">
                    <img src={icon7} alt="" />
                    MANAGE COURSE
                  </Link>
                </ul>
              </div>
            ) : (
              <div>
                <Link to="/orders">
                  {" "}
                  <img src={icon1} alt="" /> Admit Course{" "}
                </Link>
                <br />
                <Link to="/courselist">
                  {" "}
                  <img src={icon2} alt="" /> interested Course{" "}
                </Link>
                <br />
                <Link to="/reviews">
                  {" "}
                  <img src={icon3} alt="" /> Course Review
                </Link>
              </div>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
