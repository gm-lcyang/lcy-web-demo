import React from 'react';
import PropTypes from 'prop-types';
import BaseComponent from '@/components/basic/BaseComponent';
import { connect } from 'react-redux';
import { withRouter, Route } from 'react-router-dom';
import App from '@/components/basic/App';
import Login from './Login';
import Message from './Message';

class Root extends BaseComponent {
  static propTypes = {
    isLogin: PropTypes.bool.isRequired,
  }
  render() {
    return (
      <React.Fragment>
        <Message />
        {
          this.props.isLogin ?
            <Route path='/' component={App} /> :
            <Route path='/' component={Login} />
        }
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  store: ownProps.store,
  isLogin: state.getIn(['basic', 'login', 'isLogin']),
});

export default withRouter(connect(mapStateToProps)(Root));
