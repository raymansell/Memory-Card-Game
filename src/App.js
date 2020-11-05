import React, { useState, useEffect } from 'react';
import './App.css';
import characters from './data';
import Header from './Header';
import Cards from './Cards';

function App() {
  const [charactersArray, setCharactersArray] = useState(characters);
  const [gameFlow, setGameFlow] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [highestScore, setHighestScore] = useState(0);

  const shuffleArray = (arr) => {
    const newArr = arr.slice();
    for (let i = newArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }
    return newArr;
  };

  const handleClick = (move) => {
    if (gameFlow.includes(move)) {
      setCurrentScore(0);
      setGameFlow([]);
    } else {
      setHighestScore((prevHighest) => {
        return prevHighest === currentScore ? prevHighest + 1 : prevHighest;
      });

      setCurrentScore((prevScore) => prevScore + 1);

      setGameFlow((prevGameFlow) => [...prevGameFlow, move]);
    }

    // Shuffling the gameboard.
    setCharactersArray((prevArr) => shuffleArray(prevArr));
  };

  useEffect(() => {
    // Persisting state to LocalStorage
    const highest = localStorage.getItem('highestScore');
    if (highest) {
      setHighestScore(parseInt(highest));
    }
    // Random layour on mount
    const shuffledArray = shuffleArray(characters);
    setCharactersArray(shuffledArray);
  }, []);

  useEffect(() => {
    // Updating LocalStorage when highestScore updates.
    localStorage.setItem('highestScore', highestScore.toString());
  }, [highestScore]);

  return (
    <>
      <Header currentScore={currentScore} highestScore={highestScore} />
      <Cards characters={charactersArray} handleClick={handleClick} />
    </>
  );
}
export default App;
