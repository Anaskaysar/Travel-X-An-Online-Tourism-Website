import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './booking.css'
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';

const Booking = () => {
    const { user } = useAuth();

    const {packageId}=useParams();
    const [singlepackage,setpackage]=useState({});

    const { register, handleSubmit, reset, formState: { errors } } = useForm();


    useEffect(()=>{
        fetch(`https://thawing-thicket-85078.herokuapp.com/packages/details/${packageId}`)
        .then(res=>res.json())
        .then(data =>setpackage(data));
    },[packageId])
   

    const{title,duration,details,address,price,image,Rating}=singlepackage;

    //booking part

    const onSubmit = data => {
     
        fetch('https://thawing-thicket-85078.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Order processed Successfully');  
                    reset();
                }
            })
    };
    
    return (
        <div className='container mt-20'>
            <div className="packages-banner mb-3" >
                <h4>Welcome To Our Booking System</h4>
            </div>
           <div className="grid grid-cols-3 gap-4">
                 <div className=" card-container">
                    <div className="bg-white border border-gray-100 transition transform duration-700 hover:shadow-xl hover:scale-101 rounded-lg relative">
                        <img className=" card-imagep w-100 mx-auto transform transition duration-300 hover:scale-105" src={image} alt="" />
                    <div className=" flex flex-col ml-3 my-3 ">
                        <p className="text-gray-600 p-2"> <span className="pr-3">${price}/Per Person</span> 
                        <span className="m-5"> <i className=" fa fa-calendar" aria-hidden="true"></i> {duration}</span> </p>
                        <h3 className="card-title signature-color text-2xl"> {title}</h3>
                        <p>{details}</p>
                        <h4 className="card-title signature-color text-2xl"><i className="fas fa-map-marker-alt signature-color mr-3"></i>{address}</h4>
                        <p > <i className=" fas fa-star signature-color mr-3"></i>  {Rating}Ratings</p>
                        <div className="grid grid-cols-2 mt-4 ml-4">
                        </div>
                     </div>
                    </div>
                 </div>

                 <div className="col-span-2">
                     <h1 className="text-3xl text-center">This is Booking Form</h1>
                     <h2 className="text-3xl text-center">Please Fill All The Details</h2>

                     <div>
            <form className="shipping-form" onSubmit={handleSubmit(onSubmit)} >

                <input defaultValue={user.displayName} {...register("name")} />

                <input defaultValue={user.email} {...register("email", { required: true })} />
                {errors.email && <span className="error">This field is required</span>}

                <input defaultValue={title} {...register("package")} placeholder="package" />

                <input placeholder="Address" defaultValue="" {...register("address")} />
                <input placeholder="City" defaultValue="" {...register("city")} />
                <input placeholder="phone number" defaultValue="" {...register("phone")} />

                <input type="submit" />
            </form>
        </div>
                 </div>

           </div>

        </div>
    );
};

export default Booking;