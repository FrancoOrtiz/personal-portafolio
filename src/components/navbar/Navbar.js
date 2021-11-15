import React, { useEffect, useState } from 'react'
import './navbar.scss';
import {FormattedMessage} from 'react-intl';
import { Link } from 'react-scroll'
export const Navbar = ({setIdioma}) => {

    const [isOpen, setIsOpen] = useState(false);
    const [lnMobile, setLnMobile] = useState(false);
    
    useEffect(() => {
        if(lnMobile === true) {
            setIdioma('en');
        } else {
            setIdioma('es');
        }
    }, [setIdioma, lnMobile])

    const handleOnClick = () => {
        setIsOpen(!isOpen);
    }

    const changeLanguage = () => {
        setLnMobile(!lnMobile);
    }

    const handleLink = () => {
        setTimeout(setIsOpen, 500, false);
    }

    return (
        <header className="header-nav">
            <nav className="navbar_contain">
                <h1 id="#introduction" className="author">Franco Ortiz</h1>
                <div className={`${isOpen ? "open-menu" : "desktop-menu"}`}>
                    <Link onClick={handleLink} className="link" smooth={true} to="description"><FormattedMessage id="description" /></Link>
                    <Link onClick={handleLink} className="link" offset={-100} smooth={true} to="technologies"><FormattedMessage id="technologies"/></Link>
                    <Link onClick={handleLink} className="link" smooth={true} to="projects"><FormattedMessage id="projects" /></Link>
                    <Link onClick={handleLink} className="link" smooth={true} to="contact"><FormattedMessage id="contact" /></Link>
                    <button onClick={changeLanguage} className={`btn-mobile ${lnMobile ? "united-states" : "spain"}`}><div className={`circle ${lnMobile ? "left" : "right"}`}></div></button>
                </div>
                <button 
                    className={`hamburger hamburger--elastic ${isOpen && "is-active"}`} 
                    type="button"
                    onClick={handleOnClick}
                >
                    <span className="hamburger-box">
                        <span className="hamburger-inner"></span>
                    </span>
                </button>
                <button onClick={changeLanguage} className={`btn-desktop ${lnMobile ? "united-states" : "spain"}`}><div className={`circle ${lnMobile ? "left" : "right"}`}></div></button>
            </nav>
        </header>
    )
}