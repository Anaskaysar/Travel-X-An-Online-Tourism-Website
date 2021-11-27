import React from 'react';
import img from '../../assets/aboutus.jpg'

const AboutUs = () => {
    return (
        <div className="container mt-20">
            <div className="grid grid-cols-2 mb-20">
                <div>
                    <img src={img} className="img-fluid" alt="" />
                </div>
                <div>
                <h1 className='text-6xl text-center font-bold'>About US</h1>
                <p className="text-2xl text-gray-500">
                     About TravelX, the world's largest travel guidance platform, helps hundreds of millions of people each month** become better travelers, from planning to booking to taking a trip. Travelers across the globe use the Tripadvisor site and app to discover where to stay, what to do and where to eat based on guidance from those who have been there before. With more than 934 million reviews and opinions of nearly 8 million businesses, travelers turn to Tripadvisor to find deals on accommodations, book experiences, reserve tables at delicious restaurants and discover great places nearby. As a travel guidance company available in 43 markets and 22 languages, Tripadvisor makes planning easy no matter the trip type.
                </p>
                </div>
                
            </div>
        </div>
    );
};

export default AboutUs;