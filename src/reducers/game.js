import createCookie from '../helpers/createCookie';

const initialState = {
  bank: '0',
  kundefordringer: '0',
  renter: '0',
  lan: '0',
};

const game = (state = initialState, action) => {
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
