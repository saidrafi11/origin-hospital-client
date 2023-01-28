import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

const AddDoctor = () => {
    const [image, setImage] = useState('')
    const [IMGerror, setIMGError]= useState('')
    console.log(image);
    const handleImage = (event) => {

        setImage(event.target.files[0])
        console.log(image);
    }
    const { data: depertments = [], refetch, isLoading } = useQuery({
        queryKey: ['depertments'],
        queryFn: async () => {
            const res = await fetch(`https://origin-hospital-server.vercel.app/depertments`);
            const data = await res.json();
            return data;
        }

    })
    console.log(depertments);

  


    const handleSubmit = event => {
        event.preventDefault();
     

        const formData = new FormData()
        formData.append('image', image)
        axios.post('http://localhost:5000/upload', formData,
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
                axios.post('http://localhost:5000/add-doctor', DoctorInfo)
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
        
                            event.target.reset()
                        }

                    }).catch(err => console.log(err.response.data))


            })
            .catch(err => { setIMGError(err.response.data)})

    }

 
    return (
        <div>
            <div className='max-w-3xl  mt-3
        '>
                <form onSubmit={handleSubmit}>
                    <h1 className='text-green-900 font-semibold'>Select image</h1>
                    <input onChange={handleImage} className='my-3' type='file' name='image'></input>
                    <h1 className='text-red-600 font-semibold
                '>{IMGerror}</h1>
                    <input className="input input-bordered w-full max-w-3xl  
                             min-h-12
                             textarea textarea-error
                            mx-auto p-5"   type="text" name='DName' placeholder="Name">
                    </input>


                    <select name='depertment' className="select select-bordered w-full max-w-xs my-3">
                        <option disabled>Please Select Depertment</option>
                        {
                            depertments?.map(depertment => <option id={depertment._id} value={depertment.depertmentName}>{depertment.depertmentName}</option>)
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
                {/* <div>
                    <img src="http://localhost:5000/images/g-1674725201687.png" alt="" />
                </div> */}
            </div>
        </div>
    );
};

export default AddDoctor;