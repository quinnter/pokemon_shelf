import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import SearchForm from './components/SearchForm';
import PokemonGrid from './components/PokemonGrid';
import axios from 'axios';

class App extends Component {
  state = {
    userSearchTerm: "",
    pokemons: []
  }
  render() {
    const { pokemons } = this.state
    return (
      <div className="App">
        <Header />
        <SearchForm setSearchTerm={this.setSearchTerm} />
        <PokemonGrid pokemons={pokemons} />
      </div>
    );
  }

  componentDidMount = () => {
    const url = 'https://pokeapi.co/api/v2/pokemon'
    axios.get(url)
      .then(({ data: { results } }) => {
        this.setState({ pokemons: results })
      })
  }

  setSearchTerm = userInput => {
    this.setState({ userSearchTerm: userInput })
  }

}

export default App;
