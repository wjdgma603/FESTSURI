import React from 'react';
import "./GallModal.css";

const GallModal = ({ isOpen, onClose, data }) => {
  if (!isOpen) return null;



  return (
    <div className="GallModalTop" onClick={onClose}>
      <div className="GallModal-Content">
        <span className="GallClose" onClick={onClose}></span>
        <img src={require(`./images/data_${data.id}.jpg`)} alt={data.usetitle} />
        <h5>{data.usetitle}</h5>
        <p>{data.useDeta}</p>
      </div>
    </div>
  );
};


export default GallModal;