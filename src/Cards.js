import React from 'react';

function Cards({ characters, handleClick }) {
  const characterCards = characters.map((character) => {
    const { image, id } = character;
    return (
      <div key={id} className='card'>
        <img
          src={image}
          alt={characters.id}
          className='icon'
          onClick={() => handleClick(id)}
        />
      </div>
    );
  });

  return <section className='basic-grid'>{characterCards}</section>;
}

export default Cards;
