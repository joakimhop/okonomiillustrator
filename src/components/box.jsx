import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useDrag, useDrop } from 'react-dnd';
import PropTypes from 'prop-types';

const Box = ({ name }) => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.game[name]);
  const dragNdropRef = useRef(null);
  const inputRef = useRef();

  const [{ opacity }, drag] = useDrag({
    item: { type: 'ValueBox' },
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.5 : 1,
    }),
    end: (item, monitor) => {
      if (monitor.didDrop()) {
        const creditFieldRef = monitor.getDropResult();
        if (creditFieldRef.current === inputRef.current) return;
        const input = prompt('Hvor mye?', '0');
        const inputAmount = parseInt(input, 10);
        if (isNaN(inputAmount)) return;

        const creditNode = creditFieldRef.current;
        const creditNodeNewValue = creditNode.innerText ? parseInt(creditNode.innerText, 10) + inputAmount : inputAmount;
        dispatch({ type: 'SET_FIELD', name: creditNode.dataset.name, value: creditNodeNewValue });

        const debitNode = inputRef.current;
        const newDebitNodeValue = debitNode.innerText ? parseInt(debitNode.innerText, 10) - inputAmount : -inputAmount;
        dispatch({ type: 'SET_FIELD', name, value: newDebitNodeValue });
      }
    },
  });

  const [, drop] = useDrop({
    accept: 'ValueBox',
    drop: () => inputRef,
  });

  drag(drop(dragNdropRef));

  return (
    <div ref={dragNdropRef} style={{ opacity }}>
      <span ref={inputRef} data-name={name}>{value}</span>
    </div>
  );
};

Box.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Box;
