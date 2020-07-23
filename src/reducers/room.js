import Immutable from 'immutable';
import { combineReducers } from 'redux-immutable';
import Actions from '@/actions';
import { data as arr } from '@/publicData';

const {
  action: actionTypes,
} = Actions.ROOM;

const initialState = Immutable.fromJS({
  data: arr,
  loading: false,
  current: '',
  i: arr.length,
});

const data = (state = initialState, action) => {
  switch (action.type) {
  case actionTypes.FILTER:
    return state
      .update('data', val => val.map(t => t.set('filter', t.get('name').search(action.name) > -1)));
  case actionTypes.ADD:
    return state
      .update('data', val => val.push(Immutable.fromJS({ id: 'r' + state.get('i'), name: action.name, data: []})))
      .set('i', state.get('i') + 1);
  case actionTypes.REMOVE:
    return state
      .removeIn(['data', action.num]);
  case actionTypes.SELECT:
    return state
      .setIn(['data', action.params.num, 'show'], true)
      .set('current', action.params.id);
  case actionTypes.SEND:
    return state
      .updateIn(['data', action.params.num, 'data'], val => val.push(action.params.data));
  default:
    return state;
  }
};

export default combineReducers({
  data,
});