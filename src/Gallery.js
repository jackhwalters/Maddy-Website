import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './css/Gallery.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const Gallery = () => {
    return (
        <Container fluid>
            <Row>
                <Col lg={8} xs={12}>
                    <div className="image-container left-image">
                        <div className="image-overlay">
                            <p>
                                Maddy's Film 1
                            </p>
                        </div>
                        <img
                            src="images/movie6.png"
                            className="img-fluid"
                            alt="Large Image" />
                    </div>
                </Col>
                <Col lg={4} xs={12}>
                    <Row>
                        <Col>
                            <div className="image-container right-image">
                                <div className="image-overlay">
                                    <p>
                                        Maddy's Film 2
                                    </p>
                                </div>
                                <img 
                                    src="images/movie2.png"
                                    className="img-fluid"
                                    alt="Small Image 1" />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="image-container right-image small-image-bottom">
                                <div className="image-overlay">
                                    <p>
                                        Maddy's Film 3
                                    </p>
                                </div>
                                <img 
                                    src="images/movie1.png"
                                    className="img-fluid"
                                    alt="Small Image 2" />
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
                                <div className="image-overlay">
                                    <p>
                                        Maddy's Film 4
                                    </p>
                                </div>
                                <img
                                    src="images/movie5.png"
                                    className="img-fluid left-image"
                                    alt="Small Image 1" />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="image-container left-image small-image-bottom">
                                <div className="image-overlay">
                                    <p>
                                        Maddy's Film 5
                                    </p>
                                </div>
                                <img
                                    src="images/movie4.png"
                                    className="img-fluid"
                                    alt="Small Image 2" />
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col lg={8} xs={12}>
                    <div className="image-container right-image">
                        <div className="image-overlay">
                            <p>
                                Maddy's Film 6
                            </p>
                        </div>
                        <img
                            src="images/movie3.png"
                            className="img-fluid"
                            alt="Large Image" />
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Gallery;
