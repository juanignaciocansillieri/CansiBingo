import React from 'react';
import './rightPanel.scss';

const RightPanel = () => {
  const numbers = Array.from({ length: (90 - 1) / 1 + 1 }, (_, i) => 1 + (i * 1));

  return (
    <div className='panelRightContainer'>
      <div className='numContainer'>
        {numbers.map((num, index) => <div className='num' style={{ textAlign: 'center' }} key={index}>
          <span id={num} >{num}</span>
        </div>)}
      </div>
    </div>
  );
};

export default RightPanel;
