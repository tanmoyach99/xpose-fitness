import React from "react";

const FooterDetails = ({ footerData }) => {
  return (
    <div className="col-md-2 p-4 text-center">
      <h4 className="text-center text-white mt-5 ">{footerData.title}</h4>
      <p className="text-white mt-4">{footerData.des}</p>
      <h6 className="text-white mt-2">{footerData.phone} </h6>

      <p className="text-white text-center">{footerData.product} </p>
      <p className="text-white text-center"> {footerData.product1}</p>
      <p className="text-white text-center"> {footerData.product2}</p>
      <p className="text-white text-center"> {footerData.Trainer}</p>
      {footerData.input}
    </div>
  );
};

export default FooterDetails;
