import React from 'react';
import PropTypes from 'prop-types';
import BaseComponent from '@/components/basic/BaseComponent';
import { connect } from 'react-redux';
import Actions from '@/actions';
import ThisIndex from '@/components/basic/Login';

class ContainersLogin extends BaseComponent {
  static propTypes = {
    login: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
    setLogin: PropTypes.func.isRequired,
  }
  render() {
    return <ThisIndex {...this.props} />;
  }
}

const methods = Actions.BASIC.LOGIN;

const mapDispatchToProps = {
  login: methods.login,
  register: methods.register,
  setLogin: methods.setLogin,
};

export default connect(null, mapDispatchToProps)(ContainersLogin);
