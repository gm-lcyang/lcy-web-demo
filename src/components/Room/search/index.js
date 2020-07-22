import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import style from './style.module.less';

export default class ComponentsSearch extends React.Component {
  static propTypes = {
    data: ImmutablePropTypes.list.isRequired,
    filter: PropTypes.func.isRequired,
    add: PropTypes.func.isRequired,
  }
  handleChange = e => {
    const v = e.target.value;
    if (e.keyCode === 13) {
      if (this.props.data.findIndex(t => t.get('name')) === v > 0 || v.length > 10 || v.length < 2 ) {
        alert('房间名不能大于10个字，也不能少于2个字');
        return false;
      }
      this.props.add(v);
      e.target.value = '';
      setTimeout(() => this.props.filter(''), 0);
    } else {
      this.props.filter(v);
    }
  }
  render() {
    return (
      <div className={style.layout}>
        <input onKeyUp={this.handleChange} placeholder="输入搜索房间, 回车增加房间" />
      </div>
    );
  }
}
