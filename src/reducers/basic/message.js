import Immutable from 'immutable';
import Actions from '@/actions';

console.log('Actions.BASIC', Actions.BASIC);
const {
  action: actionTypes,
} = Actions.BASIC.MESSAGE;

const initialState = Immutable.fromJS({
  data: {},
  type: '',
  visible: false,
});

export default (state = initialState, action) => {
  switch (action.type) {
  case actionTypes.SHOW:
    return state
      .set('data', Immutable.fromJS(action.params.data))
      .set('type', action.params.type)
      .set('visible', true);
  case actionTypes.HIDE:
    return state
      .set('data', initialState.get('data'))
      .set('type', initialState.get('type'))
      .set('visible', false);
  default:
    return state;
  }
};