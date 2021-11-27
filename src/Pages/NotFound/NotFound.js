import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/pagenotfound.jpg'
import './404.css'

const NotFound = () => {
    return (
        <div className="page-404 mb-10">
            <img src={img} alt="" />
            <Link to="/">
            <button className="rounded-full py-3 px-4 ml-20 bg-green-500 ">Go TO Home</button>
            </Link>
        </div>
    );
};

export default NotFound;