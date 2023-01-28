import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

const AddDoctor = () => {
    const [image, setImage] = useState('')
    const [IMGerror, setIMGError]= useState('')
    // const [depertments, setDepertments]= useState([])
    console.log(image);
    const handleImage = (event) => {

        setImage(event.target.files[0])
        console.log(image);
    }
    const { data: depertments = [] } = useQuery({
        queryKey: ['depertments'],
        queryFn: async () => {
            const res = await fetch(`https://test-server.skyshopuk.com/depertments`);
            const data = await res.json();
            return data;
        }

    })
    const { data: doctors = [], refetch, isLoading } = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/doctors`);
            const data = await res.json();
            return data;
        }

    })
    console.log(doctors);
    
    

    const handleSubmit = event => {
        event.preventDefault();
     

        const formData = new FormData()
        formData.append('image', image)
        axios.post('https://test-server.skyshopuk.com/upload', formData,
            {
                headers: {
                    'encType': 'multipart/form-data'
                }
            })
            .then(response => {
             
                 const DName = event.target.DName.value;
                const depertment = event.target.depertment.value;
                const link = event.target.DLink.value;


                const fileName = response.data.image[0].filename;


                const DoctorInfo = {
                   
                    DName: DName,
                    Depertment: depertment,
                    Link: link,
                    ImgFile: fileName
                }
                console.log(DoctorInfo);
                axios.post('https://test-server.skyshopuk.com/add-doctor', DoctorInfo)
                    .then((res) => {
                        console.log(res);
                        if (res.data.acknowledged) {
                            toast.success('Doctor added succesfully!', {
                                position: "top-center",
                                autoClose: 3000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                                theme: "light",
                            });
                            refetch()
                            event.target.reset()
                        }

                    }).catch(err => console.log(err.response.data))


            })
            .catch(err => { setIMGError(err.response.data)})

    }

    const handleDelete = (_id) => {
        const agree = window.confirm(`Are you want to delete?`)
        console.log(agree)
        if (agree) {
            console.log(_id)
            fetch(`http://localhost:5000/delete-doctor/${_id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {

                    console.log(data)
                    if (data.deletedCount > 0) {
                        console.log(data);
                        if (data.acknowledged) {

                                    toast.success('Doctor deleted succesfully!', {
                                        position: "top-center",
                                        autoClose: 3000,
                                        hideProgressBar: false,
                                        closeOnClick: true,
                                        pauseOnHover: true,
                                        draggable: true,
                                        progress: undefined,
                                        theme: "light",
                                    });
                                    refetch()
                                }



                        





                        


                    }
                })

        }
    }

 
    return (
        <div>
            <div className='max-w-3xl  mt-3
        '>
                <form onSubmit={handleSubmit}>
                    <h1 className='text-green-900 font-semibold'>Select image</h1>
                    <input onChange={handleImage} className='my-3' type='file' name='image' required></input>
                    <h1 className='text-red-600 font-semibold
                '>{IMGerror}</h1>
                    <input className="input input-bordered w-full max-w-3xl  
                             min-h-12
                             textarea textarea-error
                            mx-auto p-5"   type="text" name='DName' placeholder="Name" required>
                    </input>


                    <select name='depertment' className="select select-bordered w-full max-w-xs my-3" required>
                        <option disabled>Please Select Depertment</option>
                        {
                            depertments?.map(depertment => <option id={depertment._id} value={depertment.depertmentURL}>{depertment.depertmentName}</option>)
                        }
                    </select>
                    <input className="input input-bordered w-full max-w-3xl  
                             min-h-12
                             textarea textarea-error
                            mx-auto p-5"   type="dropdown" name='DLink' placeholder="Link">
                    </input>

                    <br />
                    <button  className='btn  btn-error  btn-sm  my-2' type="submit">Add doctor</button>

                </form>
                
            </div>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>

                            <th>Name</th>
                            <th>Department</th>
                            
                            

                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {doctors?.map(d => <tr>
                            <td>{d.DName}</td>
                            <td>{d.Depertment}</td>
                      

                            
                            <td><button onClick={()=>handleDelete(d._id)} className='btn btn-xs btn-error'>Delete</button></td>
                        </tr>)}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AddDoctor;