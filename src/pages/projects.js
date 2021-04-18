import React from 'react';
import { Link } from 'react-router-dom';
import LetsTradeScreen from '../img/LetsTradeScreen.png';
import EfficientlyScreen from '../img/EfficientlyScreen.png';


function Projects() {
    return (
        <>
            <div className="my-20">
                <h1 className="font-semibold text-center mb-14 sm:text-2xl md:text-3xl lg:text-4xl">THE R PROJECTS</h1>
                <div className="grid justify-items-center sm:grid-cols-3  ">
                    <div className="font-thin text-xl sm:text-2xl md:text-3xl lg:text-4xl sm:transform sm:-rotate-90 transition duration-500 ease-in-out
    mb-10" >2020</div>
                    <div>
                        <iframe className="sm: " src="https://player.vimeo.com/video/538200578?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="320" height="230" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="D R O P   I T !.mp4"></iframe>
                    </div>
                    <div className="font-thin text-xl sm:text-2xl md:text-3xl lg:text-4xl sm:transform sm:rotate-90 transition duration-500 ease-in-out" >[COMPLETE]</div>
                </div>
                <div className="text-center text-sm  ">
                    <a className="text-blue-500" href="https://music.apple.com/us/artist/young-wolf/1511812234">Apple Music</a>
                    <span className="" > / </span>
                    <a className="text-blue-500" href="https://open.spotify.com/album/5yCCUAAUxjaUnfWBML4evc?si=_d1iwwvyT8qz2QTgey0XmQ">Spotify</a>
                    <span className="" > / </span>
                    <a className="text-blue-500" href="https://www.amazon.com/DROP-Explicit-Young-Wolf/dp/B087QN7PQ5">Amazon</a>
                </div>
                <p className="mt-12 text-center text-base mx-8 leading-loose">Music production project, worked with a musician and videographers and led the entire project. Music video shot in LA. Songs are available on streaming services.</p>

            </div>

            <div className="my-16">
                <h1 className="font-semibold text-center mb-14 sm:text-2xl md:text-3xl lg:text-4xl">Let's Trade</h1>
                <div className="grid justify-items-center sm:grid-cols-3  ">
                    <div className="font-thin text-xl sm:text-2xl md:text-3xl lg:text-4xl sm:transform sm:-rotate-90 transition duration-500 ease-in-out
            mb-10" >2020</div>
                    <div>
                        <div className="items-center"><img src={LetsTradeScreen} /></div>
                    </div>
                    <div className="font-thin text-xl sm:text-2xl md:text-3xl lg:text-4xl sm:transform sm:rotate-90 transition duration-500 ease-in-out" >[IN PROGRESS]</div>
                </div>
                <div className="text-center text-sm ">
                    <a className="text-blue-500" href="https://githut.com/smc-tech-telk/lets-trade">GitHub</a>
                </div>
                <p className="mt-12 text-center text-base mx-8 leading-loose">Virtual stock trading game project. Implemented in C++.</p>

            </div>


            <div className="my-16">
                <h1 className="font-semibold text-center mb-14 sm:text-2xl md:text-3xl lg:text-4xl">ETERNAL CARD</h1>
                <div className="grid justify-items-center sm:grid-cols-3  ">
                    <div className="font-thin text-xl sm:text-2xl md:text-3xl lg:text-4xl sm:transform sm:-rotate-90 transition duration-500 ease-in-out
            mb-10" >2020</div>
                    <div>
                        <div className="items-center"><iframe src="https://player.vimeo.com/video/538203679?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="320" height="230" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="3D Animation.mp4"></iframe></div>
                    </div>
                    <div className="font-thin text-xl sm:text-2xl md:text-3xl lg:text-4xl sm:transform sm:rotate-90 transition duration-500 ease-in-out" >[IN PROGRESS]</div>
                </div>
                <div className="text-center text-sm ">
                    <a className="text-blue-500" href="https://eternal-card.com">eternal-card.com</a>
                </div>
                <p className="mt-12 text-center text-base mx-8 leading-loose">NFT(non-fungible token) project. Designed a set of collectable card NFT.</p>

            </div>


            <div className="my-16">
                <h1 className="font-semibold text-center mb-14 sm:text-2xl md:text-3xl lg:text-4xl">Efficiently.app</h1>
                <div className="grid justify-items-center sm:grid-cols-3  ">
                    <div className="font-thin text-xl sm:text-2xl md:text-3xl lg:text-4xl sm:transform sm:-rotate-90 transition duration-500 ease-in-out
            mb-10" >2020</div>
                    <div>
                        <div className="items-center"><img src={EfficientlyScreen} /></div>
                    </div>
                    <div className="font-thin text-xl sm:text-2xl md:text-3xl lg:text-4xl sm:transform sm:rotate-90 transition duration-500 ease-in-out" >[COMMING SOON]</div>
                </div>
                <div className="text-center text-sm ">
                    <a className="text-blue-500" href="https://githut.com/therprojects/lets-trade">GitHub</a>
                    <span className="" > / </span>
                    <a className="text-blue-500" href="https://efficiently.app">efficiently.app</a>
                </div>
                <p className="mt-12 text-center text-base mx-8 leading-loose">Multi Platform React Todo App Project. Comming soon.</p>

            </div>



            {/* <h1 className="font-semibold text-center mb-14">THE R PROJECTS</h1>
            <div className="flex mb-10">
                <div className="relative font-bold text-xl transform -rotate-90">2020</div>
               
            </div>
            <p className="text-base text-center mb-5">Music production project. Music video shot in LA. Available on streaming services.</p>
            <div className="text-center text-sm text-blue-500">
                <a className="" href="https://music.apple.com/us/artist/young-wolf/1511812234">Apple Music</a>
                <span className="text-black" > / </span>
                <a className="" href="https://open.spotify.com/album/5yCCUAAUxjaUnfWBML4evc?si=_d1iwwvyT8qz2QTgey0XmQ">Spotify</a>
                <span className="text-black" > / </span>
                <a className="" href="https://www.amazon.com/DROP-Explicit-Young-Wolf/dp/B087QN7PQ5">Amazon</a>
            </div>
            <div className="content-container">
                <div className="body-container">
                    <div className="body-content">
                        <div className="items-center mb-40">
                            <h1 className="font-semibold text-center mb-14">THE R PROJECTS</h1>
                            <div className="flex mb-10">
                                <div className="font-bold text-xl transform -rotate-90">2020</div>
                                <div className="items-center"><iframe src="https://player.vimeo.com/video/538200578?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="320" height="230" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="D R O P   I T !.mp4"></iframe></div>
                            </div>
                            <p className="text-base text-center mb-5">Music production project. Music video shot in LA. Available on streaming services.</p>
                            <div className="text-center text-sm text-blue-500">
                                <a className="" href="https://music.apple.com/us/artist/young-wolf/1511812234">Apple Music</a>
                                <span className="text-black" > / </span>
                                <a className="" href="https://open.spotify.com/album/5yCCUAAUxjaUnfWBML4evc?si=_d1iwwvyT8qz2QTgey0XmQ">Spotify</a>
                                <span className="text-black" > / </span>
                                <a className="" href="https://www.amazon.com/DROP-Explicit-Young-Wolf/dp/B087QN7PQ5">Amazon</a>
                            </div>
                        </div>


                        <div className="mb-40">
                            <h1 className="font-semibold text-center">Let's Trade</h1>
                            <div className="mb-20">
                                <div className="flex mb-10">
                                    <div className="font-bold text-xl transform -rotate-90 ml-40">2021</div>
                                    <div className="items-center"><img src={LetsTradeScreen} /></div>
                                </div>
                                <div className="text-center"><p>Virtual stock trading game project. Implemented in C++.</p></div>
                            </div>
                        </div>

                        <div className="mb-40">
                            <h1 className="font-semibold text-center mb-14">ETERNAL CARD</h1>
                            <div className="mb-20">
                                <div className="flex mb-10">
                                    <div className="font-bold text-xl transform -rotate-90 ml-40">2021</div>
                                    <div className="items-center"><iframe src="https://player.vimeo.com/video/538203679?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="3D Animation.mp4"></iframe></div>
                                </div>
                                <div className="text-center"><p>NFT(non-fungible token) project. Design an NFT product and sold on the market.</p></div>
                            </div>
                        </div>







                    </div>
                </div>
            </div> */}
        </>
    );
};

export default Projects
