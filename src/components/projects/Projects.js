import React from 'react';
import { FormattedMessage } from 'react-intl';
import './projects.scss';

export const Projects = () => {
    return (
        <section id="projects" className="section-projects">
            <h2><FormattedMessage id="pjTitle" /></h2>
            <p><FormattedMessage id="pjSubtitle" /> <a href="mailto:francoportiz@gmail.com"><FormattedMessage id="sendEmail" /></a></p>
            <div className="proj-contain">
                <div className="first-prow">
                    <figcaption className="proj-box">
                        <img src="./images/projects/easybank.png" alt="easybank"></img>
                    </figcaption>
                    <figcaption className="proj-box">
                        <img src="./images/projects/socialmedia.png" alt="socialmedia"></img>
                    </figcaption>
                    <figcaption className="proj-box">
                        <img src="./images/projects/url-shortly.png" alt="url-shortly"></img>
                    </figcaption>
                </div>
                <div className="second-prow">
                    <figcaption className="proj-box">
                        <img src="./images/projects/todo-app-black.png" alt="todo-app"></img>
                    </figcaption>
                    <figcaption className="proj-box">
                        <img src="./images/projects/countries-api.png" alt="countries-api"></img>
                    </figcaption>
                    <figcaption className="proj-box">
                        <img src="./images/projects/calculator-app.png" alt="calculator-app"></img>
                    </figcaption>
                </div>
            </div>
        </section>
    )
}