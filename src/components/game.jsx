import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Board from './board';
import { getGameData } from '../actions/game';

const Game = () => {
  const dispatch = useDispatch();
  const groupId = useSelector((state) => state.gameServer.groupId);

  useEffect(() => {
    dispatch(getGameData(groupId));
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
    </div>
  );
};

export default Game;
