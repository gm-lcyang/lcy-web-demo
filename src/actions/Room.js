const THISACTION = 'ROOM' + '_';

const action = {
  FILTER: THISACTION + 'FILTER',
  ADD: THISACTION + 'ADD',
  REMOVE: THISACTION + 'REMOVE',
  SELECT: THISACTION + 'SELECT',
  SEND: THISACTION + 'SEND',
};

const filter = name => dispatch => dispatch({
  type: action.FILTER,
  name,
});

const add = name => dispatch => dispatch({
  type: action.ADD,
  name,
});

const remove = num => dispatch => dispatch({
  type: action.REMOVE,
  num,
});

const select = params => dispatch => dispatch({
  type: action.SELECT,
  params,
});

const send = params => dispatch => dispatch({
  type: action.SEND,
  params,
});

export default {
  action,
  add,
  remove,
  filter,
  select,
  send,
};
