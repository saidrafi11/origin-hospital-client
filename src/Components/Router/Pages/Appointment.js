import React from 'react';
import Iframe from 'react-iframe';

const Appointment = () => {
    return (
        <div className='min-h-screen'>
            <Iframe url="https://bookingbie.com/hospital/Origin_Hospital,_Courtbazar.23"
        width="100%"
        height="100%"
        id=""
        className="min-h-screen"
        display="block"
        position="relative"/>
        </div>
    );
};

export default Appointment;