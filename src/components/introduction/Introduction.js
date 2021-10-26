import React from 'react'
import './introduction.scss'

export const Introduction = () => {
    return (
        <section>
            <h1 className="in-title">Diseñador, Desarrollador Front-end</h1>
            <p className="in-subtitle">Diseño y escribo codigo de aplicaciones web</p>
            <div className="img-contain">
                <img src="./images/cro.jpg" alt="foto perfil"></img>
            </div>
        </section>
    )
}
