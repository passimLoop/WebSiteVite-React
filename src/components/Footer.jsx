import React from "react";
import {
  FaFacebook,
  FaHome,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
} from "react-icons/fa";
import style from "./FooterStyles.module.css";

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.footercontainer}>
        <div className={style.left}>
          {/*   Hay que ver si esto lo ponemos, no tenemos un lugar fisico todavia */}
          <div className={style.home}>
            <FaHome className={style.icon} />
            <p>Agregar ubicación....</p>
          </div>
          {/* <div className={style.phone}>
                        <FaPhone className={style.icon} />
                        <p>(11) 38774301 / (261) 6117708 / (261) 5254453</p>
                    </div> */}
          <div className={style.email}>
            <FaFacebook className={style.icon} />
            <p>
              estamos bloqueados por no ser persona física, apelamos y hay que
              esperar jeje
            </p>
          </div>
          <div className={style.email}>
            <a href="https://www.instagram.com/passimloop/" target="_blank">
              <FaLinkedin className={style.icon} />
            </a>
            <p>https://www.instagram.com/passimloop/</p>
          </div>
          <div className={style.email}>
            <FaMailBulk className={style.icon} />
            <p>passimloop@gmail.com</p>
          </div>
        </div>
        <div className={style.right}>
          <h4>Acerca de nosotros</h4>
          <p>
            Somos una empresa enfocada en la presencia digital de personas y
            organismos a través de diversos medios, como sitios web,
            aplicaciones web, landing pages, menús digitales, entre otros.
          </p>

          {/* <div className={style.social}>
                        <div className={style.email}>   
                            <FaFacebook className={style.icon} />
                        </div>
                        <div className={style.email}>
                            <FaLinkedin className={style.icon} />
                        </div> 
                    </div> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
