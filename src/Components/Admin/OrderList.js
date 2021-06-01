import React, { useEffect, useState } from "react";
import Navbar from "../Home/Header/Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import "./orderlist.css";

const OrderList = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const url = `https://desolate-springs-66408.herokuapp.com/orders`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  console.log(orders);

  return (
    <div>
      <div style={{ backgroundColor: "lightskyblue" }}>
        <Navbar></Navbar>
      </div>
      <div className="row order-section">
        <div className="col-md-4">
          <Sidebar />
        </div>
        <div className="col-md-7 m-5 p-5">
          <div>
            <table>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Course Name</th>
              </tr>
              {orders.map((order) => (
                <tr className="mt-5">
                  <td>{order?.name}</td>
                  <td>{order?.email}</td>
                  <td>{order.products.name}</td>
                </tr>
              ))}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderList;
