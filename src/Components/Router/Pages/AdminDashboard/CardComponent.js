import React from 'react';
import { Link } from 'react-router-dom';

const CardComponent = () => {
    return (
        <div className='w-80 p-3 h-40  rounded-lg drop-shadow-lg bg-white'>
            <div className="-mt-16 avatar flex  justify-center">
                <div className="w-28 rounded-full ">
                    <img src="https://placeimg.com/192/192/people" />
                </div>
            </div>
            <h1 className='font-semibold text-xl text-center'>Dr. Rabiur Rahman Rabi</h1>
            <h1 className='font-semibold text-sm text-center'>Department: Medicine</h1>
            <div className='w-full flex justify-center'>
            <Link style={{
            backgroundColor: "#60ffaa",
            backgroundImage: 'linear-gradient(223deg, #60ffaa 40%, #FFFB7D 100%)'


        }} className="btn btn-sm text-green-900 m-2">View details</Link>
            </div>

        </div>
    );
};

export default CardComponent;