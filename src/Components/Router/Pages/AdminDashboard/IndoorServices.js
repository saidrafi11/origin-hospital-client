import React, { useEffect, useState } from 'react';

import { toast, ToastContainer } from 'react-toastify';

const IndoorServices = () => {
    const [services, setServices] = useState([])
  
    const [isShown2, setIsShown2] = useState(false);
    const handleClick2 = event => {
        setIsShown2(!isShown2);
    };
    const handleAddServices = event => {
        event.preventDefault();
        const name = event.target.indoorServices.value;
        const servicesCategory = 'Indoor services';

        const editedService = {
            serviceCategory: servicesCategory,
            name: name

        }
        console.log(editedService);
        fetch('https://test-server.skyshopuk.com/indoor-services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(editedService)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('Service added succesfully!', {
                        position: "top-center",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        });
                    
                    event.target.reset()
                }
            }).catch(er => console.error(er))



    }

    useEffect(() => {

        fetch(`https://test-server.skyshopuk.com/indoor-services`)
            .then(res => res.json())
            .then(data => {
                setServices(data)
                console.log(data);
            })

    }, [])

    const handleDlt = (_id) =>{
        const agree = window.confirm(`Are you want to delete?`)
        console.log(agree)
        if(agree){
            console.log(_id)
           fetch(`https://test-server.skyshopuk.com/delete-indoor-service/${_id}`,{
            method: 'DELETE'})
            .then(res => res.json())
            .then(data => {
                
                console.log(data)
                if(data.deletedCount > 0){
                    
                    toast.success('Service deleted succesfully!', {
                        position: "top-center",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        });
                    // navigate(from, { replace: true })
                    
                    
                } 
            })
            
        }
    }


    return (
        <div
            className='min-h-screen w-full'>
            <ToastContainer position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light" />
            <h1 style={{ fontFamily: 'Noto Serif Bengali, serif' }}
                className='
                    md:text-5xl
                   text-4xl 
                    lg:text-5xl 
                    font-extrabold 
                    md:text-start 
                    lg:text-start   
                    text-center
                    px-5
                    
                    
                    '>ইনডোর সেবা সমূহ</h1>
            <h1 style={{ fontFamily: 'Noto Serif Bengali, serif' }} className='
                    md:text-2xl 
                    sm:text-1xl 
                    sm:text-justify
                    p-1
                    
                    '>
                <h1 style={{ fontFamily: 'Noto Serif Bengali, serif' }} className='
                    md:text-2xl 
                    sm:text-1xl 
                    sm:text-justify
                    px-2
                    pt-0
                    line-break
                    text-green-900
                    '>

<div className="overflow-x-auto">
                        <table className="table w-full">

                            <thead>
                                <tr>

                                    <th>Name</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>

                                {services?.map(service => <tr>
                                    <td>{service.serviceName}</td>
                                    <td><button className='btn btn-xs btn-error'>Edit</button></td>
                                    <td><button onClick={()=>handleDlt(service._id)} className='btn btn-xs btn-error'>Delete</button></td>
                                </tr>)}

                            </tbody>
                        </table>
                    </div>

                    


                </h1>
            </h1>
            {isShown2 ?
                <>

                    <form onSubmit={handleAddServices}>
                        <input className="input input-bordered w-full max-w-3xl  
                                 min-h-16
                                 textarea textarea-error
                                mx-auto p-5"   type={"text"} name={'indoorServices'} placeholder={"Add indoor services"}>
                        </input>

                        <br />
                        <button className='btn  btn-error  btn-sm m-5 mt-1 ml-1' type="submit">Add services</button>
                        <button className='btn  btn-error  btn-sm m-5 mt-1 ml-1' onClick={handleClick2}>Cancel</button>
                    </form>

                </>
                :
                <>
                    <button className='btn  btn-error  btn-sm m-5 ' onClick={handleClick2}>Edit</button>
                </>
            }
        </div>
    );
};

export default IndoorServices;