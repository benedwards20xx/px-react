import React from 'react';
import ReactDOM from 'react-dom';
import './PX.css';

function Square(props) {
  return (
    <button className="square">
    </button>
  );
}

class Board extends React.Component {
  constructor() {
    super();
    this.state = {
      numCols: 3,
      numRows: 3,
      squares: Array(this.numCols).fill(Array(this.numRows).fill(null)),
      // squares: Array(this.numCols).fill(null);
    };
  }

  renderSquare(col,row) {
    return <Square
      value={this.state.squares[row][col]}
      // onClick={() => this.props.onClick(col,row)}
    />;
  }

  render() {
    return (
      <div>
        {
          this.state.squares.map(function(col) {
              var rows = col.map(function(row) {
                  return (
                      renderSquare(col,row);
                  )
              });

              return (
                  <tr>
                      {rows}
                  </tr>
              )
          })
        }
      </div>
    );
  }
}

class PX extends React.Component {
  constructor() {
    super();
    this.state = {
      numCols: 3,
      numRows: 3,
      squares: Array(this.numCols).fill(Array(this.numRows).fill(0)),
      // history: [{
      //   squares: Array(this.numCols).fill(Array(this.numRows).fill(null)),
      // }],
      stepNumber: 0,
      canPlay: true,
      numErrors: 0,
      numAllowedErrors: 5,
      xIsNext: true,
    };
  }

  handleClick(i,j) {
    // const history = this.state.history.slice(0, this.state.stepNumber + 1);
    // const history = this.state.history;
    // const current = history[history.length - 1];
    const squares = this.state.squares;

    console.log("squares.length");
    console.log(squares.length);
    for (let i = 0; i < squares.length; i++) {
      for(let j = 0; j < squares[i].length; j++) {
        console.log(i + ", " + j);
        // console.log(solution[i][j]);
        console.log(squares[i][j]);
      }
    }

    // const squares = Array(this.state.numRows).fill(Array(this.state.numCols).fill(null))
    if (isGameOver(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.clickable ? 'X' : '';
    this.setState({
      squares: squares,
      // history: history.concat([{
      //   squares: squares
      // }]),
      // stepNumber: history.length,
      // numErrors: if(
      //   // TODO: errorOccured()
      //   false,
      //   this.state.numErrors + 1,
      //   this.state.numErrors
      // ),
      // canPlay: if(
      //   this.state.numErrors >= this.state.numAllowederrors,
      //   false,
      //   true
      // )
      // xIsNext: !this.state.xIsNext,
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      // canPlay: true,
      // numErrors: 0,
      // numAllowedErrors: 5,
      // xIsNext: true,
      // xIsNext: (step % 2) ? false : true,
    });
  }

  render() {
    // const history = this.state.history;
    // const current = history[this.state.stepNumber];
    const winner = isGameOver(this.state.squares);

    // const moves = history.map((step, move) => {
    //   const desc = move ?
    //     'Move #' + move :
    //     'Game start';
      // return (
      //   <li key={move}>
      //     <a href="#" onClick={() => this.jumpTo(move)}>{desc}</a>
      //   </li>
      // );
    // });

    let status;
    if (winner) {
      status = 'You beat the level!';
    }
    // else {
    //   status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    // }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={this.state.squares}
            onClick={(i,j) => this.handleClick(i,j)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <PX />,
  document.getElementById('root')
);

export default PX;

function isGameOver(squares) {
  const solution = [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1]
  ];
  for (let i = 0; i < solution.length; i++) {
    for(let j = 0; j < solution[i].length; j++) {
      // console.log(i + ", " + j);
      // console.log(solution[i][j]);
      // console.log(squares[i][j]);
      // if(squares[i][j] !== solution[i][j])
      //   return false;
    }
    // if(squares[i] != solution [i])
    //   return false;
  }
  return true;
}