import React from "react";
import { useState } from "react";
import style from "./ModalsStyles.module.css";
import Modal from "./Modal";

const Modals = () => {

  const [ show, setShow ] = useState(false);

  return (
    <div className={style.container}>
      <h1>Modales</h1>
      <button onClick={() => setShow(true)}>Ver Modal</button>
      <Modal isOpen={show} onClose={() => setShow(false)}>
        
      </Modal>
    </div>
  )
}

export default Modals;