import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const Login = () => {

    const [loginUserEmail, setLoginUserEmail ] = useState('')
    console.log(loginUserEmail);
    

    const { register, formState: {errors}, handleSubmit } = useForm();
    const [loginErr, setLoginErr] = useState('');
    console.log(loginErr);
    const {signIn} = useContext(AuthContext)
    const handleLogin = data => {
        setLoginErr('')
        console.log(data);
        signIn(data.Email, data.Password)
        .then(result => {
            const user = result.user 
            console.log(user);
            setLoginUserEmail(user)
        })
        .catch(error => {
            setLoginErr(error.message)
        })
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
                <h2 style={{ fontFamily: 'Roboto Mono, monospaced' }} className='text-xl mt-2 text-center font-bold text-3xl '> Admin Login</h2>
                <form 
                onSubmit={handleSubmit(handleLogin)}
                
                >



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
                        <input type="password" {...register("Password", { required: "Password is required", minLength: { value: 6, message: "Password must be 6 characters long" } })} placeholder="Password" className="input input-bordered w-full max-w-xs" />
                        {errors.Password && <p className='text-red-600 text-sm' role="alert">{errors.Password?.message}</p>}

                        {
                            loginErr && <p className='text-red-600 text-sm'>{loginErr}</p>
                        }
                        <Link to={'/resetpassword'} className="label">
                            <span className="label-text">Forget password</span>

                        </Link>
                    </div>
                    {/* <div>{loginErr}</div> */}

                    <input



                    
                    style={{
                        backgroundColor: "#85FFBD",
                        backgroundImage: 'linear-gradient(233deg, #85FFBD 0%, #FFFB7D 100%)',
                        
                        
                    }}
                    
                    className='btn btn-accent w-full text-green-900 font-bold' type="submit" value='login' />
                </form>

                {/* <p>New to doctors portal <Link to='/signup' className='text-secondary'>Signup</Link></p> */}
                
            </div>



            
        </div>
    );
};

export default Login;