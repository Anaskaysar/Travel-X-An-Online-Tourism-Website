import { useEffect, useState } from 'react';

const useOrderedPackages = () => {
    const [orderedPackages,setOrderedPackages]=useState([]);

    useEffect(()=>{
        fetch("https://thawing-thicket-85078.herokuapp.com/orderedpackages")
        .then(res=>res.json())
        .then(data=>setOrderedPackages(data))
    },[])
    return[orderedPackages,setOrderedPackages];

};

export default useOrderedPackages;