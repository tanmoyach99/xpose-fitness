import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../App";
import Navbar from "../Home/Header/Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";

const InterestedCourse = () => {
  const [cart, setCart] = useContext(CartContext);
  console.log(cart);

  return (
    <div>
      <div className="order-section">
        <Navbar></Navbar>
        <div className="row">
          <div className="col-md-4">
            <Sidebar></Sidebar>
          </div>
          <div className="col-md-8">
            <div className="row m-5 mt-5">
              {cart.map((cart) => (
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
                        src={cart.img}
                        alt=""
                        className="img-fluid"
                        style={{ height: "60px" }}
                      />
                    </div>
                    <div className="col-md-5">
                      <Link to="/orders">
                        <button className="btn mt-3 btn-primary">Buy</button>
                      </Link>
                    </div>
                  </div>
                  <h4 className="gym-brand mt-2 ms-4"> {cart.name}</h4>
                  <h4 className="text-secondary ms-4"> ${cart.price}</h4>
                  <p className="text-secondary ms-4">
                    Lorem ipsum, dolor sit <br /> amet consectetur adipisicing
                    elit. Distinctio, ea!
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterestedCourse;
