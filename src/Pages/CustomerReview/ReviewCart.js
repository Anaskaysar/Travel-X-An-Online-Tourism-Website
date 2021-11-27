import React from 'react';
import "./style.css"

const ReviewCart = (props) => {
    const {name,profession,img,Review}=props.review ||{};
    return (
        <div className="bg-white border border-gray-100 hover:shadow-xl  p-10 rounded-lg relative">
            <div className="card-image">
                <img src={img} className="img-fluid" alt="" />
            </div>
           
            <div className="flex flex-col items-center ">
                <h1 className="text-gray-900 poppins text-2xl font-bold">{name}</h1>
                <h4 className="text-gray-500 poppins font-bold">{profession} </h4>
                <p className="text-gray-500 poppins text-sm text-justify">{Review.slice(0,70)}</p>
            </div>
        </div>
    );
};

export default ReviewCart;