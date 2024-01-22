import React from 'react';
import '../css/WatchItem.css';

const WatchFilm = ({src, title, releaseDate, role, description}) => {
    document.title = `Maddy Walters | ${title}`
    return (
        <div className="watch-container">
            <iframe
                width="85%"
                height="65%"
                src={src}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen 
                data-testid="watch-iframe">
            </iframe>
            <div className="watch-container-text">
                <p>
                    <br/>
                    <b>{title}</b>
                    <br/>
                    {releaseDate} 
                    <br/>
                    <br/>
                    {role}
                    <br/>
                    {description}
                </p>
            </div>
        </div>
    )
}

export default WatchFilm;
