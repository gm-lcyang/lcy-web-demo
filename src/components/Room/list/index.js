import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import style from './style.module.less';

export default class ComponentsRoomMessageList extends React.Component {
  static propTypes = {
    data: ImmutablePropTypes.list.isRequired,
    current: PropTypes.string.isRequired,
    currentData: ImmutablePropTypes.map.isRequired,
    remove: PropTypes.func.isRequired,
  }
  render() {
    const current = this.props.currentData.get('id');
    const filter = this.props.currentData.get('filter');
    return (
      <div className={`${style.layout} ${this.props.current === current ? style.current : ''} ${filter !== false ? style.filter : ''}`}
        onClick={() => this.props.select({
          id: current,
          num: this.props.data.findIndex(t => t.get('id') === current),
        })}
        onContextMenu={e => { e.preventDefault(); this.props.remove(this.props.data.findIndex(t => t.get('id') === current)); }}
      >
        <div className={style.name}>{this.props.currentData.get('name')}</div>
      </div>
    );
  }
}
