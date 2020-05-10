import React from 'react'
import { Link } from 'react-router-dom'
import './App.css'

function Game ({ id, name, rating, background_image, deleteCard, short_screenshots }) {
  return (
    <div>
      <div className='img-hov ThumbNail'>
        <img src={background_image} alt={name}/>
        <figcaption>
          <h4>Name: {name}</h4>
          <br/>
          <h4>Rating: {rating}</h4>
        </figcaption>
      </div>
      <button className='button' onClick={() => deleteCard(id)}>Delete a Game</button>
      <Link className='button' to={{ pathname: `/jeu/screenshots/${id}`, state: short_screenshots }}>See More Pictures</Link>
    </div>
  )
}

export default Game