import Immutable from 'immutable';
import Actions from '@/actions';

const {
  action: actionTypes,
} = Actions.BASIC.USER;

const initialState = Immutable.fromJS({
  data: {},
  loading: false,
  userList: [{
    id: 'p0',
    name: 'admin',
  }, {
    id: 'p1',
    name: 'Joe',
  }, {
    id: 'p2',
    name: 'Bob',
  }, {
    id: 'p3',
    name: 'Mike',
  }]
});

export default (state = initialState, action) => {
  switch (action.type) {
  case actionTypes.SET:
    return state
      .set('data', state.getIn(['userList', action.num]));
  default:
    return state;
  }
};