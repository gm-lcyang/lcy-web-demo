import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import BaseComponent from '@/components/basic/BaseComponent';
import { connect } from 'react-redux';
import Actions from '@/actions';
import ThisIndex from '@/components/basic/User';

class ContainersUser extends BaseComponent {
  static propTypes = {
    data: ImmutablePropTypes.map.isRequired,
    loading: PropTypes.bool.isRequired,
    userList: ImmutablePropTypes.list.isRequired,
    set: PropTypes.func.isRequired,
    setLogout: PropTypes.func.isRequired,
  }
  render() {
    return <ThisIndex {...this.props} />;
  }
}

const mapStateToProps = state => {
  const _this = state.getIn(['basic', 'user']);
  return {
    data: _this.get('data'),
    loading: _this.get('loading'),
    userList: _this.get('userList'),
  };
};

const {
  BASIC: {
    USER: methods,
    LOGIN: loginMethods,
  }
} = Actions;

const mapDispatchToProps = {
  set: methods.set,
  setLogout: loginMethods.setLogout,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContainersUser);
