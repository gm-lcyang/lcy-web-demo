const THISACTION = 'ROOM' + '_';

const action = {
  SELECT: THISACTION + 'SELECT',
  SEND: THISACTION + 'SEND',
};

const select = params => dispatch => dispatch({
  type: action.SELECT,
  params
});

const send = params => dispatch => dispatch({
  type: action.SEND,
  params
});

export default {
  action,
  select,
  send,
};
