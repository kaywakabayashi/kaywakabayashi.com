import React from 'react';
import { Link } from 'react-router-dom'

function Hero() {
    return (
        <>
            <div>
                <div className="h-screen flex flex-col items-center ">
                    <div className="body-container">
                        <p className="body-content">
                            <p className="mb-10">Hello there,</p>
                            My name is
                            <Link to="/about" className="pulse-blue"> Katsuya Wakabayashi. </Link><br />
                            I
                            <a className="pulse-green" href="https://github.com/katsuyaw"> code</a>
                            , write, and
                            <Link to="/projects" className="pulse-yellow"> create new value</Link>.
                            <br />I am currently a CS major college student in LA and
                            looking for <a className="pulse-pink" href="https://linkedin.com/in/kats"> internships</a>. <br />
                            Looking forward to hearing from you.</p>
                        <p className="leading-relaxed tracking-wide"><br />
                            <span>Sent from my </span>
                            <a className="pulse-purple" href="tel:334-454-3210">iPhone</a>
                        </p>
                        <div className="absolute bottom-0 right-4 ">
                            <div className="inline-block">
                                <Link to="/resume" className="action-btn" href="mailto:reply@katsuya.co?subject=Re: [Hi there]">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clipRule="evenodd" /></svg>
                                </Link>
                            </div>
                            <div className="inline-block">
                                <a className="action-btn" href="mailto:reply@katsuya.co?subject=Re: [Hi there]">
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
