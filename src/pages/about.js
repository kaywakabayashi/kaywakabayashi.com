import React from 'react';

function About() {
    return (
        <>
            <div className="h-full grid justify-center">
                <div className="font-light text-lg sm:text-xl md:text-2xl lg:text-3xl  mt-14 mx-14 sm:mt-24 sm:mx-20 md:mx-24 lg:mx-28 mb-20">
                    <p className="body-content">
                        I love learning new things. <br />
                        I was born and raised in Japan and I spent 4 years as a pre-med student before I came to the US.
I wrote my first program in 2020 and so far I have learned C/C++, Java, HTML/CSS and I am learning ReactJS.

                <br /><br />

                I enjoy designing. <br />
                I have done multiple creative projects.
                I believe in the power of minimalism. Making a good
                elaborate design is difficult but making it simple
                is much more difficult. <br />
                Since the day I learned that I fell in love with the process.
                {/* And I really enjoy what I am doing :) */}

                    </p>
                </div>
            </div>
        </>
    );
};

export default About
