import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
                    <p class="about-bio">
                        Madeline Walters is a director from London, UK. She currently studies film whilst 
                        simultaneously working on projects, taking on various roles. She mainly focuses on 
                        directing and editing, having brought out her debut documentary 'Skin' when she was 
                        just 17. Maddy is currently working between mediums such as shorts, to music videos, 
                        building her experience exponentially.
                    </p>
                </Row>
                <Row>
                    <img className="img-fluid about-image" src="images/pfps/maddy.jpg" alt="About Image" />
                </Row>
            </Container>
            <div>
                <p class="about-reachout">
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
