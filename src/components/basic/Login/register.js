import React from 'react';
import PropTypes from 'prop-types';
import style from './style.module.less';
import { createForm } from 'rc-form';

class ComponentsRegister extends React.Component {
  static propTypes = {
    register: PropTypes.func.isRequired,
  };
  submit = () => {
    this.props.form.validateFields((error, value) => {
      console.log(error, value);
      if (!error) {
        this.props.register({json_data: JSON.stringify(value)});
      }
    });
  }
  handleConfirmPassword(rule, value, callback) {
    const { getFieldValue } = this.props.form;
    if (value && value !== getFieldValue('pass')) {
      callback('两次输入不一致！');
    }
    callback();
  }
  err = name => this.props.form.getFieldError(name) && <div className={style.error}>{this.props.form.getFieldError(name).join(',')}</div>
  render() {
    const { getFieldDecorator, getFieldsError } = this.props.form;
    return (
      <div className={style.layout}>
        <div className={style.field}>
          名称:
          {getFieldDecorator('name', {
            rules:[{
              required: true,
              message: '必填'
            }, {
              min: 2,
              message: '不能小于2个字'
            }]
          })(<input />)}
          {this.err('name')}
        </div>
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
        <div className={style.field}>
          密码:
          {getFieldDecorator('pass', {
            rules:[{
              required: true,
              message: '必填',
            }]
          })(<input type={'password'}/>)}
          {this.err('pass')}
        </div>
        <div className={style.field}>
          确认密码:
          {getFieldDecorator('confirmPass', {
            rules:[{
              required: true,
              message: '必填',
            }, {
              validator: this.handleConfirmPassword.bind(this),
            }]
          })(<input type={'password'}/>)}
          {this.err('confirmPass')}
        </div>
        <button onClick={this.submit} className={`${style.primary} ${!Object.values(getFieldsError()).filter(t => t).length ? '' : style.error}`}>注册</button>
        <button onClick={() => this.props.changeType('Login')}>返回登录</button>
      </div>
    );
  }
}

export default createForm()(ComponentsRegister);