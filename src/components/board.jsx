import React from 'react';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import Box from './box';

const Board = () => (
  <DndProvider backend={HTML5Backend}>
    <div>
      <div className="storage">
        <Box />
      </div>
      <div className="finance">
        <Box />
      </div>
    </div>
  </DndProvider>
);

export default Board;
