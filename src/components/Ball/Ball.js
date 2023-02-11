import React from 'react';
import './ball.scss';
import ballImg from '../../assets/img/bolas120.png';

const Ball = (props) => {
  const { number } = props;
  return (
    <div className='ballsContainer'>
      <img src={ballImg} alt="ball" width='95%' />
      <h1>{number}</h1>
    </div>
  );
};

export default Ball;
