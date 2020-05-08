import React from 'react';
import './Game.css';
import { Link } from 'react-router-dom';

const Game = (props) => {
  const game = props.game;
  return (
    <div className='game'>
      <h2>{game.name}</h2>
      <p>Rating: {game.rating}/5</p>
      <img className='image' src={game.background_image} alt={game.name} />
      <div><Link to={`/${game.slug}/screenshots/${game.id}`}>Screenshots</Link>    </div>
    </div>
  );
};

export default Game;
