import React from 'react';
import { Options } from '../utils/Basis';
import '../styles/Play.css';

function Play({ onSelectOption }) {
  return (
    <div className="play-container">
      {Options.map((option) => (
        <button key={option.id} onClick={() => onSelectOption(option)}>
          {option.name}
        </button>
      ))}
    </div>
  );
}

export default Play;
