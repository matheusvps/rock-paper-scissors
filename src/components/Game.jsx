import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Play from './Play';
import '../styles/Game.css';
import { returnOption, ResultNames } from '../utils/Basis';

function Game() {
  const [playerScore, setPlayerScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [result, setResult] = useState(null);
  const [showOptions, setShowOptions] = useState(true);

  const handleSelectOption = (option) => {
    const machineOption = returnOption();
    setSelectedOption(option);

    if (option.win === machineOption.name) {
      setPlayerScore((prevScore) => prevScore + 1);
      setResult(ResultNames.WIN);
    } else if (option.loses === machineOption.name) {
      setResult(ResultNames.LOSE);
    } else {
      setResult(ResultNames.DRAW);
    }
    console.debug(result);
    
    if(result === ResultNames.LOSE){
      console.debug('entrei');
      setShowOptions(false);
    }
  };

  const handleRestart = () => {
    setPlayerScore(0);
    setSelectedOption(null);
    setResult(null);
    setShowOptions(true);
  };

  return (
    <div>
      <Header 
         playerScore={playerScore} 
      />

      {showOptions ? (
         <div>
         <Play 
          onSelectOption={handleSelectOption} 
        />
         
         {result && (
         <div
            className="game-result"
         >
           <h2>{result}</h2>
         </div>
       )}
         </div>
      ) : (
        <div
         className="game-result"
        >
          <h2>{result}</h2>
          <button onClick={handleRestart}>Jogar Novamente</button>
        </div>
      )}

      <Footer/>
    </div>
  );
}

export default Game;
