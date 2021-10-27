import React, { useEffect, useState } from 'react'
import './navbar.scss';
import {FormattedMessage} from 'react-intl';

export const Navbar = ({setIdioma}) => {

    const [isOpen, setIsOpen] = useState(false);
    const [lnOpen, setLnOpen] = useState(false);
    const [lnMobile, setLnMobile] = useState(false);
    
    useEffect(() => {
        if(lnMobile === true) {
            setIdioma('en');
        } else {
            setIdioma('es');
        }
    }, [setIdioma, lnMobile])

    const handleOnClick = ( ) => {
        setIsOpen(!isOpen);
    }

    const languageOnClick = ( ) => {
        setLnOpen(!lnOpen);
    }

    const changeLanguage = () => {
        setLnMobile(!lnMobile);
    }

    return (
        <header className="header-nav">
            <nav className="navbar_contain">
                <h1 className="author">Franco Ortiz</h1>
                <div className={`${isOpen ? "open-menu" : "desktop-menu"}`}>
                    <a href="#technologies"><FormattedMessage id="technologies"/></a>
                    <a href="#description">Descripción</a>
                    <a href="#projects">Proyectos</a>
                    <a href="/">Contacto</a>
                    <div className="btn-contain">
                        <img src="./images/navbar/spain.png" alt="bandera de españa" />
                        <button onClick={changeLanguage} className="btn-mobile"><div className={`circle ${lnMobile ? "right" : "left"}`}></div></button>
                        <img src="./images/navbar/united-states.png" alt="bandera de estados unidos" />
                    </div>
                </div>
                <button 
                    className="btn-nav"
                    onClick={handleOnClick}
                ><img className="menu-mobile" src="./images/navbar/menus.png" alt="menu"></img></button>
                <button onClick={languageOnClick} className={`${lnOpen ? "btn-language-focus" : "btn-language"}`}><FormattedMessage id="language" /><img className={`${lnOpen ? "flecha-abajo" : "flecha-arriba"}`} src="./images/navbar/flecha-abajo.png" alt="flecha abajo"></img></button>
                { lnOpen &&
                <div className="lang-contain">
                    <p onClick={()=>setLnMobile(false)} className="lang-option es"><FormattedMessage id="optionSp" /> <img src="./images/navbar/spain.png" alt="bandera de españa"></img></p>
                    <p onClick={()=>setLnMobile(true)} className="lang-option"><FormattedMessage id="optionEn" /> <img src="./images/navbar/united-states.png" alt="bandera de estados unidos"></img></p>
                </div>}
            </nav>
        </header>
    )
}