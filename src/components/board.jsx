import React, { useRef } from 'react';

const Board = () => {
  const incomeRef = useRef();
  const stockRef = useRef();

  const moveMoney = (from, to) => {
    const input = prompt('Hvor mye?', '0');
    const amount = parseInt(input, 10);
    if (isNaN(amount)) return;
    const fromNode = from.current;
    fromNode.value = fromNode.value ? parseInt(fromNode.value, 10) - amount : -amount;
    const toNode = to.current;
    toNode.value = toNode.value ? parseInt(toNode.value, 10) + amount : amount;
  };

  return (
    <div>
      <div className="storage">
        <input type="number" name="stock" ref={stockRef} />
        <button type="button" onClick={() => moveMoney(stockRef, incomeRef)}>Flytt penger</button>
      </div>
      <div className="finance">
        <input type="number" name="bank" ref={incomeRef} />
        <button type="button" onClick={() => moveMoney(incomeRef, stockRef)}>Flytt penger</button>
      </div>
    </div>
  );
};

export default Board;
