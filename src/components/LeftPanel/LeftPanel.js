import React from 'react';
import './leftPanel.scss';
import currentBall from '../../assets/img/currentBall.png';
import Ball from '../Ball/Ball';

const LeftPanel = () => {
  return (
    <div className='panelLeftContainer'>
      <div className='currentBall span-3-grid-column' >
        <img src={currentBall} alt="Current Ball" />
        <h1>85</h1>
      </div>
      <div className='previousBalls'>
        <Ball />
        <Ball />
        <Ball />
      </div>
      <div className='button'>
        <button className='startButton'>Empezar a jugar</button>
      </div>
    </div>
  );
};

export default LeftPanel;
