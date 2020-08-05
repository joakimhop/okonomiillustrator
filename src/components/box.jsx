import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useDrag, useDrop } from 'react-dnd';
import PropTypes from 'prop-types';

const Box = ({ name }) => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.game[name]);
  const dragNdropRef = useRef(null);
  const inputRef = useRef();

  const getUserInput = (text, defaultValue) => {
    const input = prompt(text, defaultValue).replace(',', '.');
    const inputAmount = parseFloat(input);
    if (isNaN(inputAmount)) return null;
    return parseFloat(inputAmount.toFixed(2));
  };

  const [{ opacity }, drag] = useDrag({
    item: { type: 'ValueBox' },
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.5 : 1,
    }),
    end: (item, monitor) => {
      if (monitor.didDrop()) {
        const creditFieldRef = monitor.getDropResult();
        if (creditFieldRef.current === inputRef.current) return;
        const inputAmount = getUserInput('Hvor mye?', '0');
        if (!inputAmount) return;

        const creditNode = creditFieldRef.current;
        const creditNodeNewValue = creditNode.innerText ? parseFloat(creditNode.innerText) + inputAmount : inputAmount;
        dispatch({ type: 'SET_FIELD', name: creditNode.dataset.name, value: creditNodeNewValue.toFixed(2) });

        const debitNode = inputRef.current;
        const newDebitNodeValue = debitNode.innerText ? parseFloat(debitNode.innerText) - inputAmount : -inputAmount;
        dispatch({ type: 'SET_FIELD', name, value: newDebitNodeValue.toFixed(2) });
      }
    },
  });

  const [, drop] = useDrop({
    accept: 'ValueBox',
    drop: () => inputRef,
  });

  drag(drop(dragNdropRef));

  const handleClick = () => {
    const inputAmount = getUserInput('Sett ny verdi', value);
    if (inputAmount) {
      dispatch({ type: 'SET_FIELD', name, value: inputAmount });
    }
  };

  const handleKeyUp = (e) => {
    if (e.key === 'Enter') {
      const inputAmount = getUserInput('Sett ny verdi', value);
      if (inputAmount) {
        dispatch({ type: 'SET_FIELD', name, value: inputAmount });
      }
    }
  };

  return (
    <div ref={dragNdropRef} style={{ opacity }}>
      <span
        className="box"
        role="textbox"
        tabIndex={0}
        ref={inputRef}
        data-name={name}
        onClick={() => handleClick()}
        onKeyUp={(e) => handleKeyUp(e)}
      >
        {value}
      </span>
    </div>
  );
};

Box.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Box;
