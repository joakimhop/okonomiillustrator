import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useDrag, useDrop } from 'react-dnd';
import PropTypes from 'prop-types';
import { setGameDataField } from '../actions/game';

const Box = ({ name, title, redBorder }) => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.game.data[name]);
  const dragNdropRef = useRef(null);
  const inputRef = useRef();

  const getUserInput = (text, defaultValue) => {
    const input = prompt(text, defaultValue);
    if (!input) return null;
    const inputAmount = parseInt(input, 10);
    if (isNaN(inputAmount)) return null;
    return inputAmount;
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
        const creditNodeNewValue = creditNode.innerText
          ? parseInt(creditNode.innerText, 10) + inputAmount
          : inputAmount;
        dispatch(setGameDataField(creditNode.dataset.name, creditNodeNewValue));

        const debitNode = inputRef.current;
        const newDebitNodeValue = debitNode.innerText
          ? parseInt(debitNode.innerText, 10) - inputAmount
          : -inputAmount;
        dispatch(setGameDataField(name, newDebitNodeValue));
      }
    },
  });

  const [, drop] = useDrop({
    accept: 'ValueBox',
    drop: () => inputRef,
  });

  drag(drop(dragNdropRef));

  const handleClick = (e) => {
    e.preventDefault();
    const inputAmount = getUserInput('Sett ny verdi', value);
    if (inputAmount || inputAmount === 0) {
      dispatch(setGameDataField(name, inputAmount));
    }
  };

  const handleKeyUp = (e) => {
    if (e.key === 'Enter') {
      const inputAmount = getUserInput('Sett ny verdi', value);
      if (inputAmount || inputAmount === 0) {
        dispatch(setGameDataField(name, inputAmount));
      }
    }
  };

  return (
    <div>
      <span className="box-title">{title}</span>
      <div ref={dragNdropRef} style={{ opacity }}>
        <div
          className={`box ${redBorder ? 'box-red-border' : ''}`}
          role="textbox"
          tabIndex={0}
          ref={inputRef}
          data-name={name}
          onKeyUp={(e) => handleKeyUp(e)}
          onContextMenu={(e) => handleClick(e)}
        >
          {value}
        </div>
      </div>
    </div>
  );
};

Box.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  redBorder: PropTypes.bool,
};

Box.defaultProps = {
  redBorder: false,
};

export default Box;
