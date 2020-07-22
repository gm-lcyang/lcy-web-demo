import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import style from './style.module.less';

export default class ComponentsInput extends React.Component {
  static propTypes = {
    data: ImmutablePropTypes.list.isRequired,
    current: PropTypes.string.isRequired,
    currentData: ImmutablePropTypes.map.isRequired,
    send: PropTypes.func.isRequired,
    userData: ImmutablePropTypes.map.isRequired,
  }
  handleChange = e => {
    if (e.keyCode === 13 && !e.shiftKey) {
      this.props.send({
        num: this.props.data.findIndex(t => t.get('id') === this.props.current),
        data: this.props.userData.set('content', this.textarea.value),
      });
      setTimeout(() => this.textarea.value = '', 0);
    }
  }
  render() {
    return (
      <div className={`${style.layout} ${this.props.currentData.get('id') === this.props.current ? style.current : ''}`}>
        <textarea onKeyDown={e => this.handleChange(e)} ref={c => this.textarea = c} required placeholder="注：shift + 回车 可以换行" />
      </div>
    );
  }
}
