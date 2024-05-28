import React from "react";
import { Link } from "react-router-dom";
import style from "./HeroImgStyles.module.css";
import PassimLoop from "/passimLoopTransparent.png";

const HeroImg = () => {
  return (
    <div className={style.hero}>
        <div className={style.mask}>
            <img className={style.introimg} src={PassimLoop} alt="logo PassimLoop"/> 
        </div>
        <div className={style.content}>
            <p>Empresa de Consultoría y Desarrollo Web</p>
            <h1>Passim Loop</h1>
            <div>
                <Link to="/products" className={style.btn}>Productos</Link>
                <Link to="/contact" className={`${style.btn} ${style.btnlight}`}>Contacto</Link>
            </div>
        </div>
    </div>
  )
}

export default HeroImg;