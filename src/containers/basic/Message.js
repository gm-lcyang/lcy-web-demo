import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import BaseComponent from '@/components/basic/BaseComponent';
import { connect } from 'react-redux';
import ThisIndex from '@/components/basic/Message';

class ContainersMessage extends BaseComponent {
  static propTypes = {
    data: ImmutablePropTypes.map.isRequired,
    type: PropTypes.string.isRequired,
    visible: PropTypes.bool.isRequired,
  }
  render() {
    return <ThisIndex {...this.props} />;
  }
}

const mapStateToProps = state => {
  const _this = state.getIn(['basic', 'message']);
  return {
    data: _this.get('data'),
    type: _this.get('type'),
    visible: _this.get('visible'),
  };
};

export default connect(mapStateToProps)(ContainersMessage);
