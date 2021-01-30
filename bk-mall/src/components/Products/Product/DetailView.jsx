import React, { useState,useEffect } from 'react';
import { Button } from '@material-ui/core';
import Modal from './Modal/Modal';
import './Modal/styles.css';

const DetailView = () => {
    const [show, setShow] = useState(false);

    const openModal = () => setShow(true);
    const closeModal = () => setShow(false);
  
    return (
      <div className="App">
        {!show && <button onClick={openModal}>Show modal</button>}
        <Modal closeModal={closeModal} show={show} />
      </div>
    );
}

export default DetailView;