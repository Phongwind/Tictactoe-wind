import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './components/Board';
import 'bootstrap/dist/css/bootstrap.min.css';
import FacebookLogin from 'react-facebook-login';

let startTime = 0;

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      squares: ['', '', '', '', '', '', '', '', ''],
      nextPlayer: false,
      Moves: [],
      history: [],
      topRank: [],
      stepNumber: 0,
      user: '',
    }
  }

  resetGame = () => {
    startTime = 0;
    this.setState({
      squares: ['', '', '', '', '', '', '', '', ''],
      Moves: [],
      gameIsOver: false,
      nextPlayer: true
    });
  };

  setParentState = (obj) => {
    this.setState(obj)
  }

  showPast = (item, idx) => {
    this.setState({ squares: item.squares, nextPlayer: item.nextPlayer, history: this.state.history.filter((e, i) => i <= idx) })
  }



  responseFacebook = response => {
    // console.log(response);
    this.setState({ user: response.name });
  };

  postData = async duration => {
    let data = new URLSearchParams();
    // let num = this.state.arrayOfMoves.length;
    data.append("player", this.state.user);
    data.append("score", duration);
    const url = `https://ftw-highscores.herokuapp.com/tictactoe-dev`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: data.toString(),
      json: true
    });
    console.log(response);
    // We actually don't care about the response ... do we?
  };
  getData = async () => {
    const url = `https://ftw-highscores.herokuapp.com/tictactoe-dev`;
    let data = await fetch(url);
    let result = await data.json();
    console.log("data from api", result);
    // return result.items;
    this.setState({ leaderboard: result.items });
  };


  render() {

    // if(!this.state.user){
    //   return(<div className="App">
    //   <FacebookLogin
    //   autoLoad={true}
    //   appId="208586840462680"
    //   fields="name,email,picture"
    //   callback={(resp) => this.responseFacebook(resp)}
    // /> </div>
    //   )
    // }

    return (
      <div className="App">
        <h1>Tic tac toe</h1>
        <h2>User info: {this.state.user}</h2>
        <button
          className="btn bg-warning text-dark"
          onClick={() => this.resetGame()}
        >
          Reset
                    </button>
        <div className="containter" style={{ display: 'flex', flexDirection: 'column' }}>
          <div className="row">


            <div className="col-6">
              <Board {...this.state} setParentState={this.setParentState} />
            </div>

            <div className="col-6" style={{ marginTop: '5%' }}>
              <ul style={{ listStyleType: 'none' }}>
                {
                  this.state.history.map((item, idx) => {
                    return (<li style={{ marginBottom: '5%' }}><button onClick={() => this.showPast(item, idx)}>go to move {idx + 1}</button></li>)
                  })
                }
              </ul>

              <h2>Top Rank:</h2>
              <ol>
                {
                  this.state.topRank.map((item) => {
                    return (<li>{item.player}:{item.score}</li>)
                  })
                }</ol>
            </div>

          </div>
        </div>


      </div>
    );
  }

}

export default App;
