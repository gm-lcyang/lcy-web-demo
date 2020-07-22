import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import BaseComponent from '@/components/basic/BaseComponent';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Actions from '@/actions';
import ThisIndex from '@/components/Room';

class ContainersRoom extends BaseComponent {
  static propTypes = {
    data: ImmutablePropTypes.list.isRequired,
    loading: PropTypes.bool.isRequired,
    current: PropTypes.string.isRequired,
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
  select: methods.select,
  send: methods.send,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ContainersRoom));
