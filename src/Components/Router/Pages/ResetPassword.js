import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const ResetPassword = () => {
    const { register, formState: {errors}, handleSubmit } = useForm();
    const {resetPassword} = useContext(AuthContext)

    const [message, setMessage] = useState('')
    const [error, setError]= useState('')
    console.log(error);
    console.log(message);

    const handelResetPass = Email =>{
        console.log(Email);
        resetPassword(Email)
        .then(() => {
           setMessage(`Password reset email sent!
           If you can't find in your inbox, please check spam folder.`)
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setError(errorMessage, errorCode)
            // ..
          });

    }


    return (
        <div 
        style={{
            backgroundColor: "#85FFBD",
            backgroundImage: 'linear-gradient(45deg, #85FFBD 0%, #fcff7d 100%)'
        }}

        className='
        min-h-screen
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
                <h2 style={{ fontFamily: 'Roboto Mono, monospaced' }} className='text-xl mt-2 text-center font-bold text-3xl '>Reset password</h2>
                <form 
                onSubmit={handleSubmit(handelResetPass)}
                
                >



                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>

                        </label>
                        <input type="text" {...register("Email", { required: "Email Address is required" })} placeholder="Email" className="input input-bordered w-full max-w-xs" />
                        {errors.Email && <p className='text-red-600 text-sm' role="alert">{errors.Email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        
                       

                        
                        <Link to={'/login'} className="label">
                            <span className="label-text">Go to login page</span>

                        </Link>
                    </div>
                    <h1 className='text-xl text-center font-bold text-red-400 '>{error}</h1>
                    <h1 className='text-xl text-center font-bold text-green-900 '>{message}</h1>


                    <input



                    
                    style={{
                        backgroundColor: "#85FFBD",
                        backgroundImage: 'linear-gradient(233deg, #85FFBD 0%, #FFFB7D 100%)',
                        
                        
                    }}
                    
                    className='btn btn-accent w-full text-green-900 font-bold' type="submit" value='Reset password' />
                </form>

                {/* <p>New to doctors portal <Link to='/signup' className='text-secondary'>Signup</Link></p> */}
                
            </div>



            
        </div>
    );
};

export default ResetPassword;