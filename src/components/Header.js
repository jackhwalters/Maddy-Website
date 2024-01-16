import React from 'react';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../css/Header.css';

const HeaderButton = ({toURL, className, buttonText, dataTestId}) => {
    return (
        <a href={toURL} className={className} data-testid={dataTestId}>{buttonText}</a>
    )
}

const Header = () => {
    var [activeButton, setActiveButton] = useState('');
    const location = useLocation();

    useEffect(() => {
        const { pathname } = location;
        if (pathname === '/') {
            setActiveButton('portfolio');
        } else if (pathname === '/about') {
            setActiveButton('about');
        }
    }, [location]);

    return (
        <header>
            <div className="header-title">
                <HeaderButton
                    toURL="/"
                    className="header-title-text"
                    buttonText="Maddy Walters"
                    dataTestId="name-button"
                />
            </div>
            <div className="header-btns">
                <HeaderButton
                    toURL="/"
                    className={`header-btn ${activeButton === 'portfolio' ? 'selected' : ''}`}
                    buttonText="Portfolio"
                    dataTestId="portfolio-button"
                />
                <HeaderButton
                    toURL="/about"
                    className={`header-btn ${activeButton === 'about' ? 'selected' : ''}`}
                    buttonText="About"
                    dataTestId="about-button"
                />
            </div>
        </header>
    )
}

export default Header;
