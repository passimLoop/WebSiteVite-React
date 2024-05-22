import React from "react";
import {
  FaFacebook,
  FaHome,
  FaLinkedin,
  FaInstagramSquare,
  FaMailBulk,
  FaWhatsapp,
} from "react-icons/fa";
import style from "./FooterStyles.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
  const phone = 'https://api.whatsapp.com/send?phone=541138774301';
  return (
    <div className={style.footer}>
      <div className={style.footercontainer}>
        
        <div className={style.right}>
          <h4>Acerca de nosotros</h4>
          <p>
            Somos una empresa enfocada en la presencia digital de personas y
            organismos a través de diversos medios, como sitios web,
            aplicaciones web, landing pages, menús digitales, entre otros.
          </p>
        </div>

        <div className={style.left}>

          {/*<div className={style.home}>
             <FaHome className={style.icon} />
            <p>Agregar ubicación....</p>
          </div> */}

          <div className={style.phone}>
              <FaWhatsapp className={style.icon} />
              <a href={phone} target="blank">Envienos mensaje con un click</a>
          </div>

          {/* <div className={style.email}>
            <FaFacebook className={style.icon} />
          </div> */}

          <div className={style.instagram}>
            <a href="https://www.instagram.com/passimloop/" target="_blank" rel="noopener noreferrer">
              <FaInstagramSquare className={style.icon} />
              <p>passimloop</p>
            </a>
          </div>

          <div className={style.email}>
            <a href={`mailto:passimloop@gmail.com`} target="_blank" >
              <FaMailBulk className={style.icon} />
              <p>passimloop@gmail.com</p> 
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Footer;
