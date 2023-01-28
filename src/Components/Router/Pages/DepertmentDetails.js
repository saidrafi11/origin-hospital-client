import React from 'react';
import CardComponent from './AdminDashboard/CardComponent';

const DepertmentDetails = () => {
    return (
        <div style={{
            backgroundColor: "#60ffaa",
            backgroundImage: 'linear-gradient(223deg, #60ffaa 40%, #FFFB7D 100%)'


        }} className='min-h-screen flex justify-center items-center'>
            {/* <h1 className='text-green-700 font-bold text-3xl'>Contants to be added!</h1> */}

            <CardComponent></CardComponent>
        </div>
    );
};

export default DepertmentDetails;