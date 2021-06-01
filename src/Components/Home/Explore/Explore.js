import React from "react";
import "./Explore.css";
import carousel1 from "../../../images/car1.jpg";
import carousel2 from "../../../images/car2.jpg";
import carousel3 from "../../../images/car3.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import {
  MDBCarousel,
  MDBCarouselCaption,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBMask,
  MDBContainer,
} from "mdbreact";

const Explore = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <MDBContainer data-aos="fade-right">
      <MDBCarousel
        activeItem={1}
        length={3}
        showControls={true}
        showIndicators={true}
        className="z-depth-1 mt-5"
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img
                className="d-block w-100"
                src={carousel1}
                alt="First slide"
              />
              <MDBMask overlay="black-light" />
            </MDBView>
            <MDBCarouselCaption>
              <h1 className="h1-responsive  gym-brand">
                {" "}
                Best solution for Muscle Building
              </h1>
              <h2> Best Price </h2>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img
                className="d-block w-100"
                src={carousel2}
                alt="Second slide"
              />
              <MDBMask overlay="black-strong" />
            </MDBView>
            <MDBCarouselCaption>
              <h1 className="h1-responsive gym-brand">Best Yoga</h1>
              <h2> WorldClass Yoga Teacher </h2>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img
                className="d-block w-100"
                src={carousel3}
                alt="Third slide"
              />
              <MDBMask overlay="black-slight" />
            </MDBView>
            <MDBCarouselCaption>
              <h1 className="h1-responsive gym-brand">Best WeightLifter</h1>
              <h2> Best Trainer </h2>
            </MDBCarouselCaption>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
};

export default Explore;
