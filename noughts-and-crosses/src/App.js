import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    player1: 0,
    player2: 0,
    turn: "player 1",
    game: false,
    grid0: [false, ''],
    grid1: [false, ''],
    grid2: [false, ''],
    grid3: [false, ''],
    grid4: [false, ''],
    grid5: [false, ''],
    grid6: [false, ''],
    grid7: [false, ''],
    grid8: [false, ''],
    zeroOrCross: 'O'
  }

  render() {
    this.check();
    return (
      <div className="App">
        <h1 className="title">Noughts And Crosses</h1>

        <div className="score">
          <h1 className="player1">Player 1: {this.state.player1}</h1>
          <h1 className="player2">Player 2: {this.state.player2}</h1>
        </div>

        <div className="turn"><h1>{this.state.turn}</h1></div>

        <div className="grid">
          <div className="one" onClick={() => this.play("grid0")}><h1 className="box1">{this.state.grid0[1]}</h1></div>
          <div className="two" onClick={() => this.play("grid1")}><h1 className="box2">{this.state.grid1[1]}</h1></div>
          <div className="three" onClick={() => this.play("grid2")}><h1 className="box3">{this.state.grid2[1]}</h1></div>

          <div className="four" onClick={() => this.play("grid3")}><h1 className="box4">{this.state.grid3[1]}</h1></div>
          <div className="five" onClick={() => this.play("grid4")}><h1 className="box5">{this.state.grid4[1]}</h1></div>
          <div className="six" onClick={() => this.play("grid5")}><h1 className="box6">{this.state.grid5[1]}</h1></div>

          <div className="seven" onClick={() => this.play("grid6")}><h1 className="box7">{this.state.grid6[1]}</h1></div>
          <div className="eight" onClick={() => this.play("grid7")}><h1 className="box8">{this.state.grid7[1]}</h1></div>
          <div className="nine" onClick={() => this.play("grid8")}><h1 className="box9">{this.state.grid8[1]}</h1></div>
        </div>

        <div className="play"><button className="btn" onClick={() => this.start()}>Play</button>
        </div>
      </div>
    );
  }

  start = () => { this.setState({ game: true }) }

  play = (grid) => {
    this.state.zeroOrCross === 'X' ? this.setState({ zeroOrCross: 'O' }) : this.setState({ zeroOrCross: 'X' });
    if (this.state.game && !this.state[grid][0]) {
      this.setState({ [grid]: [true, this.state.zeroOrCross] });
      this.state.turn === 'player 1' ? this.setState({ turn: 'player 2' }) : this.setState({ turn: 'player 1' })
    }
  }

  reset = () => {
    this.setState({
      grid0: [false, ''],
      grid1: [false, ''],
      grid2: [false, ''],
      grid3: [false, ''],
      grid4: [false, ''],
      grid5: [false, ''],
      grid6: [false, ''],
      grid7: [false, ''],
      grid8: [false, ''],
      zeroOrCross: 'O'
    })
  }

  check = () => {

    let player = this.state.turn.replace(/\s/g,'');
    player==="player1" ? player = "player2" : player = "player1"; 

    if (this.state.grid0[1] && this.state.grid0[1] === this.state.grid1[1] && this.state.grid0[1] === this.state.grid2[1]) {
      this.setState({ [player]: this.state[player] + 1 });
      this.reset();
    }

    else if (this.state.grid3[1] && this.state.grid3[1] === this.state.grid4[1] && this.state.grid3[1] === this.state.grid5[1]) {
      this.setState({ [player]: this.state[player] + 1 });
      this.reset();
    }

    else if (this.state.grid6[1] && this.state.grid6[1] === this.state.grid7[1] && this.state.grid6[1] === this.state.grid8[1]) {
      this.setState({ [player]: this.state[player] + 1 });
      this.reset();
    }

    else if (this.state.grid0[1] && this.state.grid0[1] === this.state.grid4[1] && this.state.grid0[1] === this.state.grid8[1]) {
      this.setState({ [player]: this.state[player] + 1 });
      this.reset();
    }

    else if (this.state.grid6[1] && this.state.grid6[1] === this.state.grid4[1] && this.state.grid6[1] === this.state.grid2[1]) {
      this.setState({ [player]: this.state[player] + 1 });
      this.reset();
    }

    else if (this.state.grid0[1] && this.state.grid0[1] === this.state.grid3[1] && this.state.grid0[1] === this.state.grid6[1]) {
      this.setState({ [player]: this.state[player] + 1 });
      this.reset();
    }

    else if (this.state.grid1[1] && this.state.grid1[1] === this.state.grid4[1] && this.state.grid1[1] === this.state.grid7[1]) {
      this.setState({ [player]: this.state[player] + 1 });
      this.reset();
    }

    else if (this.state.grid2[1] && this.state.grid2[1] === this.state.grid5[1] && this.state.grid2[1] === this.state.grid8[1]) {
      this.setState({ [player]: this.state[player] + 1 });
      this.reset();
    }
  }
}

export default App;
