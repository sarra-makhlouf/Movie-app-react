import React, { Component } from 'react';
import './App.css';
import MovieContainer from './components/movieContainer.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <MovieContainer />
      </div>
    );
  }
}

export default App;
