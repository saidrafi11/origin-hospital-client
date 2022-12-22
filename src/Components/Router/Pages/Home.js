import React from 'react';
import Carousel, { autoplayPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarCheck, faCircleInfo, faCoffee, faFaceAngry, faHandHoldingMedical, faImage } from '@fortawesome/free-solid-svg-icons'
import 'animate.css';
import { Link } from 'react-router-dom';

const Home = () => {
    // document.querySelector('#surrounding').style.width = '100px';
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
                        <h1 style={{ fontFamily: 'Roboto Mono, monospaced' }}
                            className='
                    md:text-5xl
                   text-4xl 
                    lg:text-5xl 
                    font-extrabold 
                    md:text-start 
                    lg:text-start   
                    text-center
                    
                    
                    '>World-Class Physicians Providing Expert, Trusted Care.</h1>
                        <h1 style={{ fontFamily: 'Roboto Mono, monospaced' }} className='
                    md:text-2xl 
                    sm:text-1xl 
                    sm:text-justify
                    lg:p-2
                    
                    '>We know our patients have a choice in several different areas, so we go out of our way to deliver the level of care and compassion we would want for our own families. Schedule an appointment with us today.</h1>
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

            <section style={{ fontFamily: 'Roboto Mono, monospaced' }}>
                <div className='
            grid lg:grid-cols-4 
             md:grid-cols-2 
            grid-cols-2
            
            gap-2 p-5  
            '>
                    <Link to={'/appointment'} className='
                     h-64 bg-green-100 
                     font-bold
                     text-xl
                     md:text-3xl
                     lg:text-3xl
                     text-center
                     rounded-lg
                     p-5
                     flex
                     justify-center
                     items-center

                     text-green-500 hover:bg-green-200

                    '>
                        <div>
                            <div className='flex
                     justify-center
                     items-center animate__animated animate__pulse animate__infinite animate__delay-2s' >


                                <FontAwesomeIcon


                                    icon={faCalendarCheck} size="2x" />
                            </div>

                            <h1>Book appointment online</h1>
                        </div>


                    </Link>
                    <div className='
                     h-64 bg-green-100 
                     font-bold
                     text-xl
                     md:text-3xl
                     lg:text-3xl
                     text-center
                     rounded-lg
                     p-5
                     flex
                     justify-center
                     items-center

                     text-green-500 hover:bg-green-200
                    '> <div>
                            <div className='flex
             justify-center
             items-center animate__animated animate__pulse animate__infinite animate__delay-2s' >


                                <FontAwesomeIcon


                                    icon={faHandHoldingMedical} size="2x" />
                            </div>

                            <h1>Our Services</h1>
                        </div>
                    </div>

                    <Link to={'/gallery'} className='
                     h-64 bg-green-100 
                     font-bold
                     text-xl
                     md:text-3xl
                     lg:text-3xl
                     text-center
                     rounded-lg
                     p-5
                     flex
                     justify-center
                     items-center

                     text-green-500 hover:bg-green-200
                    '>
                        <div>
                            <div className='flex
                     justify-center
                     items-center 
                     animate__animated 
                     animate__pulse 
                     animate__infinite 
                     animate__delay-2s' >


                                <FontAwesomeIcon


                                    icon={faImage} size="2x" />
                            </div>

                            <h1>Gallery</h1>
                        </div>




                    </Link>
                    <div className='
                     h-64 bg-green-100 
                     font-bold
                     text-xl
                     md:text-3xl
                     lg:text-3xl
                     text-center
                     rounded-lg
                     p-5
                     flex
                     justify-center
                     items-center

                     text-green-500 hover:bg-green-200
                    '>

                        <div>
                            <div className='flex
                     justify-center
                     items-center 
                     animate__animated 
                     animate__pulse 
                     animate__infinite 
                     animate__delay-2s' >


                                <FontAwesomeIcon


                                    icon={faCircleInfo} size="2x" />
                            </div>

                            <h1>About Us</h1>
                        </div>





                    </div>


                </div>
            </section>

            <section style={{
                backgroundColor: "#85FFBD",
                backgroundImage: 'linear-gradient(45deg, #85FFBD 0%, #fcff7d 100%)'
            }} className='flex
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
                    <div style={{ fontFamily: 'Roboto Mono, monospaced' }} className='my-auto '>
                        <h1 className='
                        text-2xl
                        md:text-3xl
                        lg:text-6xl
                        
                         font-bold
                         text-center
                         md:text-center
                         lg:text-start
                         
                         
                         text-green-1000'>Helping Communities Near and Far</h1>
                        <h1 className='
        text-baseline 
        md:text-2xl 
        text-green-900
        
        md:text-center
        lg:text-start
        text-justify
        
        
        '>Our commitment expands beyond our doors to patients in our communities. Take a look at our events and contributions.</h1>
                    </div>
                </div>
            </section>

            <section 
            // style={{
            //     backgroundColor: "#85FFBD",
            //     backgroundImage: 'linear-gradient(45deg, #85FFBD 0%, #fcff7d 100%)'
            // }} 
            
            className='flex
            justify-center
            sm:flex-row-reverse
            md:flex-row-reverse p-10 '>
                <div className='grid 
            lg:grid-cols-2 
            md:grid-cols-1 
            sm:grid-cols-1 
            gap-3
            '>
                <div style={{ fontFamily: 'Roboto Mono, monospaced' }} className='my-auto '>
                        <h1 className='
                        text-2xl
                        md:text-3xl
                        lg:text-4xl
                        
                         font-bold
                         text-center
                         md:text-center
                         lg:text-end
                         
                         
                         text-green-1000'>Scan the QR Code to book appointment</h1>
                        {/* <h1 className='
        text-baseline 
        md:text-2xl 
        text-green-900
        
        md:text-center
        lg:text-start
        text-justify
        
        
        '>Our commitment expands beyond our doors to patients in our communities. Take a look at our events and contributions.</h1> */}
                    </div>




                    <div className='
    w-80
    flex
    mx-auto
    justify-center
    md:justify-center
    lg:justify-start
    drop-shadow-lg p-5
    ' id="surrounding">
                       <img src={require('./../../../assets/images/qrcode.png')} />
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
                        <img className='w-12' src={require('./../../../assets/images/100x100.jpg')}/>
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

export default Home;