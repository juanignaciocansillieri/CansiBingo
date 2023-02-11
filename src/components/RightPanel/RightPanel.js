import React, { useEffect, useRef } from 'react';
import './rightPanel.scss';
import { useCurrentNumberContext } from '../../providers/NumberProvider';
import { useGameStartedContext } from '../../providers/GameStartedProvider';

const RightPanel = () => {
  const currentNumber = useCurrentNumberContext();
  const isGameStarted = useGameStartedContext();
  const numberRef = useRef();
  const numbers = Array.from({ length: (90 - 1) / 1 + 1 }, (_, i) => 1 + (i * 1));

  const fillNumbers = () => {
    const span = numberRef.current.childNodes[currentNumber - 1].firstChild;
    span.className = 'activeNum';
  };
  const emptyNumbers = () => {
    const allSpans = numberRef.current.childNodes;
    allSpans.forEach((currentSpan) => {
      currentSpan.firstChild.className = '';
    });
  };
  useEffect(() => {
    if (isGameStarted) fillNumbers();
    else emptyNumbers();
  }, [currentNumber]);
  useEffect(() => {
    if (!isGameStarted) emptyNumbers();
  }, [isGameStarted]);

  return (
    <div className='panelRightContainer'>
      <div className='numContainer' ref={numberRef}>
        {numbers.map((num, index) => <div className='num' style={{ textAlign: 'center' }} key={index}>
          <span id={num} >{num}</span>
        </div>)}
      </div>
    </div>
  );
};

export default RightPanel;
