import React from 'react';

import Board from './Board';
import PlayerTurn from './PlayerTurn';

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

class Game extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      squares: Array(9).fill(null),
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.getNextToken();
    this.setState({
      squares: squares,
    });
  }

  getNextToken() {
    const turn = this.state.squares.filter((token) => token === 'X' || token === 'O').length;
    return turn % 2 === 0 ? 'X' : 'O';
  }

  render() {
    return (
      <>
        <PlayerTurn turn={this.getNextToken()} winner={calculateWinner(this.state.squares)} />
        <Board squares={this.state.squares} onClick={this.handleClick} />
      </>
    );
  }
}

export default Game;
