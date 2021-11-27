import React from 'react';
import { Link } from 'react-router-dom';
import usePackages from '../../hooks/usePackages';
import './managepack.css'


const ManagePackages = () => {
    
    const [packages,setPackages]=usePackages();

    const handleDelete=id=>{
        const url=`https://thawing-thicket-85078.herokuapp.com/packages/${id}`;
        fetch(url,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount){
                alert("Deleted")
                const remaining=packages.filter(pack=>pack._id!==id);
                setPackages(remaining);
            
            }
        })
    }
    return (
        <div className="container mt-20 ">
            <div className="packages-banner" >
                <h4>Mange All Packages</h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mt-5">
                {
                 packages?.map(singlepackage=> 
                 <div key={singlepackage._id} className="card-container">
                     <div className="bg-white border border-gray-100 transition transform duration-700 hover:shadow-xl hover:scale-101 rounded-lg relative">
                        <img className=" card-imagep w-100 mx-auto transform transition duration-300 hover:scale-105" src={singlepackage.image} alt="" />
                        <h3 className="signature-color mt-4  text-2xl"> <i className="ml-2 fas fa-map-marker-alt signature-color mr-3"></i>{singlepackage.title}</h3>
                        <div className="p-3">
                            <button className="ml-3 delete-btn mt-4" onClick={()=>handleDelete(singlepackage._id)}>
                            Delete Now
                            </button>
                            <Link to="/addpackage">
                            <button className="ml-3 add-btn mt-4">
                            Add New Package
                            </button>
                            </Link>
                        </div>
                     </div>
                </div> )
                }
            </div>
        </div>
    );
};

export default ManagePackages;