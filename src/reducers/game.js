import createCookie from '../helpers/createCookie';

const game = (state = {}, action) => {
  switch (action.type) {
    case 'SET_FIELD':
      const newState = {
        ...state,
        [action.name]: action.value,
      };
      createCookie(newState);
      return newState;
    case 'INIT':
      return action.data;
    default:
      return state;
  }
};

export default game;
