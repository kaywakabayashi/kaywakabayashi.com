import React from 'react';
import { Link } from 'react-router-dom';
import LetsTradeScreen from '../img/LetsTradeScreen.png';


function Projects() {
    return (
        <>
            <div className="content-container">
                <div className="body-container">
                    <div className="body-content">
                        <h1 className="font-semibold">THE R PROJECTS</h1>
                        <p>Music Video Production. Shot a music video for artists in LA.</p>
                        <iframe src="https://player.vimeo.com/video/538200578?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="D R O P   I T !.mp4"></iframe>
                        <h1 className="font-semibold">Let's Trade</h1>
                        <p>Virtual stock trading game project. Implemented in C++.</p>
                        <img src={('../img/LetsTradeScreen.png')} />
                        <h1 className="font-semibold">ETERNAL CARD</h1>
                        <p>NFT(non-fungible token) project. Design an NFT product and sold on the market.</p>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Projects
