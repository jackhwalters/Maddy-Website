import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import '../css/About.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const About = () => {
    return (
        <div className="about-container">
            <Container fluid>
                <Row>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nullam rhoncus aliquam mauris, sit amet egestas quam rutrum nec.
                        Suspendisse potenti. Sed volutpat, neque non efficitur lacinia,
                        turpis nisi vulputate ex, a fringilla turpis enim vel est.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nullam rhoncus aliquam mauris, sit amet egestas quam rutrum nec.
                        Suspendisse potenti. Sed volutpat, neque non efficitur lacinia,
                        turpis nisi vulputate ex, a fringilla turpis enim vel est.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nullam rhoncus aliquam mauris, sit amet egestas quam rutrum nec.
                        Suspendisse potenti. Sed volutpat, neque non efficitur lacinia,
                        turpis nisi vulputate ex, a fringilla turpis enim vel est.
                    </p>
                </Row>
                <Row>
                    <img className="img-fluid about-image" src="images/maddy.jpg" alt="About Image" />
                </Row>
            </Container>
        </div>
    )
}

export default About;
