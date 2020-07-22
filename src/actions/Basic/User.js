const THISACTION = 'USER' + '_';

const action = {
  SET: THISACTION + 'SET',
};

const set = num => dispatch => dispatch({
  type: action.SET,
  num,
});

export default {
  action,
  set,
};
