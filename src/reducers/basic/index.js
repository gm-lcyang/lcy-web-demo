import { combineReducers } from 'redux-immutable';
import login from './login';
import user from './user';

export default combineReducers({
  login,
  user,
});
