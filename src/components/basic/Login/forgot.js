import React from 'react';
import PropTypes from 'prop-types';
import style from './style.module.less';
import { createForm } from 'rc-form';

class ComponentsLogin extends React.Component {
  static propTypes = {
    login: PropTypes.func.isRequired,
  };
  submit = () => {
    this.props.form.validateFields((error, value) => {
      console.log(error, value);
      if (!error) {
        this.props.login({json_data: JSON.stringify(value)});
      }
    });
  }
  err = name => this.props.form.getFieldError(name) && <div className={style.error}>{this.props.form.getFieldError(name).join(',')}</div>
  render() {
    const { getFieldDecorator, getFieldsError } = this.props.form;
    return (
      <div className={style.layout}>
        <div className={style.field}>
          邮箱:
          {getFieldDecorator('email', {
            rules:[{
              required: true,
              message: '必填'
            }, {
              type: 'email',
              message: '邮箱格式不正确'
            }]
          })(<input />)}
          {this.err('email')}
        </div>
        <button onClick={this.submit} className={`${style.primary} ${!Object.values(getFieldsError()).filter(t => t).length ? '' : style.error}`}>取回密码</button>
        <button onClick={() => this.props.changeType('Login')}>返回登录</button>
      </div>
    );
  }
}

export default createForm()(ComponentsLogin);