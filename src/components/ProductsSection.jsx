import React, { useState } from "react";
import styles from "./ProductsSectionStyles.module.css";
import academia from "../assets/img/academia/Captura desde 2024-04-20 03-07-21.png";
import sitio from "../assets/img/sitio/Captura desde 2024-04-20 03-10-43.png";

const ProductsSection = () => {

	const [ classImg1, setClassImg1 ] = useState (styles.img1);
	const [ classImg2, setClassImg2 ] = useState (styles.img2);

	const handleClick = () => {
		setClassImg1((prevClass) => ( prevClass === styles.img1 ? styles.img2 : styles.img1 ));
		setClassImg2((prevClass) => ( prevClass === styles.img2 ? styles.img1 : styles.img2 ));
	}

  return (
		<div className={styles.container}>
			<h2>Algunos de nuestros proyectos</h2>
			<div className={styles.content}>
				<div className={styles.textContainer}>
					<div>
						<h4>Desarrollo de Sitios Web:</h4>
						<p>Profesionales y responsivos, desde sitios corporativos hasta tiendas en línea, con una experiencia de usuario óptima y un diseño adaptado a tus necesidades.</p>
					</div>
					<div>
						<h4>Aplicaciones Web:</h4>
						<p>A medida, utilizamos las últimas tecnologías, aportando soluciones robustas, seguras y escalables.</p>
					</div>
					<div>
						<h4>Landing Pages:</h4>
						<p>Efectivas y atractivas que convierten visitantes en clientes. Trabajamos para que tu campaña sea un éxito.</p>
					</div>
					<div>
						<h4>CONTACTANOS</h4>
						<p>¿Listo para llevar tu negocio al siguiente nivel?</p> 
					
					</div>
				</div>
				<div onClick={handleClick} className={styles.imgContainer}>
					<img className={classImg1} src={academia} alt="Vista sitio academia" />
					<img className={classImg2} src={sitio} alt="Vista de sitio ByteCrafters" />
				</div>
			</div>
		</div>
	)
}

export default ProductsSection;