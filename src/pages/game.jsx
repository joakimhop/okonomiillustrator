import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Board from '../components/board';
import { getGameData } from '../actions/game';

const Game = () => {
  const dispatch = useDispatch();
  const groupId = useSelector((state) => state.game.groupId);

  useEffect(() => {
    if (groupId) {
      dispatch(getGameData(groupId));
    }
  }, [groupId, dispatch]);

  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
    </div>
  );
};

export default Game;
