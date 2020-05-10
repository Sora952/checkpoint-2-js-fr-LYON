import React from 'react'
import { Link } from 'react-router-dom'
import './App.css'

function GameScreenshots ({ location }) {
  return (
    <div>
      <div className='ThumbList'>
        {location.state.map(game => {return <img className='img-hov' src={game.image} alt=''/>})}
      </div>
      <div>
        <Link className='button' to='/'>Return to Home</Link>
      </div>
    </div>
  )
}

export default GameScreenshots