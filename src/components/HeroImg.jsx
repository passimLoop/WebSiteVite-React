import React from "react";
import { Link } from "react-router-dom";
import style from "./HeroImgStyles.module.css"
import PassimLoopHQ from "../assets/img/passimLoop.jpg"


const HeroImg = () => {
  return (
    <div className={style.hero}>
        <div className={style.mask}>
            <img className={style.introimg} src={PassimLoopHQ} alt="logo PassimLoop"/> 
            {/* Ya el <h1> tiene el nombre, no se si poner el logo de fondo es sobre cargar, por ahi cambiar la imagen de fondo */}
        </div>
        <div className={style.content}>
            <p>Empresa de Desarrollo Web</p>
            <h1>Passim Loop</h1>
            <div>
                <Link to="/products" className={style.btn}>Productos</Link>
                <Link to="/contact" className={`${style.btn} ${style.btnlight}`}>Contacto</Link>
            </div>
        </div>
    </div>
  )
}

export default HeroImg