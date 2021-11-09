import React, { useEffect } from 'react'
import { FormattedMessage } from 'react-intl'
import './contact.scss'
import { useState } from 'react';
import { send } from 'emailjs-com';
import toast, { Toaster } from 'react-hot-toast';

export const Form = () => {
    
    const initState = {
        name: '',
        email: '',
        message: '',
    }
    
    useEffect(() => {
      formIsValid();
    }, );

    const [toSend, setToSend] = useState(initState);
    const [nameIsValid, setNameIsValid] = useState(false);
    const [emailIsValid, setEmailIsValid] = useState(false);
    const [messageIsValid, setMessageIsValid] = useState(false);
    const [displayError, setDisplayError] = useState(false);

    const {name, email, message} = toSend;

      const onSubmit = (e) => {
        e.preventDefault();
        setDisplayError(false);
        formIsValid();
        if(nameIsValid === true && emailIsValid === true && messageIsValid === true) {
            send(
                'service_portafolio',
                'template_bvrj5tu',
                toSend,
                'user_LldpK54iLDiQcPjYQaMoR'
            )
                .then((response) => {
                    console.log('SUCCESS!', response.status, response.text);
                    toast.success('Mensaje enviado correctamente!')
                    setToSend(initState);
                })
                .catch((err) => {
                    console.log('FAILED...', err)
                    toast.error('Se produjo un error.')
                });
        } else {
            console.log('CAMPOS INCORRECTOS...')
            toast.error('Campos incorrectos.')
            setDisplayError(true);
        }
      };

      const formIsValid = () => {
          const emailRegex = /(.+)@(.+){2,}.(.+){2,}/;
          
          if(emailRegex.test(email)) {
              setEmailIsValid(true);
          } else {
              setEmailIsValid(false);
          }

          if(name.trim().length !== 0) {
              setNameIsValid(true);
          } else {
              setNameIsValid(false);
          }

          if(message.trim().length !== 0) {
            setMessageIsValid(true);
          } else {
            setMessageIsValid(false);
          }
      }

      const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
      };
    
    return (
        <>
            <Toaster 
                position="top-center"
                reverseOrder={false}
            />
            <form className="form" onSubmit={onSubmit}>
                <div className="input-box">
                    <div className="name">
                        <div className="input-title">
                            <label><FormattedMessage id="name" /></label>
                            <p className={`${!nameIsValid && displayError ? "error error-active" : "error"}`}><FormattedMessage id="error" /></p>
                        </div>
                        <input
                            type="text"
                            className={`form-control ${!nameIsValid && displayError ? 'fill-invalid' : ""}`}
                            placeholder=""
                            name="name"
                            value={toSend.name}
                            onChange={handleChange}
                        ></input>
                    </div>
                    <div className="email">
                        <div className="input-title">
                            <label>Email</label>
                            <p className={`${!emailIsValid && displayError ? "error error-active" : "error"}`}><FormattedMessage id="error" /></p>
                        </div>
                        <input
                            type="text"
                            className={`form-control ${!emailIsValid && displayError ? 'fill-invalid' : ""}`}
                            placeholder=""
                            name="email"
                            value={toSend.email}
                            onChange={handleChange}
                        ></input>
                    </div>
                </div>
                <div className="input-title">
                    <label><FormattedMessage id="message" /></label>
                    <p className={`${!messageIsValid && displayError ? "error error-active" : "error"}`}><FormattedMessage id="error" /></p>
                </div>
                <textarea
                    className={`form-control ${!messageIsValid && displayError ? 'fill-invalid' : ""}`}
                    placeholder=""
                    name="message"
                    value={toSend.message}
                    onChange={handleChange}
                    cols="108"
                    rows="12"
                    maxLength="2000"
                ></textarea>
                <button className="send-btn" type="submit" ><FormattedMessage id="send" /></button>
            </form>
        </>
    )
}