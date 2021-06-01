import React from 'react';
import blog1 from '../../../images/blog-1.jpg';
import blog2 from '../../../images/blog-2.jpg';
import blog3 from '../../../images/blog-3.jpg';
import BlogDetails from './BlogDetails';


const blogData = [
    {
        name: " Best training for Gaining Muscle",
        img: blog1,
        author: "Jihan"
    },
    {
        name: " Skipping is under rated",
        img: blog2,
        author: " Usob"
    },
    {
        name: " Yoga is a great exercise",
        img: blog3,
        author: "Ayan"
    },
    
]

const Blog = () => {
    return (
        <div className="mt-5">
            <h1 className="text-center mb-5">  Our <span className="gym-brand"> BLOGs</span>  </h1>
            <div className="row text-center ms-5 d-flex justify-content-center">
                {
                    blogData.map(blog=><BlogDetails blog={blog}></BlogDetails>)
                }

            </div>

            
        </div>
    );
};

export default Blog;