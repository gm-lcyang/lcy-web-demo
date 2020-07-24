import Immutable from 'immutable';
import Actions from '@/actions';

const {
  action: actionTypes,
  thunk: thunkTypes,
} = Actions.BASIC.LOGIN;

const initialState = Immutable.fromJS({
  loading: false,
  isLogin: localStorage.getItem('login') === 'true' ? true : false
});

export default (state = initialState, action) => {
  switch (action.type) {
  case thunkTypes.login.REQUESTTYPE:
    return state
      .set('loading', true);
  case thunkTypes.login.SUCCESSTYPE:
    localStorage.setItem('login', true);
    return state
      .set('loading', false)
      .set('isLogin', true);
  case thunkTypes.login.FAILURETYPE:
    return state
      .set('loading', false);
  case thunkTypes.logout.REQUESTTYPE:
    return state
      .set('loading', true);
  case thunkTypes.logout.SUCCESSTYPE:
    localStorage.removeItem('login');
    return state
      .set('loading', false)
      .set('isLogin', false);
  case thunkTypes.logout.FAILURETYPE:
    return state;
  case actionTypes.SET_LOGIN:
    localStorage.setItem('login', true);
    return state
      .set('loading', false)
      .set('isLogin', true);
  case actionTypes.SET_LOGOUT:
    localStorage.removeItem('login');
    return state
      .set('loading', false)
      .set('isLogin', false);
  default:
    return state;
  }
};