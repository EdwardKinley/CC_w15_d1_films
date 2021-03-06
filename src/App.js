import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FilmBox from './containers/FilmBox.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Films</h1>
        </header>
        <main>
          <FilmBox />
        </main>
      </div>
    );
  }
}

export default App;
