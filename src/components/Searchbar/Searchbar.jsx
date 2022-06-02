import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import stylebar from './style-bar.module.css';
export default class Searchbar extends Component {
  render() {
    return (
      <header className={stylebar.header}>
        <form className={stylebar.sentform}>
          <button type="submit" className={stylebar.button}>
            <span class="button-label">Search</span>
          </button>

          <input
            className={stylebar.input}
            type="text"
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
