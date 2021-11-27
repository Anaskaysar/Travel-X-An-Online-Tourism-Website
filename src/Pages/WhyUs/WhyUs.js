import React from 'react';
import './whyus.css'
import icon1 from "../../assets/Icons/experience.png"
import icon2 from "../../assets/Icons/tour-guide.png"
import icon3 from "../../assets/Icons/traveller.png"
import icon4 from "../../assets/Icons/trust.png"

const WhyUs = () => {
    return (
        <div className="all-text container whyus-container mt-10" >
           <div className="mt-5">   
                <h4 className="text-center p-3">Why <span className="signature-color">TravelX</span> </h4>
                <h1 className="text-3xl text-center ">Why You Are Traveling With TravelX ???</h1>
           </div>
            <div className="container place-content-center grid grid-cols-1 lg:grid-cols-4 gap-4 p-20  text-white text-center">
                <div className="bg-box  rounded-lg  mb-10 ">
                    <img src={icon2} className="" alt="" />
                    <h2>2000+ Our WorldWide Guide </h2>
                </div>
                <div className="bg-box  rounded-lg mb-10">
                    <img src={icon4} alt="" />
                    <h2>100% trusted travel agency</h2>
                </div>
                <div className="bg-box rounded-lg mb-10">
                    <img src={icon1} alt="" />
                    <h2>10+ Years of travel ezperience</h2>
                </div>
                <div className="bg-box rounded-lg mb-10">
                    <img src={icon3} alt="" />
                    <h2>90% of our traveller happy</h2>
                </div>
            </div>
        </div>
    );
};

export default WhyUs;