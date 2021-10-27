import React, { useState } from 'react'
import { Introduction } from './components/introduction/Introduction';
import { Navbar } from './components/navbar/Navbar';
import './styles.scss';
import {IntlProvider} from 'react-intl'
import {es} from './lang/spanish.js'
import {en} from './lang/english.js'
import { Description } from './components/description/Description';
import { Technologies } from './components/technologies/Technologies';

const message = {
    es, 
    en,
}

export const Portafolio = () => {

    const [idioma, setIdioma] = useState('es');

    return (
        <IntlProvider messages={message[idioma]} locale={idioma} defaultLocale="es">

            <div className="portafolio_contain">
                <Navbar setIdioma={setIdioma}/>

                <Introduction />

                <Description />

                <Technologies />
            </div>
        </IntlProvider>
    )
}
