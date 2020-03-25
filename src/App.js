import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './components/Board';

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      squares: ['','','','','','','','',''],
      nextPlayer: false
    }
  }
  setParentState = (obj) => {
    this.setState(obj)
  }
  render () {
    return (
      <div className="App">
        <h1>Tic tac toe</h1>
        <Board {...this.state} setParentState={this.setParentState}/>
      </div>
    );
  }
  
}

export default App;
