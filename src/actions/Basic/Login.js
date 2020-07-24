import { transToThunk } from '@/util';

const thunk = {
  login: transToThunk('LOGIN'),
  logout: transToThunk('LOGOUT'),
  register: transToThunk('register'),
};

const login = params => dispatch => dispatch({
  LOGIN: {
    types: Object.values(thunk.login),
    url: 'v1/login',
    payload: true,
    params,
  }
});

const logout = () => dispatch => dispatch({
  LOGOUT: {
    types: Object.values(thunk.logout),
    url: 'v1/logout',
  }
});

const register = params => dispatch => dispatch({
  REGISTER: {
    types: Object.values(thunk.register),
    url: 'v1/register',
    payload: true,
    params,
  }
});

const action = {
  SET_LOGIN: 'LOGIN_SET_LOGIN',
  SET_LOGOUT: 'LOGIN_SET_LOGOUT',
};

const setLogin = params => dispatch => dispatch({
  type: action.SET_LOGIN,
  params,
});


const setLogout = params => dispatch => dispatch({
  type: action.SET_LOGOUT,
  params,
});

export default {
  thunk,
  login,
  logout,
  action,
  register,
  setLogin,
  setLogout,
};
