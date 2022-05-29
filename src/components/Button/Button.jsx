import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import styles from './ContactForm.module.css';
import bcss from './button.module.css';
export default class Button extends Component {
  render() {
    return (
      <button className={bcss.utton} type="submit">
        Add contact
      </button>
    );
  }
}
