import React from 'react';

function Header({ currentScore, highestScore }) {
  return (
    <header>
      <h1>Memory Card Game</h1>
      <div className='scores'>
        <h3 className='current'>Current score: {currentScore}</h3>
        <h3 className='highest'>Highest score: {highestScore}</h3>
      </div>
      <p>Don't click an icon twice!</p>
    </header>
  );
}

export default Header;
