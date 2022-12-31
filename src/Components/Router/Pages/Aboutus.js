import React from 'react';

const Aboutus = () => {
    return (
        <section
            style={{
                backgroundColor: "#85FFBD",
                backgroundImage: 'linear-gradient(45deg, #85FFBD 0%, #fcff7d 100%)'
            }}


            className='mt-2 p-5 min-h-screen flex justify-center items-center'>
            <div >
                <div className='flex justify-center m-5'>
                    <img className='w-24' src={require('./../../../assets/images/100x100.jpg')} />
                </div>

                <div className='flex justify-center items-center'>

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
                <div>
                    <h1 style={{ fontFamily: 'Roboto Mono, monospaced' }}
                        className='
                            text-xl
                            md:text-4xl
                            lg:text-4xl
                            font-lg
                            text-center
                            text-green-1000
                            '>Call: 01832466730 </h1>
                    <h1 style={{ fontFamily: 'Roboto Mono, monospaced' }}
                        className='
                            text-baseline
                            md:text-xl
                            lg:text-xl
                            font-lg
                            text-center
                            '>Email: originhospital@gmail.com</h1>
                    <h1 style={{ fontFamily: 'Roboto Mono, monospaced' }}
                        className='
                            text-baseline
                            md:text-xl
                            lg:text-xl
                            font-lg
                            text-center
                            '>Facebook: http://www.facebook.com/originhospital</h1>
                    <h1 style={{ fontFamily: 'Roboto Mono, monospaced' }}
                        className='
                            text-baseline
                            md:text-xl
                            lg:text-xl
                            font-lg
                            text-center
                            '>S. Alam Plaza, South Station, Courtbazar, Cox's Bazar.</h1>

                    


                </div>
            </div>
            <div>
            </div>

        </section>
    );
};

export default Aboutus;