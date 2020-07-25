import { combineReducers } from 'redux-immutable';
import login from './login';
import user from './user';
import message from './message';

export default combineReducers({
  login,
  user,
  message,
});
