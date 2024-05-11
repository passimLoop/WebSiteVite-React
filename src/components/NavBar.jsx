import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { FaBars, FaTimes } from "react-icons/fa"
import style from "./NavBarStyles.module.css"

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

	window.addEventListener('scroll', changeColor);

  	return (
    	<div className={color ? (`${style.header} ${style.headerbg}`) : (`${style.header}`) }>
        	<Link to="/" >
        	    <h1>PassimLoop</h1>  {/* Aca pense en poner el logo más chico en vez del nombre escrito, pero me parece que hay que cambiar algo de los 3 lugares donde aparece el nombre, es muy redundante */}
        	</Link>
			<ul className={click ? `${style.navMenuActive}` : `${style.navmenu}`}>
				<li><Link to="/">Inicio</Link></li>
				<li><Link to="/about">Acerca de</Link></li>
				<li><Link to="/products">Productos</Link></li>
				<li><Link to="/contact">Contacto</Link></li>
			</ul>
			<div className={style.hamburger} onClick={handleClick}>
				{click? (
					<FaTimes className={style.icon} />
				) : (
					<FaBars className={style.icon} />
				)}				
			</div>
		</div>
  	)
}

export default NavBar