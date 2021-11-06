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
                    <figure className="proj-box">
                        <img className="imagen" src="./images/projects/easybank.png" alt="easybank"></img>
                        <figcaption className="hover-contain" >
                            <h3><FormattedMessage id="easybank" /></h3>
                            <a className="btn-repository" href="https://github.com/FrancoOrtiz/easybank">
                                <span><FormattedMessage id="repository" /></span>
                                <span className="next"><img src="./images/projects/r-arrow.png" alt="next"/></span>
                            </a>
                        </figcaption>
                    </figure>
                    <figure className="proj-box">
                        <img src="./images/projects/socialmedia.png" alt="socialmedia"></img>
                        <figcaption className="hover-contain" >
                            <h3><FormattedMessage id="socialMedia" /></h3>
                            <a className="btn-repository" href="https://github.com/FrancoOrtiz/socialmedia-black-theme">
                                <span><FormattedMessage id="repository" /></span>
                                <span className="next"><img src="./images/projects/r-arrow.png" alt="next"/></span>
                            </a>
                        </figcaption>
                    </figure>
                    <figure className="proj-box">
                        <img src="./images/projects/url-shortly.png" alt="url-shortly"></img>
                        <figcaption className="hover-contain" >
                            <h3><FormattedMessage id="urlShortly" /></h3>
                            <a className="btn-repository" href="https://github.com/FrancoOrtiz/url-shortly">
                                <span><FormattedMessage id="repository" /></span>
                                <span className="next"><img src="./images/projects/r-arrow.png" alt="next"/></span>
                            </a>
                        </figcaption>
                    </figure>
                </div>
                <div className="second-prow">
                    <figure className="proj-box">
                        <img src="./images/projects/todo-app-black.png" alt="todo-app"></img>
                        <figcaption className="hover-contain" >
                            <h3><FormattedMessage id="todoApp" /></h3>
                            <a className="btn-repository" href="https://github.com/FrancoOrtiz/todo-app">
                                <span><FormattedMessage id="repository" /></span>
                                <span className="next"><img src="./images/projects/r-arrow.png" alt="next"/></span>
                            </a>
                        </figcaption>
                    </figure>
                    <figure className="proj-box">
                        <img src="./images/projects/countries-api.png" alt="countries-api"></img>
                        <figcaption className="hover-contain" >
                            <h3><FormattedMessage id="countriesApi" /></h3>
                            <a className="btn-repository" href="https://github.com/FrancoOrtiz/rest-countries-api">
                                <span><FormattedMessage id="repository" /></span>
                                <span className="next"><img src="./images/projects/r-arrow.png" alt="next"/></span>
                            </a>
                        </figcaption>
                    </figure>
                    <figure className="proj-box">
                        <img src="./images/projects/calculator-app.png" alt="calculator-app"></img>
                        <figcaption className="hover-contain" >
                            <h3><FormattedMessage id="calculator" /></h3>
                            <a className="btn-repository" href="https://github.com/FrancoOrtiz/calculator-app">
                                <span><FormattedMessage id="repository" /></span>
                                <span className="next"><img src="./images/projects/r-arrow.png" alt="next"/></span>
                            </a>
                        </figcaption>
                    </figure>
                </div>
            </div>
            <div className="github-contain">
                <a className="btn-github" href="https://github.com/FrancoOrtiz">
                    <span className="icon"><img src="images/footer/github-footer.png" alt="github"></img></span>
                    <span><FormattedMessage id="btnGit" /></span>
                </a>
            </div>
        </section>
    )
}