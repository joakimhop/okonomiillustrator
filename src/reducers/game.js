import createCookie from '../helpers/createSessionCookie';

const initialState = {
  /* finance */
  bank: '0',
  kundefordringer: '0',
  renter: '0',
  lan: '0',
  skatt: '0',
  /* stock */
  ravarelager: '0',
  verdiproduksjonsutstyrA: '0',
  produksjon: '0',
  montasje: '0',
  verdiproduksjonsutstyrB: '0',
  prosess: '0',
  ferdigvarelager: '0',
  /* costs */
  lonn: '0',
  leieravarelager: '0',
  leiearealprosessa: '0',
  leiearealprosessb: '0',
  leieferdigvarelager: '0',
  tappakunder: '0',
  salg_admin: '0',
  utviklingskostnader: '0',
  avskrivning: '0',
  /* commodityStock */
  ravareleverandor: '0',
  /* customer */
  ferdigvarer: '0',
  penger1kvartal: '0',
  penger2kvartal: '0',
  penger3kvartal: '0',
  penger4kvartal: '0',
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
