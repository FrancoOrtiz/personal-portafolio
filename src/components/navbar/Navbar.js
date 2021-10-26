import React, { useState } from 'react'
import './navbar.scss';
import {FormattedMessage} from 'react-intl';

export const Navbar = ({setIdioma}) => {

    const [isOpen, setIsOpen] = useState(false);
    const [lnOpen, setLnOpen] = useState(false);
    
    const handleOnClick = ( ) => {
        setIsOpen(!isOpen);
    }

    const languageOnClick = ( ) => {
        setLnOpen(!lnOpen);
    }

    return (
        <header className="header-nav">
            <nav className="navbar_contain">
                <h1 className="author">Franco Ortiz</h1>
                <div className={`${isOpen ? "open-menu" : "desktop-menu"}`}>
                    <a href="Tecnologias"><FormattedMessage id="technologies"/></a>
                    <a href="Descripcion">Descripción</a>
                    <a href="Proyectos">Proyectos</a>
                    <a href="Contacto">Contacto</a>
                </div>
                <button 
                    className="btn-nav"
                    onClick={handleOnClick}
                ><img className="menu-mobile" src="./images/menus.png" alt="menu"></img></button>
                <button onClick={languageOnClick} className="btnlanguage"><FormattedMessage id="language" /><img className="flecha-abajo" src="./images/flecha-abajo.png" alt="flecha abajo"></img></button>
                { lnOpen &&
                <div className="lang-contain">
                    <p onClick={() => setIdioma('es')} id="Es" className="lang-option es"><FormattedMessage id="optionSp" /> <img src="./images/spain.png" alt="bandera de españa"></img></p>
                    <p onClick={() => setIdioma('en')} className="lang-option"><FormattedMessage id="optionEn" /> <img src="./images/united-states.png" alt="bandera de estados unidos"></img></p>
                </div>}
            </nav>
        </header>
    )
}