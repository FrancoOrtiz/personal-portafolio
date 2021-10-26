import React from 'react'
import { Introduction } from './components/introduction/Introduction';
import { Navbar } from './components/navbar/Navbar';
import './styles.scss';

export const Portafolio = () => {
    return (
        <div className="portafolio_contain">
            <Navbar />

            <Introduction />
        </div>
    )
}
