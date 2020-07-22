import Immutable from 'immutable';
import Actions from '@/actions';

const {
  action: actionTypes,
} = Actions.BASIC.LOGIN;

const initialState = Immutable.fromJS({
  loading: false,
  isLogin: true,
});

export default (state = initialState, action) => {
  switch (action.type) {
  case actionTypes.LOGIN:
    localStorage.setItem('login', true);
    return state
      .set('isLogin', true);
  case actionTypes.LOGOUT:
    localStorage.setItem('login', false);
    return state
      .set('isLogin', false);
  default:
    return state;
  }
};