import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import SearchForm from './components/SearchForm';

class App extends Component {
  state = {
    userSearchTerm: ""
  }
  render() {
    return (
      <div className="App">
        <Header />
        <SearchForm setSearchTerm={this.setSearchTerm} />
      </div>
    );
  }

  setSearchTerm = userInput => {
    this.setState({ userSearchTerm: userInput })
  }

}

export default App;
