import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import List from './list';
import style from './style.module.less';

export default class ComponentsRoomMessage extends React.Component {
  static propTypes = {
    data: ImmutablePropTypes.list.isRequired,
    current: PropTypes.string.isRequired,
    currentData: ImmutablePropTypes.map.isRequired,
    userData: ImmutablePropTypes.map.isRequired,
  }
  render() {
    return (
      <div className={`${style.layout} ${this.props.currentData.get('id') === this.props.current ? style.current : ''}`}>
        {
          this.props.currentData.get('data').map((t, i) => <List {...this.props} key={i} data={t} />)
        }
      </div>
    );
  }
}
