import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import style from './ContactFormStyles.module.css';

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_lri999f', 'template_2shqrct', form.current, {
        publicKey: 'ZWXd6opGdBNxtzHPE',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className={style.container}>
      <form className={style.form} ref={form} onSubmit={sendEmail}>
        <h2>Contacto</h2>
        <label>Nombre y apellido</label>
        <input type="text" name="user_name" autoComplete='off'/>
        <label>Email</label>
        <input type="email" name="user_email" autoComplete='off'/>
        <label>Asunto</label>
        <input type="text" name="subject" autoComplete='off'/>
        <label>Mensaje</label>
        <textarea name="message" autoComplete='off'/>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default ContactForm;