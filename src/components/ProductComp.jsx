import React from "react";
import style from "./ProductCompStyles.module.css"
import VerticalSlider from "./VerticalSlider"

const ProductComp = () => {
  return (
    <div className={style.container}>
      <h2>Productos</h2>
      <div className={style.content}>
        <div className={style.text}>
          <div>
            <h4>Aplicaciones Web:</h4>
            <p>Desarrollamos aplicaciones web a medida para mejorar la interacción con tus usuarios y optimizar tus procesos internos. Utilizamos las últimas tecnologías para asegurar que nuestras soluciones sean robustas, seguras y escalables.</p>
          </div>
          <div>
            <h4>Landing Pages:</h4>
            <p>Diseñamos landing pages efectivas y atractivas que convierten visitantes en clientes. Entendemos la importancia de una primera impresión y trabajamos para que tu campaña de marketing digital sea un éxito.</p>
          </div>
          <div>
            <h4>Menú Digital:</h4>
            <p>Ofrecemos soluciones de menú digital para restaurantes y negocios de alimentos. Nuestro menú digital es fácil de actualizar y proporciona una experiencia interactiva y moderna para tus clientes.</p>
          </div>
          <div>
            <h4>Mantenimiento de Sitios Web:</h4>
            <p>Nos encargamos del mantenimiento continuo de tu sitio web para asegurar su funcionamiento óptimo. Realizamos actualizaciones, monitoreamos la seguridad y solucionamos cualquier problema técnico para que puedas centrarte en tu negocio.</p>
          </div>
        </div>
        <VerticalSlider />
      </div>
    </div>
  )
}

export default ProductComp;