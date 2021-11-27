import React from 'react';
import Carousel from "react-elastic-carousel";
import useCustomers from '../../hooks/useCustomers';
import ReviewCart from './ReviewCart';
import "./style.css";


const CustomerReview = () => {
  const [customersReviews]=useCustomers([]);
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 4 },
      ];
      
    return (
    <div className="container mt-10 mb-10">
        <div className="App">
          <Carousel breakPoints={breakPoints}>
             
            {
              customersReviews?.map(review=> <ReviewCart key={review._id} review={review}></ReviewCart>)
            }
          
          </Carousel>
        </div>
    </div>
    );
};

export default CustomerReview;

