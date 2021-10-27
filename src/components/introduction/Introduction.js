import React from 'react'
import './introduction.scss'
import {FormattedMessage} from 'react-intl';

export const Introduction = () => {
    return (
        <section>
            <h1 className="in-title"><FormattedMessage id="title" /></h1>
            <p className="in-subtitle">Diseño y escribo codigo de aplicaciones web</p>
            <div className="img-contain">
                <img src="./images/introduction/cro.jpg" alt="foto perfil"></img>
            </div>
            <div className="bottom">
                <img className="img-computer manual" src="./images/introduction/manual.png" alt="foto computadoras"></img>
                <img className="img-computer" src="./images/introduction/programing.png" alt="foto computadoras"></img>
                <img className="img-computer" src="./images/introduction/development.png" alt="foto computadoras"></img>
            </div>
        </section>
    )
}
