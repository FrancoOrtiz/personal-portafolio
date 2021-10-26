import React from 'react'
import './introduction.scss'
import {FormattedMessage} from 'react-intl';

export const Introduction = () => {
    return (
        <section>
            <h1 className="in-title"><FormattedMessage id="title" /></h1>
            <p className="in-subtitle">Diseño y escribo codigo de aplicaciones web</p>
            <div className="img-contain">
                <img src="./images/cro.jpg" alt="foto perfil"></img>
            </div>
            {/* <img className="img-computer" src="./images/computer.jpg" alt="foto computadoras"></img> */}
        </section>
    )
}
