import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import styles from './ContactForm.module.css';
import bcss from './button.module.css';
export default class Button extends Component {
  render() {
    return (
      <>
        <button className={bcss.button} type="submit">
          Load more
        </button>
        <a href="#popup">Visit</a>
      </>
    );
  }
}
