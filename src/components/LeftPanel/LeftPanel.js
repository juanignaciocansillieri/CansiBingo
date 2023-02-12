import React, { useEffect, useState } from 'react';
import './leftPanel.scss';
import imgCurrentBall from '../../assets/img/currentBall.png';
import { useCurrentNumberContext, useCurrentNumberToggleContext } from '../../providers/NumberProvider';
import Ball from '../Ball/Ball';
import { useGameStartedContext, useGameStartedToggleContext } from '../../providers/GameStartedProvider';

const LeftPanel = () => {
  const [penultimateNumber, setPenultimateNumber] = useState();
  const [antepenultimateNumber, setAntepenultimate] = useState();
  const [angle, setAngle] = useState(0);
  const [counter, setCounter] = useState(1);
  const [bowler, setBowler] = useState([]);
  const rotate = `rotate(${angle}deg)`;
  const currentNumber = useCurrentNumberContext();
  const setCurrentNumber = useCurrentNumberToggleContext();
  const isGameStarted = useGameStartedContext();
  const setIsGameStarted = useGameStartedToggleContext();

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  const generateRandomNumbers = () => {
    const numbers = Array.from({ length: (90 - 1) / 1 + 1 }, (_, i) => 1 + (i * 1));
    shuffleArray(numbers);
    setBowler(numbers);
    setAngle(0);
    setCounter(1);
  };

  const resetGame = () => {
    generateRandomNumbers();
    setCurrentNumber('');
    setIsGameStarted(false);
    setAntepenultimate('');
    setPenultimateNumber('');
    setAngle(angle);
  };
  const startBingo = () => {
    setIsGameStarted(true);
    setAntepenultimate(penultimateNumber);
    setPenultimateNumber(currentNumber);
    const number = bowler.shift();
    setCurrentNumber(number);
    setAngle(1080 + angle);
    setCounter(counter + 1);

    if (counter === 91) {
      resetGame();
    }
  };
  useEffect(() => {
    generateRandomNumbers();
  }, []);
  useEffect(() => {
    if (!isGameStarted) {
      resetGame();
    }
  }, [isGameStarted]);

  return (
    <div className='panelLeftContainer'>

      <div className='currentBall span-3-grid-column' >
        <img src={imgCurrentBall} width='80%' alt="Current Ball" style={{ transform: rotate, transition: 'transform 1s' }} />
        <h1 style={{ transform: rotate, transition: 'transform 1s' }}>{currentNumber}</h1>
      </div>
      <div className='previousBalls'>
        <Ball number={currentNumber} />
        <Ball number={penultimateNumber} />
        <Ball number={antepenultimateNumber} />
      </div>
      <div className='button'>
        <button className="startButton" onClick={startBingo}>{`${isGameStarted ? 'Girar' : 'Iniciar juego'}`}</button>
        <button className='resetButton' onClick={() => setIsGameStarted(false)}>↻</button>
      </div>
    </div>
  );
};

export default LeftPanel;
