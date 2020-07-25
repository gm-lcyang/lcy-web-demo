const THISACTION = 'MESSAGE' + '_';

const action = {
  SHOW: THISACTION + 'SHOW',
  HIDE: THISACTION + 'HIDE',
};

const show = params => dispatch => dispatch({
  type: action.SHOW,
  params,
});

const hide = () => dispatch => dispatch({
  type: action.HIDE,
});

export default {
  action,
  show,
  hide,
};
