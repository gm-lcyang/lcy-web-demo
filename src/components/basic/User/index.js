import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import style from './style.module.less';

export default class ComponentsUser extends React.Component {
  static propTypes = {
    userList: ImmutablePropTypes.list.isRequired,
    set: PropTypes.func.isRequired,
    setLogout: PropTypes.func.isRequired,
  }
  render() {
    return (
      <div className={style.layout}>
        您现在是：<select onChange={e => this.props.set(this.props.userList.findIndex(t => t.get('id') === e.target.value))}>
          {
            this.props.userList.map((t, i) => <option key={i} value={t.get('id')}>{t.get('name')}</option>)
          }
        </select>
        <button onClick={this.props.setLogout}>登出</button>
      </div>
    );
  }
}
