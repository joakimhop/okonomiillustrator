import React, { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';

const Box = () => {
  const dragNdropRef = useRef(null);
  const inputRef = useRef();
  const [{ opacity }, drag] = useDrag({
    item: { type: 'ValueBox' },
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.5 : 1,
    }),
    end: (item, monitor) => {
      if (monitor.didDrop()) {
        const droppedInputRef = monitor.getDropResult();
        if (droppedInputRef.current === inputRef.current) return;
        const input = prompt('Hvor mye?', '0');
        const inputAmount = parseInt(input, 10);
        if (isNaN(inputAmount)) return;

        const droppedNode = droppedInputRef.current;
        droppedNode.value = droppedNode.value ? parseInt(droppedNode.value, 10) + inputAmount : inputAmount;

        const node = inputRef.current;
        node.value = node.value ? parseInt(node.value, 10) - inputAmount : -inputAmount;
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
      <input type="tel" name="stock" ref={inputRef} />
    </div>
  );
};

export default Box;
