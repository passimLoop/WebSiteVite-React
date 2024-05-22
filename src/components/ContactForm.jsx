import React, { useEffect, useRef, useState } from 'react';
import Modal from './Modal';
import emailjs from '@emailjs/browser';
import style from './ContactFormStyles.module.css';

const ContactForm = () => {

  const [ formData, setFormData ] = useState({
    user_name: '',
    user_email: '',
    subject: '',
    message: ''
  });

  const [ errors, setErrors ] = useState({});
  const [ isValid, setIsValid ] = useState(false);
  
  const [ mailSend, setMailSend ] = useState(false);
  const [ mailFailed, setMailFailed ] = useState(false);

  const form = useRef();

  const validate = () => {
    const newErrors = {};

    if(!formData.user_name) {
      newErrors.user_name = 'Nombre y apellido es requerido.';
    }

    if (!formData.user_email) {
      newErrors.user_email = 'Email es requerido.';
    } else if (!/\S+@\S+\.\S+/.test(formData.user_email)) {
      newErrors.user_email = 'Email invalido.';
    }

    if (!formData.subject) {
      newErrors.subject = 'Asunto es requerido.';
    }

    if (!formData.message) {
      newErrors.message = 'Mensaje es requerido.';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  useEffect(() => {
    setIsValid(validate());
  }, [formData]);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_lri999f', 'template_2shqrct', form.current, {
        publicKey: 'ZWXd6opGdBNxtzHPE',
      })
      .then(
        () => {
          setMailSend(true);    
          console.log('SUCCESS!');
        },
        (error) => {
          setMailFailed(true);      
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
      <div className={style.container}>
        <h2>Contacto</h2>
        <form className={style.form} ref={form} onSubmit={sendEmail}> 
          <label htmlFor='user_name'>Nombre y apellido</label>
          <input 
            id='user_name' 
            type="text" 
            name="user_name"
            value={formData.user_name}
            onChange={handleChange} 
            autoComplete='off'/>
            {errors.user_name && 
              <span className={style.error}>{errors.user_name}</span>
            }
          
          <label htmlFor='user_email'>Email</label>
          <input 
            id='user_email' 
            type="email" 
            name="user_email" 
            value={formData.user_email}
            onChange={handleChange}
            autoComplete='off'/>
            {errors.user_email && 
              <span className={style.error}>{errors.user_email}</span>
            }

          <label htmlFor='subject'>Asunto</label>
          <input 
            id='subject' 
            type="text" 
            name="subject" 
            value={formData.subject}
            onChange={handleChange}
            autoComplete='off'/>
            {errors.subject &&
              <span className={style.error}>{errors.subject}</span>
            }

          <label htmlFor='message'>Mensaje</label>
          <textarea 
            id='message' 
            name="message" 
            value={formData.message}
            onChange={handleChange}
            autoComplete='off'/>
            {errors.message && 
              <span className={style.error}>{errors.message}</span>
            }

          <input type="submit" value="Enviar" disabled={!isValid} />
        </form>

        {mailSend && (
        <Modal isOpen={mailSend} onClose={() => setMailSend(false)}>
          <h4>AVISO</h4>
          <p>Mensaje enviado exitosamente!!!</p>
          <p>Sera contactado a la brevedad por nuestro personal</p>
        </Modal>
        )}
        {mailFailed && (
          <Modal isOpen={mailFailed} onClose={() => setMailFailed(false)}>
            <h4>AVISO DE ERROR</h4>
            <p>Su mensaje no pudo ser enviado.</p>
            <p>Por favor, intente nuevamente en otro momento, o pruebe nuestros otros canales. <br />
            Disculpe las molestias ocasionadas.</p>
          </Modal>
        )}
      </div>
  );
};

export default ContactForm;