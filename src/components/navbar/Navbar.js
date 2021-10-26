import React, { useState } from 'react'
import './navbar.scss';

export const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    
    const handleOnClick = ( ) => {
        setIsOpen(!isOpen);
    }

    return (
        <header className="header-nav">
            <nav className="navbar_contain">
                <h1 className="author">Franco Ortiz</h1>
                <div className={`${isOpen ? "open-menu" : "desktop-menu"}`}>
                    <a href="Tecnologias">Tecnologías</a>
                    <a href="Descripcion">Descripción</a>
                    <a href="Proyectos">Proyectos</a>
                    <a href="Contacto">Contacto</a>
                </div>
                <button 
                    className="btn-nav"
                    onClick={handleOnClick}
                ><img className="menu-mobile" src="./images/menus.png" alt="menu"></img></button>
                <button className="language">Lenguaje<img className="flecha-abajo" src="./images/flecha-abajo.png"></img></button>
            </nav>
        </header>
    )
}