import React from "react";
import style from "./ModalStyles.module.css"
import { FaTimes } from "react-icons/fa";

const Modal = ( { isOpen, onClose, children } ) => {
  return (
    <div className={ isOpen ? `${style.modal}` : `${style.dontShow}` }>
      <div className={style.container}>
        <button className={style.close} onClick={onClose}><FaTimes /></button> 
          {children}
      </div>
    </div>
  )
}

export default Modal;