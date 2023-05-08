import React from 'react';
import './css/Header.css';

const Header = () => {
    return (
        <header>
            <div className="header-title">
                Maddy Walters
            </div>
            <div className="header-btns">
                <a href="/portfolio" className="header-btn">Portfolio</a>
                <a href="/other" className="header-btn">Other</a>
                <a href="/about" className="header-btn">About</a>
                <a href="/contact" className="header-btn">Contact</a>
            </div>
        </header>
    )
}

export default Header;
