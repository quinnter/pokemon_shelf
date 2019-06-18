import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import SearchForm from './components/SearchForm';
import PokemonGrid from './components/PokemonGrid';
import axios from 'axios';

class App extends Component {
  state = {
    userSearchTerm: "",
    pokemon: []
  }
  render() {
    const { pokemon } = this.state
    return (
      <div className="App">
        <Header />
        <SearchForm setSearchTerm={this.setSearchTerm} />
        <PokemonGrid pokemon={pokemon} />
      </div>
    );
  }

  componentDidMount = () => {
    const url = 'https://pokeapi.co/api/v2/pokemon-species'
    axios.get(url)
      .then(({ data: { results } }) => {
        this.setState({ pokemon: results })
      })
  }

  setSearchTerm = userInput => {
    this.setState({ userSearchTerm: userInput })
  }

}

export default App;
