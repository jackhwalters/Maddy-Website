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
                    <img
                        src="http://living-wild.net/wp-content/uploads/2016/09/16x9-c-1.jpg"
                        className="img-fluid left-image"
                        alt="Large Image" />
                </Col>
                <Col lg={4} xs={12}>
                    <Row>
                        <Col>
                            <img 
                                src="http://living-wild.net/wp-content/uploads/2016/09/Banado-animoto-26-1.jpg"
                                className="img-fluid right-image"
                                alt="Small Image 1" />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <img 
                                src="http://living-wild.net/wp-content/uploads/2016/09/Top-50-21-1.jpg"
                                className="mt-3 img-fluid right-image"
                                alt="Small Image 2" />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default Gallery;
