import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Helmet } from 'react-helmet-async';
import '../css/Gallery.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const Gallery = () => {
    return (
        <Container fluid>
            <Helmet>
                <title>Maddy Walters | Portfolio</title>
                <meta name="portfolio" content="Maddy Walters portfolio page" />
            </Helmet>
            <Row>
                <Col lg={8} xs={12}>
                    <div className="image-container left-image">
                        <a href="/watch/film1">
                            <div className="image-overlay">
                                <p>
                                    Maddy's Film 1
                                </p>
                            </div>
                            <img
                                src="images/movie6.png"
                                className="img-fluid"
                                alt="Large Image" />
                        </a>
                    </div>
                </Col>
                <Col lg={4} xs={12}>
                    <Row>
                        <Col>
                            <div className="image-container right-image">
                                <a href="/watch/film2">
                                    <div className="image-overlay">
                                        <p>
                                            Maddy's Film 2
                                        </p>
                                    </div>
                                    <img
                                        src="images/movie2.png"
                                        className="img-fluid"
                                        alt="Small Image 1" />
                                </a>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="image-container right-image small-image-bottom">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                                    eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
                                    in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className="middle-row">
                <Col lg={4} xs={12}>
                    <Row>
                        <Col>
                            <div className="image-container left-image">
                                <a href="/watch/film3">
                                    <div className="image-overlay">
                                        <p>
                                            Maddy's Film 3
                                        </p>
                                    </div>
                                    <img
                                        src="images/movie5.png"
                                        className="img-fluid left-image"
                                        alt="Small Image 1" />
                                </a>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="image-container left-image small-image-bottom">
                                <a href="">
                                    <div className="image-overlay">
                                        <p>
                                            Maddy's Film 4
                                        </p>
                                    </div>
                                    <img
                                        src="images/movie4.png"
                                        className="img-fluid"
                                        alt="Small Image 2" />
                                </a>
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col lg={8} xs={12}>
                    <div className="image-container right-image">
                        <a href="">
                            <div className="image-overlay">
                                <p>
                                    Maddy's Film 5
                                </p>
                            </div>
                            <img
                                src="images/movie3.png"
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
