import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import style from "./NavBarStyles.module.css";
import passimLoopLogo from "/passimLoopTransparent.png"; 

const NavBar = () => {
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  window.addEventListener("scroll", changeColor);

  return (
    <div
      className={ color ? `${style.headerbg}` : `${style.header}` } >
      <Link to="/">
        <h1>
          <img className={style.passimLoopLogo} src={passimLoopLogo} alt="PassimLoop logo" />
        </h1>
      </Link>
      <ul className={click ? `${style.navMenuActive}` : `${style.navmenu}`} >
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/about">Acerca</Link>
        </li>
        <li>
          <Link to="/products">Productos</Link>
        </li>
        <li>
          <Link to="/contact">Contacto</Link>
        </li>
      </ul>
      <div className={style.hamburger} onClick={handleClick} >
        {click ? (
          <FaTimes className={style.icon} />
        ) : (
          <FaBars className={style.icon} />
        )}
      </div>
    </div>
  );
};

export default NavBar;
