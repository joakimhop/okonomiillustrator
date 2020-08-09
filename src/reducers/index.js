import { combineReducers } from 'redux';
import game from './game';
import gameServer from './gameServer';

export default combineReducers({
  game,
  gameServer,
});
