import React from 'react';

function Header({ playerScore }) {
  return (
    <header
      className="game-score"
    >
      <div>Score: {playerScore}</div>
    </header>
  );
}

export default Header;
