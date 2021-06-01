import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../../App";
import "./Navbar.css";

const Navbar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  return (
    <nav className="navbar container navbar-expand-lg navbar-light">
      <div class="container-fluid">
        <Link class="navbar-brand ms-5  text-white" to="/home">
          <h2 className="gym-brand">XPOSE FITNESS</h2>
        </Link>
        <div
          class="collapse navbar-collapse d-flex justify-content-end ms-5"
          id="navbarNav"
        >
          <ul class="navbar-nav">
            <li class="nav-item me-5">
              <Link
                class="nav-link active text-white"
                aria-current="page"
                to="/home"
              >
                Home
              </Link>
            </li>
            <li class="nav-item me-5">
              <Link class="nav-link text-white " to="/about">
                About Us
              </Link>
            </li>
            <li class="nav-item me-5">
              <Link class="nav-link text-white" to="/courses">
                Courses
              </Link>
            </li>
            <li class="nav-item me-5">
              <Link class="nav-link text-white" to="/blog">
                Blog
              </Link>
            </li>
            <li class="nav-item me-5">
              <Link class="nav-link text-white" to="/dashboard">
                Dashboard
              </Link>
            </li>
            {loggedInUser.email ? (
              <div style={{ display: "flex" }}>
                <img
                  src={loggedInUser.photo}
                  style={{ width: "50px", borderRadius: "50%" }}
                  alt=""
                />{" "}
                <p className="text-white ms-3">{loggedInUser.name}</p>
                <Link to="/login">
                  {" "}
                  <button className="btn gym-brand-btn">Log Out</button>
                </Link>
              </div>
            ) : (
              <Link to="/login">
                {" "}
                <button className="btn gym-brand-btn">Login</button>
              </Link>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
