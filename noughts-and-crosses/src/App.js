import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="title">Noughts And Crosses</h1>

        <div className="score">
          <h1 className="player1">Player 1: 0</h1>
          <h1 className="player2">Player 2: 0</h1>
        </div>

        <div className="turn"><h1>Player 1</h1></div>

        <div className="grid">
          <div className="one"></div>
          <div className="two"></div>
          <div className="three"></div>

          <div className="four"></div>
          <div className="five"></div>
          <div className="six"></div>

          <div className="seven"></div>
          <div className="eight"></div>
          <div className="nine"></div>
        </div>

        <div className="play"><button className="start">Play</button>
        </div>
      </div>
    );
  }
}

export default App;
