import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './addpackage.css'

const AddPackages = () => {
    
    const { register, handleSubmit,reset } = useForm();

    const onSubmit = data =>{
        axios.post('https://thawing-thicket-85078.herokuapp.com/packages',data)
        .then(res=>{
            if(res.data.insertedId){
                alert("added succesfully");
                reset();
            }
        })
    };


   
    return (
        <div className="m-10 mt-20 add-service ">
            <h1 className='text-4xl font-bold text-center'>Add A New Package</h1>

            <div className="p-4">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("title", { required: true, maxLength: 30 })} placeholder='name' />
                    <textarea {...register("details")}  placeholder='details'/>
                    <input {...register("address")} placeholder='address' />
                    <input {...register("duration")} placeholder='duration'/>
                    <input {...register("Rating")} placeholder='Rating'/>
                    <input type="number" {...register("price")} placeholder='Price'/>
                    <input {...register("image url")} placeholder='Image'/>
                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddPackages;


