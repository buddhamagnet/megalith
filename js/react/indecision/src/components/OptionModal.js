import React from "react";
import Modal from "react-modal";

const OptionModal = ({ enabled, handleClose, option }) => (
  <Modal
    onRequestClose={handleClose}
    isOpen={enabled}
    closeTimeoutMS={200}
    className="option-modal"
    contentLabel="option-modal"
    ariaHideApp={false}
  >
    <h3 className="modal__title">selected option</h3>
    {option && <p className="modal__body">{option}</p>}
    <button className="button" onClick={handleClose}>
      OK
    </button>
  </Modal>
);

export default OptionModal;
