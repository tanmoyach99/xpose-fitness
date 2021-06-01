import React from "react";
import FooterDetails from "./FooterDetails";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faGooglePlusG,
} from "@fortawesome/free-brands-svg-icons";

const footerData = [
  {
    title: "Top fit",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, corrupti.",
  },
  {
    title: "contact Us",
    phone: "+1998789657",
  },
  {
    title: "WE SELL ",
    product: "supplements",
    product1: "Gym equipments",
    product2: "Vitamins ",
    trainer: "personal trainer",
  },
  {
    title: "NEWSLETTER",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, corrupti.",
  },
];

const Footer = () => {
  return (
    <div className="footer mt-5 container-fluid">
      <h1 className="text-white text-center">Do You Want to be Fit?</h1>
      <div
        style={{ borderBottom: "2px solid white" }}
        className="row mt-5 d-flex justify-content-center"
      >
        {footerData.map((footer) => (
          <FooterDetails footerData={footer}></FooterDetails>
        ))}
      </div>
      <div className="row d-flex justify-content-center">
        <p className="text-white col-md-5">
          All rights reserved || {new Date().toDateString()}{" "}
        </p>
        <div className="col-md-5">
          <ul className="social-media list-inline">
            <p className="list-inline-item">
              <a href="//facebook.com">
                <FontAwesomeIcon
                  className="icon active-icon"
                  icon={faFacebookF}
                />
              </a>
            </p>
            <p className="list-inline-item">
              <a href="//google.com">
                <FontAwesomeIcon className="icon" icon={faGooglePlusG} />
              </a>
            </p>
            <p className="list-inline-item">
              <a href="//instagram.com">
                <FontAwesomeIcon className="icon" icon={faInstagram} />
              </a>
            </p>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
