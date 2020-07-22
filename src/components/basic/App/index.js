import React from 'react';
import style from './style.module.less';
import Room from '@/containers/Room';
import '@/style/index.less';

export default class ComponentsApp extends React.Component {
  render() {
    return (
      <div className={style.layout}>
        <Room />
      </div>
    );
  }
}
