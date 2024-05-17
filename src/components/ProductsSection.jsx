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
			<h2>Nuestros Proyectos</h2>
			<div className={styles.content}>
				<div className={styles.textContainer}>
					<div>
						<h4>Obtenga atencion personalizada</h4>
						<p>Nuestro objetivo es su satisfaccion</p>
					</div>
					<div>
						<h4>Compromiso</h4>
						<p>Comprometidos con que su sitio sea el esperado</p>
					</div>
					<div>
						<h4>Algo mas que poner</h4>
						<p>Alguna otra cosa mas de chamullo</p>
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