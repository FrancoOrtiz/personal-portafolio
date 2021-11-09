import './contact.scss';
import React from 'react'
import { Form } from './Form';
import { FormattedMessage } from 'react-intl';

export const Contact = () => {
    return (
        <>
            <section id="contact" className="section-contact">
                <h2><FormattedMessage id="cTitle" /></h2>
                <p className="cSubtitle"><FormattedMessage id="cSubtitle" /></p>
                <Form />
            </section>
        </>
    )
}
