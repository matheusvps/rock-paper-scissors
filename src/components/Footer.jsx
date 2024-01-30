import React, { useState } from 'react';
import '../styles/Footer.css';
import Modal from './Modal';

function Footer() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <footer
      className="game-footer"
    >
      <button onClick={handleOpenModal}>Regras</button>
      {modalOpen && (
        <div>
          <Modal
            onClose={handleCloseModal}
          />
        </div>
      )}
    </footer>
  );
}

export default Footer;
