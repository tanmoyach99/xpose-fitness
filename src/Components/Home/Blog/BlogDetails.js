import React from 'react';

const BlogDetails = ({blog}) => {
    return (
        <div style={{boxShadow:"5px 5px 10px lightgrey"}} className="col-md-3 ms-5">
            <img src={blog.img} alt="" className="img-fluid" style={{height:"300px"}} />
            <div>
            <div className="row mt-1">
                <div className="col-md-6"> <p> {new Date().toDateString()}</p> </div>
                <div className="col-md-6"> by {blog.author} </div>
            </div>
            <div className="mt-1">
                <p>{blog.name}</p>
                <small className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur veniam veritatis doloremque iusto dolores ad necessitatibus asperiores maiores sit animi!</small>
            </div>
           </div>
            
        </div>
    );
};

export default BlogDetails;