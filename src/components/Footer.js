import React from 'react';
import '../css/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTiktok, faImdb } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <footer>
            <div className="footer-btns">
                <div className="footer-btn">
                    <a href="https://www.instagram.com/maddywfilm/" target="_blank">
                        <FontAwesomeIcon icon={faInstagram} size="lg" />
                    </a>
                </div>
                <div className="footer-btn">
                    <a href="https://www.tiktok.com/" target="_blank">
                        <FontAwesomeIcon icon={faTiktok} size="lg" />
                    </a>
                </div>
                <div className="footer-btn">
                    <a href="https://imdb.com/name/nm14547455/" target="_blank">
                        <FontAwesomeIcon icon={faImdb} size="xl" />
                    </a>
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

export default Footer;
