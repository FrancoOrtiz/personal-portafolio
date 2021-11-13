import React from 'react'
import './footer.scss';


export const Footer = () => {
    return (
        <footer className="footer">    
            <div className="social-contain">
                <a className="social-btn" href="https://www.linkedin.com/in/franco-patricio-ortiz-152830206/" target="_blank" rel="noopener noreferrer"><img src="./images/footer/linkedin-white.svg" alt="linkedin" /></a>
                <a className="social-btn e-btn" href="mailto:francoportiz@gmail.com" target="_blank" rel="noopener noreferrer"><img src="./images/footer/email.svg" alt="email"></img></a>
                <a className="social-btn" href="https://github.com/FrancoOrtiz" target="_blank" rel="noopener noreferrer"><img src="./images/footer/github-footer.svg" alt="git" /></a>
            </div>
            <p>Developed by Franco Ortiz</p>
        </footer>
    )
}