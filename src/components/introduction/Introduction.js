import React from 'react'
import './introduction.scss'
import {FormattedMessage} from 'react-intl';

export const Introduction = () => {
    return (
        <section id="introduction">
            <h1 className="in-title"><FormattedMessage id="title" /></h1>
            <p className="in-subtitle"><FormattedMessage id="subtitle" /></p>
            <div className="img-contain">
                <img src="./images/introduction/foto.jpg" alt="foto perfil"></img>
            </div>
            <div className="bottom">
                <img className="img-computer" src="./images/introduction/pc.svg" alt="foto computadoras"></img>
            </div>
        </section>
    )
}