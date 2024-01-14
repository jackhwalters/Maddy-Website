import React from 'react';
import { Helmet } from 'react-helmet-async';
import '../css/WatchItem.css';

const Tender = () => {
    return (
        <div className="watch-container">
            <Helmet>
                <title>Maddy Walters | Tender</title>
                <meta name="tender" content="Tender" />
            </Helmet>
            <iframe
                width="85%"
                height="65%"
                src="https://www.youtube.com/embed/E3AnQ7Nlnug?si=JmoZxFNcdn1ViruJ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen>
            </iframe>
            <div className="watch-container-text">
                <p>
                    <br/>
                    <b>Tender</b>
                    <br/>
                    December 2023 
                    <br/>
                    <br/>
                    Role: Clapper and Lead Editor.
                    <br/>
                    Tender follows a young chef who will anything to reach the top.
                </p>
            </div>
        </div>
    )
}

const StrawberrySkittles = () => {
    return (
        <div className="watch-container">
            <Helmet>
                <title>Maddy Walters | Strawberry Skittles</title>
                <meta name="strawberryskittles" content="Strawberry Skittles" />
            </Helmet>
            <iframe 
                width="85%"
                height="65%"
                src="https://www.youtube.com/embed/PBW3g_qhjds?si=JLaBL0hZXhsy1aZX" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen>
            </iframe>
            <div className="watch-container-text">
                <p>
                    <br />
                    <b>Strawberry Skittles</b>
                    <br />
                    May 2023
                    <br />
                    <br />
                    Role: Director and Editor.
                    <br />
                    Strawberry Skittles is a music video featuring a song written by by Noelle Caroll.
                </p>
            </div>
        </div>
    )
}

const IAlreadyKnow = () => {
    return (
        <div className="watch-container">
            <Helmet>
                <title>Maddy Walters | I Already Know</title>
                <meta name="ialreadyknow" content="I Already Know" />
            </Helmet>
            <iframe
                width="85%"
                height="65%"
                src="https://www.youtube.com/embed/dMxZCmdw6cQ?si=0Wi4FVme5fHml2ES"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen>
            </iframe>
            <div className="watch-container-text">
                <p>
                    <br />
                    <b>I Already Know</b>
                    <br />
                    September 2023
                    <br />
                    <br />
                    Role: Director and Editor.
                    <br />
                    N/A, featuring a song written by Flora Fiora.
                </p>
            </div>
        </div>
    )
}

const DinnerWithYourThoughts = () => {
    return (
        <div className="watch-container">
            <Helmet>
                <title>Maddy Walters | Dinner With Your Thoughts</title>
                <meta name="dinnerwithyourthoughts" content="Dinner With Your Thoughts" />
            </Helmet>
            <iframe
                width="85%"
                height="65%"
                src="https://www.youtube.com/embed/PBO9U95q3dk?si=PWXvCKzTXAXup0d-"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen>
            </iframe>
            <div className="watch-container-text">
                <p>
                    <br />
                    <b>Dinner With Your Thoughts</b>
                    <br />
                    May 2023
                    <br />
                    <br />
                    Role: Director and Editor.
                    <br />
                    Dinner With Your Thoughts follows a new couple on their first date, along with all their inner thoughts that come with it.
                </p>
            </div>
        </div>
    )
}

const Dayglow = () => {
    return (
        <div className="watch-container">
            <Helmet>
                <title>Maddy Walters | Dayglow</title>
                <meta name="dayglow" content="Dayglow" />
            </Helmet>
            <iframe
                width="85%"
                height="65%"
                src="https://www.youtube.com/embed/oah9mf9Wi48?si=lfpjzdp1sj_OZX-g"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen>
            </iframe>
            <div className="watch-container-text">
                <p>
                    <br />
                    <b>Dayglow</b>
                    <br />
                    October 2023
                    <br />
                    <br />
                    Role: Director and Editor.
                    <br />
                    N/A, featuring a song written by Finn Mungo.
                </p>
            </div>
        </div>
    )
}

export {
    Tender,
    StrawberrySkittles,
    IAlreadyKnow,
    DinnerWithYourThoughts,
    Dayglow
};
