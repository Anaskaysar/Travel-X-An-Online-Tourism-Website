import React, { useEffect, useState } from 'react';
import usePackages from '../../hooks/usePackages';
import Package from '../Packages/Package';
import WhyUs from '../WhyUs/WhyUs';
import HeroSection from './HeroSection';
import './Home.css'
import CustomerReview from '../CustomerReview/CustomerReview'

const Home = () => {
    const [packages]=usePackages();
    const [homepack,setHomepack]=useState([]);
  
    useEffect(()=>{  
      const matchedPackage=packages.filter(pacakage=>pacakage.Discount==="available");
      setHomepack(matchedPackage);
  },[packages])

    return (
        <div className='container mt-18'>
            {/* banner Section  */}
            <HeroSection></HeroSection>

            {/* Our Best Packages Section */}
            <div className="mt-10 mr-20">
                <div className="best-packages">
                    <h4 className="text-center text-2xl">Choose Your Package</h4>
                    <h2 className="text-center text-3xl">Select Your Best Package For Your Travel</h2>
                </div>
                <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12 mr-20">
                        {
                        homepack.map(singlepackage=> <Package  singlepackage={singlepackage} key={singlepackage._id}/> )
                        }
                </div>
            </div>

            {/* whyus section  */}

            <div>
                <WhyUs></WhyUs>
            </div>

            {/* Customer Review Section  */}
            <div>
                    <div className=" all-text mt-5">   
                        <h4 className="text-center p-3 text-2xl signature-color">Our Travller's saying </h4>
                        <h1 className="text-3xl text-center ">What Out Travellers Say About Us</h1>
                    </div>
                    <div>
                        <CustomerReview></CustomerReview>
                    </div>
                            
            </div>


        </div>
    );
};

export default Home;