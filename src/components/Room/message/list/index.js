import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import style from './style.module.less';

export default class ComponentsRoomMessageList extends React.Component {
  static propTypes = {
    data: ImmutablePropTypes.map.isRequired,
    current: PropTypes.string.isRequired,
    userData: ImmutablePropTypes.map.isRequired,
  }
  msg = name => 
    <div className={`${style.layout} ${name ? '' : style.self}`}>
      {name}
      <div className={style.content}>{this.props.data.get('content')}</div>
    </div>
  render() {
    const isSelf = this.props.userData.get('id') === this.props.data.get('id');
    return (
      this.msg(
        isSelf ? '' : <div className={style.name}>{this.props.data.get('name')}</div>
      )
    );
  }
}
