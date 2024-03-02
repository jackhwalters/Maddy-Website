import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../css/Gallery.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const Gallery = () => {
    document.title = "Maddy Walters | Portfolio"

    const hoverStateArray = [];

    const handleMouseEnter = (movieNum) => { hoverStateArray[movieNum - 1][1](true); }

    const handleMouseExit = (movieNum) => { hoverStateArray[movieNum - 1][1](false); }

    for (let i = 0; i < 7; i++) { hoverStateArray.push(useState(false)); }

    useEffect(() => {
        const isTouchDevice = 'ontouchstart' in window || navigator.msMaxTouchPoints;
        setIsHoverEnabled(!isTouchDevice);
    }, []);

    const [isHoverEnabled, setIsHoverEnabled] = useState(true);

    return (
        <Container fluid>
            <Row>
                <Col lg={8} xs={12}>
                    <div 
                        className="image-container left-image"
                        onMouseEnter={isHoverEnabled ? () => handleMouseEnter(1) : null}
                        onMouseLeave={isHoverEnabled ? () => handleMouseExit(1) : null}
                        data-testid="container-tender-1"
                    >
                        <a href="/watch/tender">
                            <div className="image-overlay" data-testid="overlay-tender-1">
                                <p>
                                    Tender
                                </p>
                            </div>
                            <img
                                src={hoverStateArray[1 - 1][0] ? "gifs/tender.gif" : "images/tender/tender1.png"}
                                className="img-fluid"
                                alt="Tender"
                                data-testid="image-tender-1" />
                        </a>
                    </div>
                </Col>
                <Col lg={4} xs={12}>
                    <Row>
                        <Col>
                            <div 
                                className="image-container right-image"
                                onMouseEnter={isHoverEnabled ? () => handleMouseEnter(2) : null}
                                onMouseLeave={isHoverEnabled ? () => handleMouseExit(2) : null}
                                data-testid="container-strawberryskittles"
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
                                        alt="Strawberry Skittles"
                                        data-testid="image-strawberryskittles" />
                                </a>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="image-container right-image small-image-bottom-upper">
                                <a href="/watch/dinnerwithyourthoughts">
                                    <div
                                        className="image-overlay"
                                        onMouseEnter={isHoverEnabled ? () => handleMouseEnter(3) : null}
                                        onMouseLeave={isHoverEnabled ? () => handleMouseExit(3) : null}
                                        data-testid="container-dwyt"
                                    >
                                        <p>
                                            Dinner with Your Thoughts
                                        </p>
                                    </div>
                                    <img
                                        src={hoverStateArray[3 - 1][0] ? "gifs/dinner_with_your_thoughts.gif" : "images/dinner_with_your_thoughts/dinner_with_your_thoughts1.png"}
                                        className="img-fluid"
                                        alt="Dinner with Your Thoughts"
                                        data-testid="image-dwyt" />
                                </a>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className="middle-row">
                <Col lg={4} xs={12}>
                    <Row>
                        <Col className="left-image-col">
                            <div 
                                className="image-container left-image"
                                onMouseEnter={isHoverEnabled ? () => handleMouseEnter(4) : null}
                                onMouseLeave={isHoverEnabled ? () => handleMouseExit(4) : null}
                                data-testid="container-ialreadyknow"
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
                                        alt="I Already Know"
                                        data-testid="image-ialreadyknow" />
                                </a>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="left-image-bottom-col">
                            <div 
                                className="image-container left-image small-image-bottom"
                                onMouseEnter={isHoverEnabled ? () => handleMouseEnter(5) : null}
                                onMouseLeave={isHoverEnabled ? () => handleMouseExit(5) : null}
                                data-testid="container-dayglow-2"
                            >
                                <a href="/watch/dayglow">
                                    <div className="image-overlay">
                                        <p>
                                            Dayglow 
                                        </p>
                                    </div>
                                    <img
                                        src={hoverStateArray[5 - 1][0] ? "gifs/dayglow2.gif" : "images/dayglow/dayglow4.png"}
                                        className="img-fluid left-image"
                                        alt="Dayglow"
                                        data-testid="image-dayglow-2" />
                                </a>
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col lg={8} xs={12}>
                    <div className="image-container right-image bottom">
                        <a href="/watch/dayglow">
                            <div 
                                className="image-overlay"
                                onMouseEnter={isHoverEnabled ? () => handleMouseEnter(6) : null}
                                onMouseLeave={isHoverEnabled ? () => handleMouseExit(6) : null}
                                data-testid="container-dayglow"
                            >
                                <p>
                                    Dayglow
                                </p>
                            </div>
                            <img
                                src={hoverStateArray[6 - 1][0] ? "gifs/dayglow.gif" : "images/dayglow/dayglow8.png"}
                                className="img-fluid"
                                alt="Dayglow"
                                data-testid="image-dayglow" />
                        </a>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Gallery;
