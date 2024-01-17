import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../css/Gallery.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const Gallery = () => {
    document.title = "Maddy Walters | Portfolio"

    const hoverStateArray = [];
    for (let i = 0; i < 6; i++) { hoverStateArray.push(useState(false)); }

    const handleMouseEnter = (movieNum) => { hoverStateArray[movieNum - 1][1](true); }

    const handleMouseExit = (movieNum) => { hoverStateArray[movieNum - 1][1](false); }
    
    return (
        <Container fluid>
            <Row>
                <Col lg={8} xs={12}>
                    <div 
                        className="image-container left-image"
                        onMouseEnter={() => {handleMouseEnter(1)}}
                        onMouseLeave={() => {handleMouseExit(1)}}
                    >
                        <a href="/watch/tender">
                            <div className="image-overlay">
                                <p>
                                    Tender
                                </p>
                            </div>
                            <img
                                src={hoverStateArray[1 - 1][0] ? "gifs/tender.gif" : "images/tender/tender1.png"}
                                className="img-fluid"
                                alt="Large Image" />
                        </a>
                    </div>
                </Col>
                <Col lg={4} xs={12}>
                    <Row>
                        <Col>
                            <div 
                                className="image-container right-image"
                                onMouseEnter={() => {handleMouseEnter(2)}}
                                onMouseLeave={() => {handleMouseExit(2)}}
                            >
                                <a href="/watch/strawberryskittles">
                                    <div className="image-overlay">
                                        <p>
                                            Strawberry Skittles
                                        </p>
                                    </div>
                                    <img
                                        src={hoverStateArray[2 - 1][0] ? "gifs/strawberry_skittles.gif" : "images/strawberry_skittles/strawberry_skittles1.png"}
                                        className="img-fluid"
                                        alt="Small Image 1" />
                                </a>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="image-container right-image small-image-bottom">
                                <a href="/watch/dinnerwithyourthoughts">
                                    <div
                                        className="image-overlay"
                                        onMouseEnter={() => { handleMouseEnter(3) }}
                                        onMouseLeave={() => { handleMouseExit(3) }}
                                    >
                                        <p>
                                            Dinner with Your Thoughts
                                        </p>
                                    </div>
                                    <img
                                        src={hoverStateArray[3 - 1][0] ? "gifs/dinner_with_your_thoughts.gif" : "images/dinner_with_your_thoughts/dinner_with_your_thoughts1.png"}
                                        className="img-fluid"
                                        alt="Small Image 2" />
                                </a>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className="middle-row">
                <Col lg={4} xs={12}>
                    <Row>
                        <Col>
                            <div 
                                className="image-container left-image"
                                onMouseEnter={() => { handleMouseEnter(4) }}
                                onMouseLeave={() => { handleMouseExit(4) }}
                            >
                                <a href="/watch/ialreadyknow">
                                    <div className="image-overlay">
                                        <p>
                                            I Already Know
                                        </p>
                                    </div>
                                    <img
                                        src={hoverStateArray[4 - 1][0] ? "gifs/i_already_know.gif" : "images/i_already_know/i_already_know1.png"}
                                        className="img-fluid left-image"
                                        alt="Small Image 1" />
                                </a>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="image-container left-image small-image-bottom"></div>
                        </Col>
                    </Row>
                </Col>
                <Col lg={8} xs={12}>
                    <div className="image-container right-image">
                        <a href="/watch/dayglow">
                            <div 
                                className="image-overlay"
                                onMouseEnter={() => { handleMouseEnter(6) }}
                                onMouseLeave={() => { handleMouseExit(6) }}
                            >
                                <p>
                                    Dayglow
                                </p>
                            </div>
                            <img
                                src={hoverStateArray[6 - 1][0] ? "gifs/dayglow.gif" : "images/dayglow/dayglow1.png"}
                                className="img-fluid"
                                alt="Large Image" />
                        </a>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Gallery;
