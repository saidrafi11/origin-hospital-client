import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const Signup = () => {

    const { register, formState: {errors}, handleSubmit } = useForm();
    const [signUpErr, setSignUpErr] = useState('');
const { createUser, updateUser} = useContext(AuthContext)

    const handleSignUp = data => {
        setSignUpErr('')
        console.log(data);
        createUser(data.Email, data.Password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            const userInfo = {
                displayName: data.name

            }
            updateUser(userInfo)
            // .then(()=> {
            //     saveUser(data.Name, data.Email)
            // })

            .catch(error => {
                console.log(error);
                setSignUpErr(error.message)
            })
        })


    }

    return (
        <div
        style={{
            backgroundColor: "#85FFBD",
            backgroundImage: 'linear-gradient(45deg, #85FFBD 0%, #fcff7d 100%)'
        }}
        
        className='min-h-screen
        min-w-full flex justify-center items-center'>

            <div className='w-96 p-7'>
            <div className=''>
                        <div className='flex justify-center'><img className='w-12' src={require('./../../../assets/images/100x100.jpg')}/></div>
                        <h1 style={{ fontFamily: 'Roboto Mono, monospaced' }}
                            className='
                            text-xl
                            md:text-4xl
                            lg:text-4xl
                            font-extrabold
                            text-center
                            text-green-1000
                            ml-2
                            '>Origin Hospital</h1>
                    </div>
                <form 
                onSubmit={handleSubmit(handleSignUp)}
                >
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>

                        </label>
                        <input type="text" {...register("Name", { required: "Name is required" })} placeholder="Name" className="input input-bordered w-full max-w-xs" />
                        {errors.Name && <p className='text-red-600 text-sm' role="alert">{errors.Name?.message}</p>}
                    </div>



                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>

                        </label>
                        <input type="text" {...register("Email", { required: "Email Address is required" })} placeholder="Email" className="input input-bordered w-full max-w-xs" />
                        {errors.Email && <p className='text-red-600 text-sm' role="alert">{errors.Email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>

                        </label>
                        <input type="password" {...register("Password", {
                            required: "Password is required", minLength: {
                                value: 6, message: "Password must be 6 characters long",


                                // password validation
                                
                            }
                            // , 
                            // pattern: { value: /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$/, message: "password must be strong" }
                        })} placeholder="Password" className="input input-bordered w-full max-w-xs" />
                        {errors.Password && <p className='text-red-600 text-sm' role="alert">{errors.Password?.message}</p>}
                        {/* {errors.Password?.type==="pattern" && <p className='text-red-600 text-sm' role="alert">{errors.Password?.message}</p>} */}

                    </div>
                    <h1>{signUpErr}</h1>

                    <input className='btn btn-accent mt-5 w-full' type="submit" value='Signup' />
                </form>

                
            </div>
        </div>
    );
};

export default Signup;