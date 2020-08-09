import axios from 'axios';

const initialGameData = {
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

const gameServer = (state = { groupId: 'blue', loading: false, data: {} }, action) => {
  switch (action.type) {
    case 'GET_GAME_DATA':
      return {
        ...state,
        loading: true,
        data: {},
      };
    case 'GET_GAME_DATA_SUCCESS':
      return {
        ...state,
        loading: false,
        data: {
          ...initialGameData,
          ...action.payload.data.item,
        },
      };
    case 'SET_GAME_DATA_FIELD':
      axios.post('https://us-central1-okonomisimulator.cloudfunctions.net/setGameDataField', {
        id: state.groupId,
        name: action.name,
        value: action.value,
      })
        .then(() => ({
          ...state,
          data: {
            ...state.data,
            [action.name]: action.value,
          },
        }))
        .catch(() => state);
      return {
        ...state,
        data: {
          ...state.data,
          [action.name]: action.value,
        },
      };
    default:
      return state;
  }
};

export default gameServer;
