import React, { Component } from "react";
import GameList from "./components/GameList";
import axios from "axios";

export default class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      games: [],
      gameList: [],
      filterGames : false,
      buttonText: 'Best games',
    };
    this.gameListRef = this.state.games;
  }

  componentDidMount() {
    this.getGames();
  }

  getGames = () => {
    axios
    .get('https://wild-games.herokuapp.com/api/v1')
    .then((response) => {
      this.setState({ games: response.data });
    }, (error) => {
      console.log(error);
    });
  };

  delGame = (name) =>{
    this.setState({games: [...this.state.games.filter(game => game.name !== name)]});
  }

  bestGamesOnClick = () => {
    // on fais un backup de games en gameList pour le rafficher en entier plus tard
    this.setState({
      gameList: this.state.games
    })
    // on split
    let games = this.state.games.slice();
    if (this.state.filterGames === false) {
      games = games.filter(
        game => game.rating >= 4.5
      );
      this.setState({ games });
      this.setState({ buttonText: 'Return to games' });
      this.setState({ filterGames: true });
    } else {
      if(this.state.buttonText === 'Return to games'){
          this.setState({ games: this.state.gameList });
          this.setState({ buttonText: 'Best games' });
          this.setState({ filterGames: false });
        
          //ton ancien code
          // this.setState({ games: this.state.gameListRef });
          // this.setState({ buttonText: 'Return to games' });
          // this.setState({ filterGames: false });
      }
    }
  }


  render() {
    return (
      <div>
        {/* boutton pour filtrer ou défiltrer */}
        <button onClick={this.bestGamesOnClick}>
            {this.state.buttonText}
        </button>
        {this.state.games.map(() => (
          <div>
            {/* Boutton delete */}
            <GameList games={this.state.games} delGame={this.delGame}/> 
          </div>
        ))}
      </div>
    );
  }
}


