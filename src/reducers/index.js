import { combineReducers } from 'redux-immutable';
import basic from './basic';
import room from './room';

export default combineReducers({
  basic,
  room,
});
