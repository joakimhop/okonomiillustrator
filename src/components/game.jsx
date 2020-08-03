import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Board from './board';
import calculateWinner from '../helpers/calculateWinner';

const Game = () => {
  // const [history, setHistory] = useState([{ squares: Array(9).fill(null) }]);
  // const [stepNumber, setStepNumber] = useState(0);
  const history = useSelector((state) => state.game.history);
  const stepNumber = useSelector((state) => state.game.stepNumber);
  const dispatch = useDispatch();

  const handleClick = (i) => {
    dispatch({ type: 'ADD_MOVE', step: stepNumber, square: i });
    // const updatedHistory = history.slice(0, stepNumber + 1);
    // const current = updatedHistory[updatedHistory.length - 1];
    // const squares = current.squares.slice();
    // if (calculateWinner(squares) || squares[i]) {
    //   return;
    // }
    // squares[i] = xIsNext ? 'X' : 'O';
    // setHistory(updatedHistory.concat([{
    //   squares,
    // }]));
    // setStepNumber(history.length);
    // setXIsNext(!xIsNext);
  };

  const jumpTo = (step) => {
    // setStepNumber(step);
    dispatch({ type: 'JUMP_TO', step });
  };

  const moves = () => history.map((step, move) => {
    const desc = move
      ? `Go to move #${move}`
      : 'Go to game start';
    return (
      <li key={move}>
        <button type="button" onClick={() => jumpTo(move)}>{desc}</button>
      </li>
    );
  });

  const statusText = () => {
    const winner = calculateWinner(history[stepNumber].squares);
    if (winner) {
      return `Winner: ${winner}`;
    }
    return `Next player: ${(stepNumber % 2) === 0 ? 'X' : 'O'}`;
  };

  return (
    <div className="game">
      <div className="game-board">
        <Board
          squares={history[stepNumber].squares}
          onClick={(i) => handleClick(i)}
        />
      </div>
      <div className="game-info">
        <div>{statusText()}</div>
        <ol>{moves()}</ol>
      </div>
    </div>
  );
};

export default Game;
