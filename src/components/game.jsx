import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Board from './board';

const Game = () => {
  const history = useSelector((state) => state.game.history);
  const dispatch = useDispatch();

  const handleClick = () => {
  };

  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
    </div>
  );
};

export default Game;
