import React from 'react';
import useOrderedPackages from '../../hooks/useOrderedPackages';

const OrderedPackages = () => {
    const[orderedPackages,setOrderedPackages]=useOrderedPackages();

    const handleDelete=id=>{
        const url=`https://thawing-thicket-85078.herokuapp.com/orderedpackages/${id}`;
        fetch(url,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount){
                alert("Deleted")
                const remaining=orderedPackages.filter(pack=>pack._id!==id);
                setOrderedPackages(remaining);
            
            }
        })
    }

    
    return (
        <div className="container mt-20 ">
            <div className="packages-banner" >
                <h4>All Orders All Packages</h4>
            </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mt-5">
            {
             orderedPackages?.map(singlepackage=> 
             <div key={singlepackage._id} className="card-container">
                 <div className="bg-white border p-5 border-gray-100 transition transform duration-700 hover:shadow-xl hover:scale-101 rounded-lg relative">
                
                    <h3 className="signature-color mt-4  text-2xl">
                        Name: {singlepackage.name}</h3>
                    <p className="signature-color mt-4  text-1xl">
                        Email: {singlepackage.email}</p>
                    <h5 className="signature-color mt-4  text-1xl">Package: {singlepackage.package}</h5>


                    <div className="p-3">
                    <button className="ml-3 delete-btn mt-4" onClick={()=>handleDelete(singlepackage._id)}>
                            Delete Now
                            </button>
                    </div>
                 </div>
            </div> )
            }
        </div>
    </div>
    );
};

export default OrderedPackages;