import calculateWinner from '../helpers/calculateWinner';

const game = (state = {
  history: [{ squares: Array(9).fill(null) }],
  stepNumber: 0,
}, action) => {
  switch (action.type) {
    case 'ADD_MOVE':
      const updatedHistory = state.history.slice(0, action.step + 1);
      const current = updatedHistory[updatedHistory.length - 1];
      const squares = current.squares.slice();
      if (calculateWinner(squares) || squares[action.square]) {
        return state;
      }
      squares[action.square] = (action.step % 2) === 0 ? 'X' : 'O';
      return {
        history: updatedHistory.concat([{
          squares,
        }]),
        stepNumber: updatedHistory.length,
      };
    case 'JUMP_TO':
      return {
        ...state,
        stepNumber: action.step,
      };
    default:
      return state;
  }
};

export default game;
