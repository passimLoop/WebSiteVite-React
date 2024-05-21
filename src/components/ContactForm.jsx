import React, { useRef, useState } from 'react';
import Modal from './Modal';
import emailjs from '@emailjs/browser';
import style from './ContactFormStyles.module.css';

const ContactForm = () => {

  const [ mailSend, setMailSend ] = useState(false);
  const [ mailFailed, setMailFailed ] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_lri999f', 'template_2shqrct', form.current, {
        publicKey: 'ZWXd6opGdBNxtzHPE',
      })
      .then(
        () => {
          setMailSend(true);
          <Modal isOpen={mailSend} onClose={setMailSend(false)}>
            <h4>Mensaje enviado con éxito!!!</h4>

          </Modal>
          console.log('SUCCESS!');
        },
        (error) => {
          setMailFailed(true);
          <Modal isOpen={mailFailed} onClose={setMailFailed(false)}>
            <h4>Fallo el envio del mensaje</h4>
          </Modal>
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className={style.container}>
      <h2>Contacto</h2>
      <form className={style.form} ref={form} onSubmit={sendEmail}> 
        <label htmlFor='user_name'>Nombre y apellido</label>
        <input id='user_name' type="text" name="user_name" autoComplete='off'/>
        <label htmlFor='user_email'>Email</label>
        <input id='user_email' type="email" name="user_email" autoComplete='off'/>
        <label htmlFor='subject'>Asunto</label>
        <input id='subject' type="text" name="subject" autoComplete='off'/>
        <label htmlFor='message'>Mensaje</label>
        <textarea id='message' name="message" autoComplete='off'/>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default ContactForm;