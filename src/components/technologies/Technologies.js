import React from 'react'
import { FormattedMessage } from 'react-intl';
import './technologies.scss';

export const Technologies = () => {
    return (
        <section id="technologies" className="section-tech">
            <h1 ><FormattedMessage id="technologies" /></h1>
            <div className="tech-contain">
                <div className="first-row">
                    <article className="tech-box">
                        <img src="./images/technologies/html.svg" alt=""></img>
                        <h2>Html</h2>
                    </article>
                    <article className="tech-box">
                        <img src="./images/technologies/css-3.svg" alt=""></img>
                        <h2>Css</h2>
                    </article>
                    <article className="tech-box">
                        <img src="./images/technologies/javascript.svg" alt=""></img>
                        <h2>JS</h2>
                    </article>
                    <article className="tech-box">
                        <img src="./images/technologies/react.svg" alt=""></img>
                        <h2>React</h2>
                    </article>
                </div>
                <div className="second-row">
                    <article className="tech-box">
                        <img src="./images/technologies/pug.svg" alt=""></img>
                        <h2>Pug</h2>
                    </article>
                    <article className="tech-box">
                        <img src="./images/technologies/sass.svg" alt=""></img>
                        <h2>Sass</h2>
                    </article>
                    <article className="tech-box">
                        <img src="./images/technologies/bootstrap.svg" alt=""></img>
                        <h2>Bootstrap</h2>
                    </article>
                    <article className="tech-box">
                        <img src="./images/technologies/github.svg" alt=""></img>
                        <h2>Git</h2>
                    </article>
                </div>
            </div>
            
        </section>
    )
}
