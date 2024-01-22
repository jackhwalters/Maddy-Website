import React from 'react';
import '../css/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTiktok, faImdb } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <footer>
            <div className="footer-btns">
                <div className="footer-btn">
                    <a data-testid="insta-button" href="https://www.instagram.com/maddywfilm/" target="_blank">
                        <FontAwesomeIcon data-testid="footer-insta-icon" icon={faInstagram} size="lg" href="hello"/>
                    </a>
                </div>
                <div className="footer-btn">
                    <a data-testid="tiktok-button" href="https://www.tiktok.com/@maddogpictures" target="_blank">
                        <FontAwesomeIcon data-testid="footer-tiktok-icon" icon={faTiktok} size="lg" href="hello" />
                    </a>
                </div>
                <div className="footer-btn">
                    <a data-testid="imdb-button" href="https://imdb.com/name/nm14547455/" target="_blank">
                        <FontAwesomeIcon data-testid="footer-imdb-icon" icon={faImdb} size="xl" href="hello" />
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
