import React from 'react';
import './css/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTiktok, faImdb } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <footer>
            <div className="footer-btns">
                <div className="footer-btn">
                    <FontAwesomeIcon icon={faInstagram} size="lg" />
                </div>
                <div className="footer-btn">
                    <FontAwesomeIcon icon={faTiktok} size="lg" />
                </div>
                <div className="footer-btn">
                    <FontAwesomeIcon icon={faImdb} size="lg" />
                </div>
            </div>
            <div className="footer-text">
                <p>
                    © Maddy Walters 2023. All rights reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer