import React from 'react';
import Carousel, { autoplayPlugin } from '@brainhubeu/react-carousel';
import '../Pages/linebreak.css'
const Service = () => {
    return (
        <>
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
                    
                    
                    '>সেবা সমূহঃ</h1>
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
                        {`• স্তনরোগের চিকিৎসা ও অপারেশন
                        • পেটের টিউমার অপারেশন, অন্যান্য নিউমার অপসারন ও জরায়ুর অপারেশন
                        • লিউকোরিয়া ও জরায়ুর মুখের ঘা এবং সমস্যাগ্রন্থ মায়ের চিকিৎসা
                        • যৌনরোগ সম্পর্কিত পরামর্শ ও চিকিৎসা(STD Awareness Programme)
                        • জন্মনিয়ন্ত্রণ পরামর্শ (Contraception counselling)
                        • সন্তানহীন দম্পতিদের সু-চিকিৎসা (Infertility Rx)
                        • মহিলাদের মাসিক (ঋতু চক্র) বন্ধ হয়ে যাওয়া (রজঃ নিবৃতি) এর পরবর্তী ও পূর্ববর্তী উপসর্গ সমূহের চিকিৎসা
                        • গর্ভকালীন সেবা (ANC) প্রসব পরবর্তী সেবা (PNC)
                        `}
                            

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
                    '>
                        {`→ অক্সিজেন ও নেবুলাইজেশন সুবিধা
                        → স্বল্পমূল্যে নরমাল ডেলিভারি ও সিজারিয়ান অপারেশন
                        → বায়োকেমিস্ট্রি এনালাইজার, হরমোন এনালাইজার
                        → সেল কাউন্টার সমৃদ্ধ অত্যাধুনিক প্যাথলজি বিভাগ, ডিজিটাল এক্স-রে ও কনসালটেন্ট দ্বারা রিপোর্টিং
                        → আল্ট্রাসনোগ্রাফি ও ১৫ চ্যানেল ইসিজি
                        → বিশেষজ্ঞ ডাক্তারদের চেম্বার
                        `}
                            

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
                        {`→ ২৪ ঘন্টা মেডিকেল অফিসার সার্ভিস
                       →  শীততাপ নিয়ন্ত্রিত কেবিন ও মানসম্মত ওয়ার্ড সুবিধা
                       → দক্ষ নার্স দ্বারা রোগীদের সার্বক্ষণিক তত্বাবধান
                       → উন্নত প্রযুক্তি সম্পন্ন অপারেশন থিয়েটার
                       সার্বক্ষণিক বিদ্যুৎ সরবরাহের নিশ্চয়তা
                       → ২৪ ঘন্টা ফার্মেসী খোলা রাখার ব্যাবস্থা
                       → স্বল্প খরচে উন্নত চিকিৎসা সেবা
                        `}
                            

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

export default Service;