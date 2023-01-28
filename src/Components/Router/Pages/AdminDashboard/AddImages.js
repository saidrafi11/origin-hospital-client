import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useState } from 'react';

import { toast } from 'react-toastify';

import "yet-another-react-lightbox/styles.css";
const AddImages = () => {
    const [image, setImage] = useState('')
    const [IMGerror, setIMGError] = useState('')
    console.log(image);
    const handleImage = (event) => {

        setImage(event.target.files[0])
        console.log(image);
    }


    const { data: imgInfo = [], refetch, isLoading } = useQuery({
        queryKey: ['img-file'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/img-file`);
            const data = await res.json();
            return data;
        }

    })
    console.log(imgInfo);
    let imgList = []
    for (let i = 0; i < imgInfo.length; i++) {
        imgList.push({ src: `http://localhost:5000/images/${imgInfo[i].ImgFile}`, width: 1600, height: 900 })
    }
    console.log(imgList);



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

                const fileName = response.data.image[0].filename;


                const fileInfo = {


                    ImgFile: fileName
                }
                console.log(fileName);
                axios.post('http://localhost:5000/img-file', fileInfo)
                    .then((res) => {
                        console.log(res);
                        if (res.data.acknowledged) {
                            toast.success('Image added succesfully!', {
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
            .catch(err => { setIMGError(err.response.data) })


    }
    const handleDelete = (_id, imgFile) => {
        const agree = window.confirm(`Are you want to delete?`)
        console.log(agree)
        if (agree) {
            console.log(_id)
            fetch(`http://localhost:5000/delete-imgInfo/${_id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {

                    console.log(data)
                    if (data.deletedCount > 0) {

                        fetch(`http://localhost:5000/images/${imgFile}`, {
                            method: 'DELETE'
                        })
                            .then(res => res.json())
                            .then(data => {

                                if (data.deletedCount > 0) {

                                    toast.success('Image deleted succesfully!', {
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



                            })





                        // navigate(from, { replace: true })


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
                    <input onChange={handleImage} className='my-3' type='file' name='image'></input>
                    <h1 className='text-red-600 font-semibold
                '>{IMGerror}</h1>





                    <br />
                    <button className='btn  btn-error  btn-sm  my-2' type="submit">Add image</button>

                </form>

            </div>

            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>

                            <th>Image</th>

                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {imgInfo?.map(img => <tr>
                            <td><img width='150px' src={`http://localhost:5000/images/${img.ImgFile}`}></img></td>

                            <td><button onClick={() => handleDelete(img._id, img.ImgFile)} className='btn btn-xs btn-error'>Delete</button></td>
                        </tr>)}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AddImages;