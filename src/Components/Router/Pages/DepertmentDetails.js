import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CardComponent from './AdminDashboard/CardComponent';

const DepertmentDetails = () => {
    const DD = useLoaderData();
    



    return (
        <div style={{
            backgroundColor: "#60ffaa",
            backgroundImage: 'linear-gradient(223deg, #60ffaa 40%, #FFFB7D 100%)'


        }} className='min-h-screen grid lg:grid-cols-4 
        md:grid-cols-2 
       grid-cols-1
       
       mx-auto
       gap-1 p-5'>
            {/* <h1 className='text-green-700 font-bold text-3xl'>Contants to be added!</h1> */}

            {
                DD?.map(d=><CardComponent key={d._id} d={d} ></CardComponent>)
            }
            
           
        </div>
    );
};

export default DepertmentDetails;