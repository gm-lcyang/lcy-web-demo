import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import style from './style.module.less';
import Search from './search';
import List from './list';
import Message from './message';
import Input from './input';

export default class ComponentsRoom extends React.Component {
  static propTypes = {
    data: ImmutablePropTypes.list.isRequired,
    loading: PropTypes.bool.isRequired,
    current: PropTypes.string.isRequired,
    filter: PropTypes.func.isRequired,
    add: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired,
    select: PropTypes.func.isRequired,
    userData: ImmutablePropTypes.map.isRequired,
    send: PropTypes.func.isRequired,
  }
  render() {
    return (
      <div className={style.layout}>
        <div className={style.left}>
          <Search {...this.props} />
          <div className={style.list}>
            <div className={style.tips}>注：房间按鼠标右键可以删除</div>
            {
              this.props.data.map((t, i) => <List {...this.props} key={i} currentData={t} />)
            }
          </div>
        </div>
        <div className={style.right}>
          <div className={style.message}>
            {
              this.props.data.map((t, i) => t.get('show') ? <Message {...this.props} key={i} currentData={t} /> : '')
            }
          </div>
          <div className={style.input}>
            {
              this.props.data.map((t, i) => t.get('show') ? <Input {...this.props} key={i} currentData={t} /> : '')
            }
          </div>
        </div>
      </div>
    );
  }
}
