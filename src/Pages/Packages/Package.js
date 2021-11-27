import React from 'react';
import { Link } from 'react-router-dom';
import './package.css'

const Package = (props) => {
    const {_id,title,image,price,duration,Rating}=props.singlepackage;
    return (
        <div className=" card-container">
            <div className="bg-white border border-gray-100 transition transform duration-700 hover:shadow-xl hover:scale-101 rounded-lg relative">
                 <img className=" card-imagep w-100 mx-auto transform transition duration-300 hover:scale-105" src={image} alt="" />
            <div className=" flex flex-col ml-3 my-3 ">
                <p className="text-gray-600 p-2"> <span className="pr-3">${price}/Per Person</span> 
                <span className="m-5"> <i className=" fa fa-calendar" aria-hidden="true"></i> {duration}</span> </p>
                <h3 className="card-title signature-color text-2xl"> <i className="fas fa-map-marker-alt signature-color mr-3"></i>{title}</h3>
                <p > <i className=" fas fa-star signature-color mr-3"></i>{Rating}Ratings</p>
                <div className="grid grid-cols-2 mt-4 ml-4">
               
                <Link to={`/packages/details/${_id}`}>
                    <button className="booknow-btn ">
                       Book Now
                    </button>
                </Link>
                   
                </div>
            </div>
              </div>
        </div>
    );
};

export default Package;
