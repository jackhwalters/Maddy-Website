import React from 'react';
import './css/Header.css';

const HeaderButton = ({toURL, className, buttonText}) => {
    return (
        <a href={toURL} className={className}>{buttonText}</a>
    )
}

const Header = () => {
    return (
        <header>
            <div className="header-title">
                <HeaderButton toURL="/" className="header-title-text" buttonText="Maddy Walters" />
            </div>
            <div className="header-btns">
                <HeaderButton toURL="/portfolio" className="header-btn" buttonText="Portfolio" />
                <HeaderButton toURL="/other" className="header-btn" buttonText="Other" />
                <HeaderButton toURL="/about" className="header-btn" buttonText="About" />
                <HeaderButton toURL="/contact" className="header-btn" buttonText="Contact" />
            </div>
        </header>
    )
}

export default Header;
