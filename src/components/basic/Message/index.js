import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import style from './style.module.less';

export default class ComponentsMessage extends React.Component {
  static propTypes = {
    data: ImmutablePropTypes.map.isRequired,
    type: PropTypes.string.isRequired,
    visible: PropTypes.bool.isRequired,
  }
  render() {
    return  (
      this.props.visible ?
        <div className={style.modal}>
          <div className={`${style.layout} ${style[this.props.type]}`}>
            <span className={style.title}>{this.props.data.get('title')}</span>
            <div className={style.content}>{this.props.data.get('content')}</div>
          </div>
        </div> : ''
    );
  }
}
