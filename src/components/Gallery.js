import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../css/Gallery.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import GalleryItem from './GalleryItem';

const Gallery = () => {
    document.title = "Maddy Walters | Portfolio"

    const hoverStateArray = [];

    const handleMouseEnter = (movieNum) => { 
        hoverStateArray[movieNum - 1][1](true); 
    }

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
                    <GalleryItem
                        imagePositionCSS={"left-image"}
                        isHoverEnabled={isHoverEnabled}
                        handleMouseEnter={handleMouseEnter}
                        handleMouseExit={handleMouseExit}
                        testId={"tender-1"}
                        hrefURL={"/watch/tender"}
                        title={"Tender"}
                        hoverStateInd={1}
                        hoverStateBool={hoverStateArray[1 - 1][0]}
                        gifSrc={"gifs/tender.gif"}
                        imgSrc={"images/tender/tender1.png"}
                        imgClass={"img-fluid"}
                    />
                </Col>
                <Col lg={4} xs={12}>
                    <Row>
                        <Col>
                            <GalleryItem
                                imagePositionCSS={"right-image bottom"}
                                isHoverEnabled={isHoverEnabled}
                                handleMouseEnter={handleMouseEnter}
                                handleMouseExit={handleMouseExit}
                                testId={"dayglow"}
                                hrefURL={"/watch/dayglow"}
                                title={"Dayglow"}
                                hoverStateInd={2}
                                hoverStateBool={hoverStateArray[2 - 1][0]}
                                gifSrc={"gifs/dayglow.gif"}
                                imgSrc={"images/dayglow/dayglow8.png"}
                                imgClass={"img-fluid"}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <GalleryItem
                                imagePositionCSS={"right-image small-image-bottom-upper"}
                                isHoverEnabled={isHoverEnabled}
                                handleMouseEnter={handleMouseEnter}
                                handleMouseExit={handleMouseExit}
                                testId={"dwyt"}
                                hrefURL={"/watch/dinnerwithyourthoughts"}
                                title={"Dinner with Your Thoughts"}
                                hoverStateInd={3}
                                hoverStateBool={hoverStateArray[3 - 1][0]}
                                gifSrc={"gifs/dinner_with_your_thoughts.gif"}
                                imgSrc={"images/dinner_with_your_thoughts/dinner_with_your_thoughts1.png"}
                                imgClass={"img-fluid"}
                            />
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className="middle-row">
                <Col lg={4} xs={12}>
                    <Row>
                        <Col className="left-image-col">
                            <GalleryItem
                                imagePositionCSS={"right-image left-image"}
                                isHoverEnabled={isHoverEnabled}
                                handleMouseEnter={handleMouseEnter}
                                handleMouseExit={handleMouseExit}
                                testId={"ialreadyknow"}
                                hrefURL={"/watch/ialreadyknow"}
                                title={"I Already Know"}
                                hoverStateInd={4}
                                hoverStateBool={hoverStateArray[4 - 1][0]}
                                gifSrc={"gifs/i_already_know.gif"}
                                imgSrc={"images/i_already_know/i_already_know1.png"}
                                imgClass={"img-fluid left-image"}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col className="left-image-bottom-col">
                            <GalleryItem
                                imagePositionCSS={"left-image small-image-bottom"}
                                isHoverEnabled={isHoverEnabled}
                                handleMouseEnter={handleMouseEnter}
                                handleMouseExit={handleMouseExit}
                                testId={"dayglow-2"}
                                hrefURL={"/watch/dayglow"}
                                title={"Dayglow"}
                                hoverStateInd={5}
                                hoverStateBool={hoverStateArray[5 - 1][0]}
                                gifSrc={"gifs/dayglow2.gif"}
                                imgSrc={"images/dayglow/dayglow4.png"}
                                imgClass={"img-fluid left-image"}
                            />
                        </Col>
                    </Row>
                </Col>
                <Col lg={8} xs={12}>
                        <GalleryItem
                            imagePositionCSS={"right-image"}
                            isHoverEnabled={isHoverEnabled}
                            handleMouseEnter={handleMouseEnter}
                            handleMouseExit={handleMouseExit}
                            testId={"strawberryskittles"}
                            hrefURL={"/watch/strawberryskittles"}
                            title={"Strawberry Skittles"}
                            hoverStateInd={6}
                            hoverStateBool={hoverStateArray[6 - 1][0]}
                            gifSrc={"gifs/strawberry_skittles.gif"}
                            imgSrc={"images/strawberry_skittles/strawberry_skittles1.png"}
                            imgClass={"img-fluid"}
                        />
                </Col>
            </Row>
        </Container>
    );
};

export default Gallery;
