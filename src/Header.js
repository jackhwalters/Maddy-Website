import React from 'react';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './css/Header.css';

const HeaderButton = ({toURL, className, buttonText}) => {
    return (
        <a href={toURL} className={className}>{buttonText}</a>
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
        } else if (pathname === '/contact') {
            setActiveButton('contact');
        }
    }, [location]);

    return (
        <header>
            <div className="header-title">
                <HeaderButton toURL="/" className="header-title-text" buttonText="Maddy Walters" />
            </div>
            <div className="header-btns">
                <HeaderButton
                    toURL="/"
                    className={`header-btn ${activeButton === 'portfolio' ? 'selected' : ''}`}
                    buttonText="Portfolio" />
                <HeaderButton
                    toURL="/about"
                    className={`header-btn ${activeButton === 'about' ? 'selected' : ''}`}
                    buttonText="About" />
                <HeaderButton
                    toURL="/contact"
                    className={`header-btn ${activeButton === 'contact' ? 'selected' : ''}`}
                    buttonText="Contact" />
            </div>
        </header>
    )
}

export default Header;
