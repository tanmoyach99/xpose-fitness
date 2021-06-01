import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import kettlebell from '../../images/kettlebell (1).png';
import martialArt from '../../images/martial-arts.png';
import swimming from '../../images/swimming.png';
import jogging from '../../images/jogging.png';
import weightlifting from '../../images/weightlifting.png';
import yoga from '../../images/lotus.png';
import Navbar from '../Home/Header/Navbar/Navbar';



const InDetails = () => {
    const { _id } = useParams();
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const url = `http://localhost:5055/courses`;
        fetch(url)
            .then(res => res.json())
        .then(data=>setCourses(data))
    }, [_id])

    // let chosenCourse;

    // for (let i = 0; i < courses.length; i++) {
    //     const course = courses[i];
        
    //     if (course._id == _id) {
    //         chosenCourse = course;
            
    //     }
        
        
    // }

    const chosenCourse = courses.find(course => course._id === _id);
    
    return (
        <div>
            <div style={{backgroundColor:"black"}}>
                <Navbar></Navbar>
            </div>
            <div style={{backgroundColor:"lightsteelblue",position:"absolute"}}>
            <div className="m-5 p-5" style={{backgroundColor:"white" ,  boxShadow:"5px 5px 10px lightgrey",width:"60%"}}>
            
            <h1>{chosenCourse?.name}</h1>
            <img src={chosenCourse?.imageURL} alt="" className="img-fluid" />
            <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi aut odio voluptatem ad blanditiis numquam adipisci neque, perferendis in odit dignissimos cumque architecto inventore quae ut recusandae quam quidem nisi, aspernatur nobis dolore eius aliquam quos voluptatibus. Dicta, dignissimos optio facilis aliquam itaque libero nesciunt placeat commodi asperiores vero quos?</p>
        </div>
           </div>
       </div>
    );
};

export default InDetails;