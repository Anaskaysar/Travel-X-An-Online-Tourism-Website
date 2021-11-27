import { useEffect, useState } from 'react';

const useCustomers = () => {
    const [customersReviews,setCustomersReviews]=useState([]);

    useEffect(()=>{
        fetch("https://thawing-thicket-85078.herokuapp.com/customersReviews")
        .then(res=>res.json())
        .then(data=>setCustomersReviews(data))
    },[])
    return[customersReviews,setCustomersReviews];
};

export default useCustomers;