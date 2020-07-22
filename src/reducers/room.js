import Immutable from 'immutable';
import { combineReducers } from 'redux-immutable';
import Actions from '@/actions';

const {
  action: actionTypes,
} = Actions.ROOM;

const initialState = Immutable.fromJS({
  data: [{
    id: 'r1',
    name: '房间1',
    data: [{
      id: 'p1',
      name: 'bob',
      content: 'hello',
    }, {
      id: 'p2',
      name: 'joe',
      content: 'hi',
    }],
  },
  {
    id: 'r2',
    name: '房间2',
    data: [],
  },
  {
    id: 'r3',
    name: '房间3',
    data: [{
      id: 'p1',
      name: 'bob',
      content: '你好',
    }, {
      id: 'p2',
      name: 'joe',
      content: 'welcome',
    }],
  },
  {
    id: 'r4',
    name: '房间4',
    data: [{
      id: 'p1',
      name: 'bob',
      content: '哈哈哈',
    }],
  },
  {
    id: 'r5',
    name: '房间5',
    data: [],
  },
  {
    id: 'r6',
    name: '房间6',
    data: [],
  }],
  loading: false,
  current: '',
});

const data = (state = initialState, action) => {
  switch (action.type) {
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