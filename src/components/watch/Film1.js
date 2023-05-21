import React from 'react';
import '../../css/WatchItem.css';

const Film1 = () => {
    return (
        <div className="watch-container">
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
                    Maddy's Film 1
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

export default Film1;
