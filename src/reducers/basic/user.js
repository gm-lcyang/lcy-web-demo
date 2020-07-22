import Immutable from 'immutable';
import Actions from '@/actions';

const {
  action: actionTypes,
} = Actions.BASIC.USER;

const initialState = Immutable.fromJS({
  data: {
    id: 'p0',
    name: 'admin',
  },
  loading: false,
});

export default (state = initialState, action) => {
  switch (action.type) {
  case actionTypes.SET:
    return state
      .set('data', action.params);
  default:
    return state;
  }
};