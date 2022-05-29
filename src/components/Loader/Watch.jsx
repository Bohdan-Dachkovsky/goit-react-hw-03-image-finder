import React, { Component } from 'react';
import style from './react-spinner-loader.module.css';
export default class WatchProps extends Component {
  render() {
    return (
      <div className={style.spinnerContainer}>
        <div className={style.loadingSpinner}></div>
      </div>
    );
  }
}
