import React, { useContext, useEffect, useState } from 'react';
import Carousel, { autoplayPlugin } from '@brainhubeu/react-carousel';
import '../Pages/linebreak.css'
import { FallingLines, Oval } from 'react-loader-spinner';

const Service = () => {
    const [loading, setLoading] = useState(true)
    const [indoorServices, setIndoorServices] = useState([])
    const [outdoorServices, setOutdoorServices] = useState([])
    const [otherServices, setOtherServices] = useState([])


    useEffect(() => {
        setLoading(true)
        fetch(`https://test-server.skyshopuk.com/indoor-services`)
            .then(res => res.json())
            .then(data => {
                setIndoorServices(data)
                setLoading(false)
            })

    }, [])
    useEffect(() => {
        setLoading(true)
        fetch(`https://test-server.skyshopuk.com/outdoor-services`)
            .then(res => res.json())
            .then(data => {
                setOutdoorServices(data)
                setLoading(false)
            })

    }, [])
    useEffect(() => {
        setLoading(true)
        fetch(`https://test-server.skyshopuk.com/other-services`)
            .then(res => res.json())
            .then(data => {
                setOtherServices(data)
                setLoading(false)
            })

    }, [])


    return (
        <>
            <section style={{
                backgroundColor: "#60ffaa",
                backgroundImage: 'linear-gradient(223deg, #60ffaa 40%, #FFFB7D 100%)'


            }} className='
            p-5 
            lg:p-10
            md:p-10   items-center text-green-1000'>
                <div className='lg:flex justify-center items-center '>
                    <div className='lg:w-1/2 m-2'>
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
                        {
                                    loading ? <>

                                        <div className='flex justify-center items-center'>
                                            <Oval
                                                height={80}
                                                width={80}
                                                color="#4fa94d"
                                                wrapperStyle={{}}
                                                wrapperClass=""
                                                visible={true}
                                                ariaLabel='oval-loading'
                                                secondaryColor="#4fa94d"
                                                strokeWidth={2}
                                                strokeWidthSecondary={2}

                                            />
                                        </div>


                                    </>

                                        :

                                        <>
                                            <ul class="list-disc">
                                                {indoorServices?.map(service => <li>{service.serviceName}</li>)}
                                            </ul>

                                        </>
                                }




                            </h1>
                        </h1>

                    </div>
                    <div className='
                lg:w-1/2  
                rounded-lg 
                shadow-xl'>
                        <Carousel
                            plugins={[
                                'infinite',
                                {
                                    resolve: autoplayPlugin,
                                    options: {
                                        interval: 2000,
                                    }
                                },
                            ]}
                            animationSpeed={1000}
                        >
                            <img src={require('./../../../assets/images/innaguration1440x584.jpg')} />
                            <img src={require('./../../../assets/images/outerimage1440x584.jpg')} />
                            <img src={require('./../../../assets/images/reception21440x584.jpg')} />
                            <img src={require('./../../../assets/images/reception21440x584.jpg')} />
                            <img src={require('./../../../assets/images/reception21440x584.jpg')} />
                            <img src={require('./../../../assets/images/reception21440x584.jpg')} />
                        </Carousel>
                    </div>
                </div>
            </section>

            <section

                // style={{
                //     backgroundColor: "#85FFBD",
                //     backgroundImage: 'linear-gradient(45deg, #85FFBD 0%, #fcff7d 100%)'
                // }} 


                className='flex
            sm:flex-row-reverse
            md:flex-row-reverse p-10 '>
                <div className='grid 
            lg:grid-cols-2 
            md:grid-cols-1 
            sm:grid-cols-1 
            gap-3'>
                    <div className='
    w-80
    flex
    mx-auto
    lg:justify-end
    drop-shadow-lg' id="surrounding">
                        <Carousel
                            plugins={[
                                'infinite',
                                {
                                    resolve: autoplayPlugin,
                                    options: {
                                        interval: 2000,
                                    }
                                },
                            ]}
                            animationSpeed={1000}
                        >
                            <img src={require('./../../../assets/images/b1.jpg')} />
                            <img src={require('./../../../assets/images/b2.jpg')} />
                            <img src={require('./../../../assets/images/b3.jpg')} />
                        </Carousel>
                    </div>
                    <div className=' m-2  my-auto'>
                        <h1 style={{ fontFamily: 'Noto Serif Bengali, serif' }}
                            className='
                    md:text-5xl
                   text-4xl 
                    lg:text-5xl 
                    font-extrabold 
                    md:text-start 
                    lg:text-start   
                    text-center
                    text-green-900
                    pb-0
                   
                 
                    
                    
                    '>আউটডোর সেবাসমূহ </h1>
                        <h1 style={{ fontFamily: 'Noto Serif Bengali, serif' }} className='
                    md:text-2xl 
                    sm:text-1xl 
                    text-justify
                    px-2
                    pt-0
                    line-break
                    text-green-900
                    '>{
                        loading ? <>

                            <div className='flex justify-center items-center'>
                                <Oval
                                    height={80}
                                    width={80}
                                    color="#4fa94d"
                                    wrapperStyle={{}}
                                    wrapperClass=""
                                    visible={true}
                                    ariaLabel='oval-loading'
                                    secondaryColor="#4fa94d"
                                    strokeWidth={2}
                                    strokeWidthSecondary={2}

                                />
                            </div>


                        </>

                            :

                            <>
                                <ul class="list-disc">
                                    {outdoorServices?.map(service => <li>{service.serviceName}</li>)}
                                </ul>

                            </>
                    }


                        </h1>



                    </div>
                </div>
            </section>



            <section style={{
                backgroundColor: "#60ffaa",
                backgroundImage: 'linear-gradient(223deg, #60ffaa 40%, #FFFB7D 100%)'


            }} className='
            p-5 
            lg:p-10
            md:p-10   items-center text-green-1000'>
                <div className='
                lg:flex justify-center items-center '>
                    <div className='lg:w-1/2 m-2'>
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
                    
                    
                    '>গাইনি সেবা সমূহঃ</h1>
                        <h1 style={{ fontFamily: 'Noto Serif Bengali, serif' }} className='
                    md:text-2xl 
                    sm:text-1xl 
                    sm:text-justify
                    p-5
                    
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
                                {
                                    loading ? <>

                                        <div className='flex justify-center items-center'>
                                            <Oval
                                                height={80}
                                                width={80}
                                                color="#4fa94d"
                                                wrapperStyle={{}}
                                                wrapperClass=""
                                                visible={true}
                                                ariaLabel='oval-loading'
                                                secondaryColor="#4fa94d"
                                                strokeWidth={2}
                                                strokeWidthSecondary={2}

                                            />
                                        </div>


                                    </>

                                        :

                                        <>
                                            <ul class="list-disc">
                                                {otherServices?.map(service => <li>{service.serviceName}</li>)}
                                            </ul>

                                        </>
                                }


                            </h1>
                        </h1>











                    </div>
                    <div className='
                lg:w-1/2  
                rounded-lg 
                shadow-xl'>
                        <Carousel
                            plugins={[
                                'infinite',
                                {
                                    resolve: autoplayPlugin,
                                    options: {
                                        interval: 2000,
                                    }
                                },
                            ]}
                            animationSpeed={1000}
                        >
                            <img src={require('./../../../assets/images/innaguration1440x584.jpg')} />
                            <img src={require('./../../../assets/images/outerimage1440x584.jpg')} />
                            <img src={require('./../../../assets/images/reception21440x584.jpg')} />
                            <img src={require('./../../../assets/images/reception21440x584.jpg')} />
                            <img src={require('./../../../assets/images/reception21440x584.jpg')} />
                            <img src={require('./../../../assets/images/reception21440x584.jpg')} />
                        </Carousel>
                    </div>
                </div>
            </section>


            <section
                style={{
                    backgroundColor: "#85FFBD",
                    backgroundImage: 'linear-gradient(45deg, #85FFBD 0%, #fcff7d 100%)'
                }}


                className='mt-2 p-5'>
                <div >
                    <div className='flex justify-center items-center'>
                        <img className='w-12' src={require('./../../../assets/images/100x100.jpg')} />
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
                            '>S. Alam Plaza, South Station, Courtbazar, Cox's Bazar.</h1>
                        <h1 style={{ fontFamily: 'Roboto Mono, monospaced' }}
                            className='
                            text-baseline
                            md:text-xl
                            lg:text-xl
                            font-lg
                            text-center
                            '>© All Right Reserved by Origin Hospital. </h1>
                    </div>




                </div>
                <div>




                </div>




            </section>



        </>
    );
};

export default Service;