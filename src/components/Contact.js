import React from 'react';
import '../css/Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTiktok, faImdb } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
    return (
        <div className="contact-container">
            <div className="contact-container-text">
                <p>
                    Please reach out through any of the following channels. I'd love to work together!
                </p>
            </div>
            <div className="contact-btns">
                <div className="contact-btn">
                    <a href="mailto: hello@maddywalters.com">
                        <FontAwesomeIcon icon={faEnvelope} size="2x" />
                    </a>
                </div>
                <div className="contact-btn">
                    <a href="https://www.instagram.com/maddywfilm/" target="_blank">
                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </a>
                </div>
                <div className="contact-btn">
                    <a href="https://www.tiktok.com/" target="_blank">
                        <FontAwesomeIcon icon={faTiktok} size="2x" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Contact;
