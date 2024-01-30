import React from 'react';
import '../styles/Footer.css';

function Modal({ onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Regras do Jogo</h2>
        <p>1. Escolha entre Pedra, Papel ou Tesoura.</p>
        <p>2. Pedra vence Tesoura, Tesoura vence Papel, Papel vence Pedra.</p>
        <button onClick={onClose}>Fechar</button>
      </div>
    </div>
  );
}

export default Modal;
