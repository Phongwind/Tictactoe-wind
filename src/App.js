import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './components/Board';
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      squares: ['', '', '', '', '', '', '', '', ''],
      nextPlayer: false,
      history: []
    }
  }
  setParentState = (obj) => {
    this.setState(obj)
  }

  showPast = (item, idx) => {
    this.setState({ squares: item.squares, nextPlayer: item.nextPlayer, history: this.state.history.filter((e, i) => i <= idx) })
  }


  render() {
    return (
      <div className="App">
        <h1>Tic tac toe</h1>
        <div className="containter" style={{display:'flex', flexDirection: 'column'}}>
          <div className="row">
           

            <div className="col-6">
              <Board {...this.state} setParentState={this.setParentState} />
            </div>

            <div className="col-6" style={{marginTop: '5%'}}>
              <ul style={{listStyleType: 'none'}}>
                {
                  this.state.history.map((item, idx) => {
                    return (<li style={{marginBottom: '5%'}}><button onClick={() => this.showPast(item, idx)}>go to move {idx + 1}</button></li>)
                  })
                }
              </ul>
            </div>

          </div>
        </div>


      </div>
    );
  }

}

export default App;
