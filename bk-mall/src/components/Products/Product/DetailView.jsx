import React, { useState } from 'react';
import Modal from './Modal/Modal';
import './Modal/styles.css';
import { Button } from '@material-ui/core';

const DetailView = ({ product, fetchProduct, detail }) => {
    const [show, setShow] = useState(false);

    const openModal = (productId) => {
        fetchProduct(productId);
        setShow(true);
    }
    const closeModal = () => setShow(false);
  
    
    return (
      <div className="App">
        {!show && <button onClick={() => openModal(product.id)}>Show modal</button>}
        <Modal closeModal={closeModal} show={show} detail={detail} />
      </div>
    );
}

export default DetailView;