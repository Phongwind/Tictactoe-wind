import React, { Component } from 'react'
import Square from './Square'

export default class Board extends Component {

    onSquareClicked= (i) => {
        console.log("the box number you click", i)
        //1.make the one array and copy the value from parent array
        let squareList = this.props.squares.slice();
        //2.change the value at copied array
        squareList[i]= this.props.nextPlayer?"o":"x"
        //3 insert that array into parent array
        this.props.setParentState({squares:squareList, nextPlayer:!this.props.nextPlayer})
    }



    render() {

        let status='';
        status = this.props.nextPlayer?`nextPlayer is O`:`nextPlayer is X`;

        return (
            <div>
                <h2>{status}</h2>
                <div style={{ display: 'flex' }}>
                    <Square value={this.props.squares[0]} onClick={()=>this.onSquareClicked(0)}/>
                    <Square value={this.props.squares[1]} onClick={()=>this.onSquareClicked(1)}/>
                    <Square value={this.props.squares[2]} onClick={()=>this.onSquareClicked(2)}/>
                </div>

                <div style={{ display: 'flex' }}>
                    <Square value={this.props.squares[3]} onClick={()=>this.onSquareClicked(3)}/>
                    <Square value={this.props.squares[4]} onClick={()=>this.onSquareClicked(4)}/>
                    <Square value={this.props.squares[5]} onClick={()=>this.onSquareClicked(5)}/>
                </div>

                <div style={{ display: 'flex' }}>
                    <Square value={this.props.squares[6]} onClick={()=>this.onSquareClicked(6)}/>
                    <Square value={this.props.squares[7]} onClick={()=>this.onSquareClicked(7)}/>
                    <Square value={this.props.squares[8]} onClick={()=>this.onSquareClicked(8)}/>
                </div>

            </div>
        )
    }
}
