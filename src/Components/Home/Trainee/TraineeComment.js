import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import rating from '../../../images/rating.png';
import './Trainee.css'

const TraineeComment = ({ comment }) => {
    
    useEffect(() => {
        AOS.init({ duration: 2000})
   },[])
    
    return (
        <div data-aos="fade-up"  style={{ boxShadow: "5px 5px 10px lightgrey", backgroundColor: "white",borderRadius:"10px" }} className="col-md-3 ms-5 mt-3 p-2 ">
            
            <div className="row ">
                <div className="col-md-4">
                    <img style={{width:"100px"}} src={rating} alt="" />
                    
                </div>
                <div className="col-md-8 text-center">
                <h6>By {comment.name}</h6>
                <h3 className=" text-center gym-brand mt-2">
                {comment.title}
            </h3>
            <p className="text-secondary text-center mt-2">
              {comment.description}
            </p>
                
                </div>
            </div>
          
           
            
        </div>
    );
};

export default TraineeComment;