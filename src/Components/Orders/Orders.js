import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../App";
import Navbar from "../Home/Header/Navbar/Navbar";
import OrderDetails from "./OrderDetails";
import icon1 from "../../images/box.png";
import icon2 from "../../images/checklist.png";
import icon3 from "../../images/book.png";
import "./order.css";
import Sidebar from "../Sidebar/Sidebar";

const Orders = () => {
  const [cart] = useContext(CartContext);

  return (
    <div className="order-section">
      <Navbar></Navbar>
      <div className="row">
        <div className="col-md-4">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-8">
          <div className="row m-5 mt-5">
            {cart.map((orderedCourses) => (
              <OrderDetails orderedCourses={orderedCourses}></OrderDetails>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
