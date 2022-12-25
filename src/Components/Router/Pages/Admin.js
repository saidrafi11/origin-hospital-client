import React from 'react';
import { useForm } from 'react-hook-form';
import Accept from './Accept';

const Admin = () => {

    const { register, formState: {errors}, handleSubmit } = useForm();

    const handleFile = acceptedFiles =>{
console.log(acceptedFiles);
    }


    return (
        <div className='min-h-screen flex justify-center' style={{
            backgroundColor: "#60ffaa",
            backgroundImage: 'linear-gradient(223deg, #60ffaa 40%, #FFFB7D 100%)'}}>

                <div className='w-96 p-7'>

                <form 
                onSubmit={handleSubmit()}
                >
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">সেবা সমূহঃ</span>

                        </label>
                        <textarea  type="text" {...register("services", { required: "Name is required" })} placeholder="" className="input input-bordered w-full max-w-xs " />
                        {errors.Name && <p className='text-red-600 text-sm' role="alert">{errors.Name?.message}</p>}
                    </div>
                
                <input className='btn btn-accent mt-5 w-full' type="submit" value='Save' />
                </form>
                <form 
                onSubmit={handleSubmit()}
                >
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">আউটডোর সেবা সমূহঃ</span>

                        </label>
                        <textarea type="text" {...register("outdoorService", { required: "Name is required" })} placeholder="" className="input input-bordered w-full max-w-xs" />
                        {errors.Name && <p className='text-red-600 text-sm' role="alert">{errors.Name?.message}</p>}
                    </div>
                
                <input className='btn btn-accent mt-5 w-full' type="submit" value='Save' />
                </form>
                <form 
                onSubmit={handleSubmit()}
                >
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">ইনডোর সেবা সমূহঃ</span>

                        </label>
                        <textarea type="text" {...register("indoorService", { required: "Name is required" })} placeholder="" className="input input-bordered w-full max-w-xs" />
                        {errors.Name && <p className='text-red-600 text-sm' role="alert">{errors.Name?.message}</p>}
                    </div>
                
                <input className='btn btn-accent mt-5 w-full' type="submit" value='Save' />
                </form>
                <form 
                onSubmit={handleSubmit()}
                >
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Add photo to the gallery</span>

                        </label>
                        <textarea type="image" {...register("indoorService", { required: "Name is required" })} placeholder="" className="input input-bordered w-full max-w-xs" />
                        {errors.Name && <p className='text-red-600 text-sm' role="alert">{errors.Name?.message}</p>}
                    </div>
                
                <input className='btn btn-accent mt-5 w-full' type="submit" value='Save' />
                </form>
                <Accept successAction={handleFile}></Accept>
                </div>


            
        </div>
    );
};

export default Admin;