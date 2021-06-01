import React from "react";
import "./ChoseRating.css";

const ChooseRating = ({ feature }) => {
  
  return (
      <div className="ms-5 text-center">
          <p className="text-white mt-5">{feature.name}</p>
      
          <div style={{ backgroundColor: "gray", borderRadius: "5px" }}>
              
        <div
          style={{
            backgroundColor: "white",
            width: `${feature.rating}`,
            borderRadius: "5px",
          }}
        >
          {feature.rating}
        </div>
      </div>
    </div>
  );
};

export default ChooseRating;
