const THISACTION = 'LOGIN' + '_';

const action = {
  LOGIN: THISACTION + 'LOGIN',
  LOGOUT: THISACTION + 'LOGOUT',
};

const login = () => dispatch => dispatch({
  type: action.LOGIN,
});

const logout = () => dispatch => dispatch({
  type: action.LOGOUT,
});

export default {
  action,
  login,
  logout,
};
