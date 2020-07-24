import React from 'react';
import PropTypes from 'prop-types';
import Login from './login';
import Forgot from './forgot';
import Register from './register';
import style from './style.module.less';

export default class ComponentsLogin extends React.Component {
  static components ={
    Login,
    Forgot,
    Register,
  }
  static propTypes = {
    login: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
    setLogin: PropTypes.func.isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {
      type: 'Login',
    };
  }
  customComponent() {
    const SpecificComponent = ComponentsLogin.components[this.state.type];
    return <SpecificComponent {...this.props} changeType={this.changeType} />;
  }
  changeType = type => this.setState({ type });
  render() {
    return (
      <div className={style.box}>
        <textarea id={'_csrf_'} placeholder={'输入csrf'} defaultValue={'YSMdJD0YFBVtIHgnLF4aIg8oAyEnHEAM9yqeWSglXE6jsmCkJpYeAp1x'} />
        {
          this.customComponent()
        }
        <button onClick={this.props.setLogin}>游客登录</button>
      </div>
    );
  }
}
