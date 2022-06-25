import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import css from './popup.module.css';
export default class Modal extends Component {
  render() {
    return (
      <div id="popup" className={css.popup}>
        <div className={css.overlay}>
          <div className={css.formBody}>
            <img src="" alt="" loading="eager" />
          </div>
        </div>
      </div>
    );
  }
}
