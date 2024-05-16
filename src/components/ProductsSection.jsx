import React from "react";
import styles from "./ProductsSectionStyles.module.css";
import academia from "../assets/img/academia/Captura desde 2024-04-20 03-07-21.png";
import sitio from "../assets/img/sitio/Captura desde 2024-04-20 03-10-43.png";
import tienda from "../assets/img/tienda/Captura desde 2024-04-22 19-16-08.png";

const ProductsSection = () => {
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
				<div className={styles.imgContainer}>
						<img className={styles.img1} src={academia} alt="Vista sitio academia" />
						<img className={styles.img2} src={sitio} alt="Vista de sitio ByteCrafters" />
						<img className={styles.img3} src={tienda} alt="Vista de sitio tienda" />
					</div>
			</div>
		</div>
	)
}

export default ProductsSection;