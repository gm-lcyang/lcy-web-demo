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
  handleSubmit = e => {
    e.preventDefault();
    this.props.send({
      num: this.props.data.findIndex(t => t.get('id') === this.props.current),
      data: this.props.userData.set('content', this.input.value),
    });
    this.input.value = '';
  }
  render() {
    return (
      <div className={`${style.layout} ${this.props.currentData.get('id') === this.props.current ? style.current : ''}`}>
        <form onSubmit={this.handleSubmit}>
          <input ref={c => this.input = c} placeholder="Type a message" required />
        </form>
      </div>
    );
  }
}
