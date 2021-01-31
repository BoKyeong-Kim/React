import React from 'react';
import "./styles.css";

const Modal = (props) => {
    const { show, closeModal, detail } = props;
    console.log(detail)
    return (
        <>
        <div className={show ? "overlay" : "hide"} onClick={closeModal} />
          <div className={show ? "modal" : "hide"}>
            <button onClick={closeModal}>X</button>
            <h1>{detail.name}</h1>
            <p>This is modal content</p>
          </div>
        </>
      );
};

export default Modal;