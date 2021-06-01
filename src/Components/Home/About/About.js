import React from 'react';
import yogaGirl from '../../../images/yoga girl.jpg'

const About = () => {
   
    return (
        <section style={{backgroundColor:"lightgray"}} className="row  d-flex justify-content-center align-items-center">
            <div className="col-md-5 text-center  offset-md-2 ms-5 p-5 m-5">
                <h1 className=" text-center gym-brand">
                    ABOUT US
                </h1>
                <br />
                <p className=" mt-5 ms-5  text-secondary ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, aspernatur minima? Nemo pariatur ea voluptatum odit commodi omnis dolores illo asperiores, molestiae ab esse repellendus voluptate labore sunt facere nobis error doloremque. Omnis dolorum laudantium ea sunt fuga culpa perferendis.
                </p>
                <button className="btn gym-brand-btn">
                    READ MORE
                </button>

            </div>
            <div className="col-md-5 d-flex justify-content-center ms-5 p-5">
                <img style={{height:"400px",border:"10px solid #b967ce",borderRadius:"10px"}} className="img-fluid" src={yogaGirl} alt="" />

            </div>
        </section>
    );
};

export default About;