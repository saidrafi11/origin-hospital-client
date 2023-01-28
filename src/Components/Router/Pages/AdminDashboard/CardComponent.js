import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';

const CardComponent = (d) => {
    
    console.log(d);
    axios.get(`http://localhost:5000/depertments/${d?.d.Depertment}`)
  .then(response => {
    console.log(response.data[0]);
  })
  .catch(error => {
    console.log(error);
  });

//     const {data:depertments =[], refetch, isLoading} = useQuery({
//         queryKey:['depertments'],
//         queryFn: async () => {
//             const res = await fetch(`http://localhost:5000/depertments/${d?.d.Depertment}`);
//             const data = await res.json();
//             return data;
//         } 
        
//     })
// console.log(depertments);
    return (
        <div className='w-80 p-3 h-40 mt-16 rounded-lg drop-shadow-lg bg-white'>
            <div className="-mt-16 avatar flex  justify-center">
                <div className="w-28 rounded-full ">
                    <img src={`https://test-server.skyshopuk.com/images/${d?.d.ImgFile}`} />
                </div>
            </div>
            <h1 className='font-semibold text-xl text-center'>{d?.d.DName
            }</h1>
            <h1 className='font-semibold text-sm text-center'>Department: Medicine</h1>
            {/* <div className='w-full flex justify-center'>
                <a href={`${d?.d.Link}`} style={{
                    backgroundColor: "#60ffaa",
                    backgroundImage: 'linear-gradient(223deg, #60ffaa 40%, #FFFB7D 100%)'


                }} className="btn btn-sm text-green-900 m-2">View details</a>
            </div> */}

        </div>
    );
};

export default CardComponent;