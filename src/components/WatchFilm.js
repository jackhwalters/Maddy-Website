import React from 'react';
import { Helmet } from 'react-helmet-async';
import '../css/WatchItem.css';

const Film1 = () => {
    return (
        <div className="watch-container">
            <Helmet>
                <title>Maddy Walters | Film 1</title>
                <meta name="film1" content="Maddy Walters Film 1" />
            </Helmet>
            <iframe
                src="https://player.vimeo.com/video/105989178?h=c56cf5821c"
                className="iframe-embed"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen>
            </iframe>
            <div className="watch-container-text">
                <p>
                    <br/>
                    <b>Maddy's Film 1</b>
                    <br/>
                    21.5.2023 
                    <br/>
                    <br/>
                    This is a short blurb about Maddy's Film 1. Maybe there could be some 
                    information about when and where it was filmed, and who you worked with.
                </p>
            </div>
        </div>
    )
}

const Film2 = () => {
    return (
        <div className="watch-container">
            <Helmet>
                <title>Maddy Walters | Film 2</title>
                <meta name="film2" content="Maddy Walters Film 2" />
            </Helmet>
            <iframe
                src="https://player.vimeo.com/video/236415943?h=2b46d1839d"
                className="iframe-embed"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen>
            </iframe>
            <div className="watch-container-text">
                <p>
                    <br />
                    <b>Maddy's Film 2</b>
                    <br />
                    3.6.2023
                    <br />
                    <br />
                    This is a short blurb about Maddy's Film 2. Maybe there could be some
                    information about when and where it was filmed, and who you worked with.
                </p>
            </div>
        </div>
    )
}

const Film3 = () => {
    return (
        <div className="watch-container">
            <Helmet>
                <title>Maddy Walters | Film 3</title>
                <meta name="film3" content="Maddy Walters Film 3" />
            </Helmet>
            <iframe
                src="https://player.vimeo.com/video/221286690?h=bdb4b65535"
                className="iframe-embed"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen>
            </iframe>
            <div className="watch-container-text">
                <p>
                    <br />
                    <b>Maddy's Film 3</b>
                    <br />
                    5.6.2023
                    <br />
                    <br />
                    This is a short blurb about Maddy's Film 3. Maybe there could be some
                    information about when and where it was filmed, and who you worked with.
                </p>
            </div>
        </div>
    )
}

export {Film1, Film2, Film3};
