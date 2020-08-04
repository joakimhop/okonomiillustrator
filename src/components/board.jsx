import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import readCookie from '../helpers/readCookie';
import Box from './box';

const Board = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const cookieData = readCookie();
    dispatch({ type: 'INIT', data: cookieData });
  });

  return (
    <DndProvider backend={HTML5Backend}>
      <div>
        <div className="storage">
          <Box name="bank" />
        </div>
        <div className="finance">
          <Box name="loan" />
        </div>
      </div>
    </DndProvider>
  );
};

export default Board;
