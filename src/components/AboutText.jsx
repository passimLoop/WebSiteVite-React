import React from "react";
import style from "./AboutTextStyles.module.css";
import aboutImg from "../assets/img/AboutImg.jpg";

const AboutText = () => {
  return (
    <div className={style.container}>
      <h2>¿Porqué elegirnos?</h2>
      <div className={style.content}>
        <div className={style.imgAbout}>
          <img src={aboutImg} alt="Foto de ThisisEngineering en Unsplash" />
        </div>
        <div className={style.textAbout}>
          <div>
            <h4>Experiencia y Profesionalismo:</h4>
            <p>Contamos con un equipo de desarrolladores y consultores con años de experiencia en la industria.</p>
            </div>
          <div>
            <h4>Soluciones Personalizadas:</h4>
            <p>Nos tomamos el tiempo para entender tus necesidades y ofrecerte soluciones a medida.</p>
          </div>
          <div>
            <h4>Tecnología de Vanguardia:</h4>
            <p>Utilizamos las tecnologías más recientes para asegurar que tu proyecto esté siempre actualizado.</p>  
          </div>
          <div>
            <h4>Soporte Continuo: </h4>
            <p>Para asegurar el éxito a largo plazo del proyecto desarrollado, te ofrecemos, además, soporte y mantenimiento continuo.</p>  
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutText;