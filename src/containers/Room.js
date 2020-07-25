import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import BaseComponent from '@/components/basic/BaseComponent';
import { connect } from 'react-redux';
import Actions from '@/actions';
import ThisIndex from '@/components/Room';

class ContainersRoom extends BaseComponent {
  static propTypes = {
    data: ImmutablePropTypes.list.isRequired,
    loading: PropTypes.bool.isRequired,
    current: PropTypes.string.isRequired,
    filter: PropTypes.func.isRequired,
    add: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired,
    select: PropTypes.func.isRequired,
    send: PropTypes.func.isRequired,
    userData: ImmutablePropTypes.map.isRequired,
  }
  render() {
    return <ThisIndex {...this.props} />;
  }
}

const mapStateToProps = state => {
  const _this = state.getIn(['room', 'data']);
  const user = state.getIn(['basic', 'user']);
  return {
    data: _this.get('data'),
    loading: _this.get('loading'),
    current: _this.get('current'),
    userData: user.get('data'),
  };
};

const methods = Actions.ROOM;

const mapDispatchToProps = {
  filter: methods.filter,
  add: methods.add,
  remove: methods.remove,
  select: methods.select,
  send: methods.send,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContainersRoom);
