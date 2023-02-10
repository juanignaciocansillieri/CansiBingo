import React from 'react';
import './ball.scss';
import ballImg from '../../assets/img/bolas120.png';

const Ball = () => {
  return (
    <div className='ballsContainer'>
      <img src={ballImg} alt="ball" />
      <h1>85</h1>
    </div>
  );
};

export default Ball;
