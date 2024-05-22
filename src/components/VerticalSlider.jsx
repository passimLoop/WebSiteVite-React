import React from "react";
import { useState } from "react";
import style from "./VerticalSliderStyles.module.css";
import { FaAngleDoubleUp, FaAngleDoubleDown } from "react-icons/fa";
import academiaPic from "../assets/img/academia/Captura desde 2024-04-21 22-02-38.png";
import sitioPic from "../assets/img/sitio/Captura desde 2024-04-20 03-10-43.png";
import tiendaPic from "../assets/img/tienda/Captura desde 2024-04-22 19-16-40.png";
import landingPagePic from "../assets/img/landingPage/Captura desde 2024-05-20 15-33-25.png";
import Modal from "./Modal";


const VerticalSlider = () => {

  const [ showAcademy, setShowAcademy ] = useState(false); // Modal
  const [ showSite, setShowSite ] = useState(false);
  const [ showStore, setShowStore ] = useState(false);
  const [ showLP, SetShowLP ] = useState(false);

  const [trayectoRight, setTrayectoRight] = useState(0);
  const itemsLength = 3 * 60; // (Número de slides - 1) * 60 (que es el vh que esta definido en css)

  const onUp = () => {
    startUpAnimation();
  };

  const onDown = () => {
    startDownAnimation();
  };

  const startDownAnimation = () => {
    let newTrayectoRight = trayectoRight - 60;  //<<<<< Cambiar si cambia el valor de arriba
    if (newTrayectoRight < -itemsLength) {
      newTrayectoRight = 0;
    }
    setTrayectoRight (newTrayectoRight);
  };

  const startUpAnimation = () => {
    let newTrayectoRight = trayectoRight + 60; //<<<<< Cambiar si cambia el valor de arriba
    if (newTrayectoRight > 0) {
      newTrayectoRight = -itemsLength;
    }
    setTrayectoRight(newTrayectoRight);
  };

  return (
    <>
    <Modal isOpen={showAcademy} onClose={() => setShowAcademy(false)}>
      <img src={academiaPic} />
    </Modal>
    <Modal isOpen={showSite} onClose={() => setShowSite(false)}>
      <img src={sitioPic} />
    </Modal>
    <Modal isOpen={showStore} onClose={() => setShowStore(false)}> 
      <img src={tiendaPic} alt="" /> 
    </Modal>
    <Modal isOpen={showLP} onClose={() => SetShowLP(false)}>
      <img src={landingPagePic} alt="" />
    </Modal>
    
    <div className={style.container}>
      
      <div className={style.arrows}>
        <FaAngleDoubleUp className={style.arrowUp} onClick={onUp} />
        <FaAngleDoubleDown className={style.arrowDown} onClick={onDown} />
      </div>
      <div className={style.sliderContainer}>
        <div className={style.slides} style={{ transform: `translateY(${trayectoRight}vh)` }} >
          <div className={style.slide} >
            <img src={academiaPic} onClick={() => setShowAcademy(true)} alt="Academy picture" />
            <h4>Academia</h4>
            <p>Aolicación web para el manejo de una academia, en este caso de vuelo.</p>
          </div>
          <div className={style.slide}>
            <img src={sitioPic} onClick={() => setShowSite(true)} alt="Web site picture" />
            <h4>Sitio Web</h4>
            <p>Sitio web normal de una empresa de servicios informáticos, que a su vez también cuenta con una tienda.</p>
          </div>
          <div className={style.slide}>
            <img src={tiendaPic} onClick={() => setShowStore(true)} alt="Store picture" />
            <h4>Tienda onLine</h4>
            <p>Tienda on-line de venta de insumos de informáticos.</p>
          </div>
          <div className={style.slide}>
            <img src={landingPagePic} onClick={() => SetShowLP(true)} alt="Landing page picture" />
            <h4>Landing Page</h4>
            <p>Página personal, en este caso de una diseñadora.</p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default VerticalSlider;