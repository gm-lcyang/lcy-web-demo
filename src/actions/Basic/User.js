const THISACTION = 'USER' + '_';

const action = {
  SET: THISACTION + 'SET',
};

const set = params => dispatch => dispatch({
  type: action.SET,
  params,
});

export default {
  action,
  set,
};
