import React from 'react'
import { FormattedMessage } from 'react-intl'
import { useForm } from '../../hooks/useForm'
import './contact.scss'

export const Form = () => {

    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        desc: ''
    })

    const {name, email, desc} = formValues;
    
    return (
        <>
            <form className="form">
                <div className="input-box">
                    <div className="name">
                        <label><FormattedMessage id="name" /></label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder=""
                            name="name"
                            value={name}
                            onChange={handleInputChange}
                        ></input>
                    </div>
                    <div className="email">
                        <label>Email</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder=""
                            name="email"
                            value={email}
                            onChange={handleInputChange}
                        ></input>
                    </div>
                </div>
                <label><FormattedMessage id="message" /></label>
                <textarea
                    className="form-control"
                    placeholder=""
                    name="desc"
                    value={desc}
                    onChange={handleInputChange}
                    cols="108"
                    rows="12"
                ></textarea>
            </form>
            <input className="send-btn" type="submit" value="Enviar" />
        </>
    )
}
