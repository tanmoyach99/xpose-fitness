import React from "react";
import Bounce from "react-reveal/Bounce";

const TrainerDetails = ({ trainer }) => {
  return (
    <div className="course-card text-center m-5 p-1 col-md-3">
      <Bounce top>
        <img
          style={{ height: "400px", borderRadius: "5px" }}
          className="img-fluid"
          src={trainer.imageURL}
          alt=""
        />
        <h6 className=" mt-2">{trainer.name}</h6>
        <h4>{trainer.subject}</h4>
        <p className="text-secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, earum?
        </p>
      </Bounce>
    </div>
  );
};

export default TrainerDetails;
