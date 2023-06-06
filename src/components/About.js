import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTiktok, faImdb } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Helmet } from 'react-helmet-async';
import '../css/About.css';

const About = () => {
    return (
        <div className="about-container">
            <Helmet>
                <title>Maddy Walters | About</title>
                <meta name="about" content="Maddy Walters about page" />
            </Helmet>
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
            <div className="contact-container-text">
                <p>
                    Please reach out through email. I'd love to work together!
                </p>
            </div>
            <div className="contact-btns">
                <div className="contact-btn">
                    <a href="mailto: hello@maddywalters.com">
                        <FontAwesomeIcon icon={faEnvelope} size="2x" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default About;
