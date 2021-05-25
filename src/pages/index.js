import React from 'react';
import { Link } from 'react-router-dom'

function Home() {
    return (
        <>
            <div className="h-full grid justify-center">
                <div className="text-base tracking-wider leading-relax sm:tracking-wider sm:leading-relax mx-10 mt-16 sm:text-xl">
                    <p >Hello there,</p><br />
                    <span>My name is </span>
                    <Link to="/about" className="pulse-blue-no-hover underline">Katsuya Wakabayashi</Link>.<br />
                    <span>I </span>
                    <a className="pulse-green-no-hover underline" href="https://github.com/katsuyaw">code</a>
                    <span>, write, and </span>
                            <Link to="/projects" className="pulse-yellow-no-hover underline">create new value</Link>.
                            <br />I am currently a CS major college student in LA and

                            looking for internships. <br />
                            <span>Feel free to say hi to me on </span><a className="pulse-pink-no-hover underline" href="https://linkedin.com/in/kats">LinkedIn</a><span>. Let's connect!</span>
                            


                            <p className="leading-relaxed tracking-wide "><br />
                        <span>Sent from my </span>
                        <a className="pulse-purple" href="tel:334-454-3210">iPhone</a>
                    </p>
                    <div className="flex justify-end mt-0 sm:mt-20">
                        <div className="">
                            <a href="https://drive.google.com/file/d/1hZVi1QKysHm6gSdVz0uJRsUPZbHabA3n/view?usp=sharing" className="ml-8 p-2 action-btn" >
                                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clipRule="evenodd" /></svg>
                            </a>
                        </div>
                        <div className="">
                            <a className="mx-4 p-2 action-btn" href="mailto:reply@katsuya.me?subject=Re: [Hi there]">
                                <div><svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" /></svg></div>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
            {/* <div>
                <div className="">
                    <div className="">
                        <p className="">
                            <p className="mb-10">Hello there,</p>
                            My name is
                            <Link to="/about" className="pulse-blue"> Katsuya Wakabayashi. </Link><br />
                            I
                            <a className="pulse-green" href="https://github.com/katsuyaw"> code</a>
                            , write, and
                            <Link to="/projects" className="pulse-yellow"> create new value</Link>.
                            <br />I am currently a CS major college student in LA and
                            looking for <a className="pulse-pink" href="https://linkedin.com/in/kats"> internships</a>. <br />
                            Looking forward to working with you.</p>
                        <p className="leading-relaxed tracking-wide"><br />
                            <span>Sent from my </span>
                            <a className="pulse-purple" href="tel:334-454-3210">iPhone</a>
                        </p>
                        <div className="absolute bottom-0">
                            <div className="inline-block">
                                <a href="https://drive.google.com/file/d/1hZVi1QKysHm6gSdVz0uJRsUPZbHabA3n/view?usp=sharing" className="action-btn" >
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clipRule="evenodd" /></svg>
                                </a>
                            </div>
                            <div className="inline-block">
                                <a className="action-btn" href="mailto:reply@katsuya.co?subject=Re: [Hi there]">
                                    <div><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" /></svg></div>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>

            </div> */}
        </>
    );
};

export default Home
