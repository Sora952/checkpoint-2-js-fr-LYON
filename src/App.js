import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Gamelist from './GameList'
import GameScreenshots from './GameScreenshots'

function App () {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Gamelist}/>
        <Route exact path='/jeu/screenshots/:id' component={GameScreenshots}/>
      </Switch>
    </Router>
  )
}

export default App