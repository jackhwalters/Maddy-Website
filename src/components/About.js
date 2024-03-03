import React from 'react';
import { IKImage, IKContext } from 'imagekitio-react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/About.css';

const About = () => {
    document.title = "Maddy Walters | About"
    return (
        <div className="about-container">
            <Container fluid>
                <Row className="about-image-row">
                    <IKContext urlEndpoint="https://ik.imagekit.io/jackhwalters/">
                        <IKImage
                            path={"images/pfps/maddy.jpg"}
                            transformation={[{
                                "height": "ih",
                                "width": "iw",
                            }]}
                            loading="lazy"
                            lqip={{ active: true }}
                            className={"img-fluid about-image"}
                        />
                    </IKContext>
                </Row>
                <Row>
                    <p className="about-bio">
                        Maddy Walters is a director from Gloucestershire, UK. She currently studies film
                        whilst simultaneously working on projects, taking on various roles. She mainly
                        focuses on directing and editing, having brought out her debut documentary 'Skin'
                        when she was just 17. Maddy is currently working between mediums such as shorts,
                        to music videos, building her experience exponentially. Maddy currently runs a 
                        production company, <a data-testid="mad-dog-link" href="https://maddogpictures.co.uk/"
                        target="_blank">
                            Mad Dog Pictures</a> alongside another director in London, UK.
                    </p>
                </Row>
            </Container>
            <div>
                <p className="about-reachout">
                    Please reach out to me at <a data-testid="maddy-email" href="mailto:hello@maddywalters.com">
                        hello@maddywalters.com</a>. I'd love to work together!
                </p>
            </div>
        </div>
    )
}

export default About;
