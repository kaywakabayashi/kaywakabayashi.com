import React from 'react';
import { Link } from 'react-router-dom'

function Hero() {
    return (
        <>
        <div>
            <div className="h-screen flex flex-col items-center ">
                    {/* <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light mt-20 mx-36 ">
                        KATSUYA WAKABAYASHI
                    </h1> */}
                    <div className="font-light text-lg sm:text-xl md:text-2xl lg:text-3xl  mt-14 mx-10 sm:mt-24 sm:mx-20 md:mx-24 lg:mx-28 ">
                        <p className="leading-loose tracking-wider">
                        <p className="mb-10">Hello there,</p>
                        My name is 
                        <Link to="/about" className="animate-pulse hover:text-blue-500"> Katsuya Wakabayashi. </Link>
                        <br />I
                        <a className="animate-pulse hover:text-green-300"href="https://github.com/katsuyaw"> code</a>
                        , write, and 
                        <Link to="/projects" className="animate-pulse hover:text-yellow-500"> create new value</Link>
                        
                        .
                        I am currently a CS major college student in LA and 
                        looking for <a className="animate-pulse hover:text-pink-300"href="https://linkedin.com/in/kats"> internships</a>. <br/>Looking forward to hearing from you.</p>
                        <p className="leading-relaxed tracking-wide"><br />
                            <span>Send from my </span>
                            <a className="animate-pulse hover:text-purple-500" href="tel:334-454-3210">iPhone</a>
                        </p>
                        <div className="absolute bottom-0 right-4 ">
                            <div className="inline-block">
                                <Link to="/resume" className="py-12 px-12 rounded-full text-3xl hover:text-blue-400  transition duration-400 ease-in-out
                                    mb-10 " href="mailto:reply@katsuya.co?subject=Re: [Hi there]">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clipRule="evenodd" /></svg>
                                </Link>
                            </div>
                            <div className="inline-block">
                                <a className="py-12 px-12 rounded-full text-3xl hover:text-blue-400  transition duration-400 ease-in-out
                                mb-10 " href="mailto:reply@katsuya.co?subject=Re: [Hi there]">
                                <div><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" /></svg></div>
                                </a>
                            </div>
                        </div>
                        
                    </div>
                </div>
                
        </div>
        </>
    );
};

export default Hero
