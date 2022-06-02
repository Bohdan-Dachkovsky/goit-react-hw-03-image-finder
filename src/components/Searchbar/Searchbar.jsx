import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import stylebar from './style-bar.module.css';
export default class Searchbar extends Component {
  state = {
    cats: '',
  };
  handleChange = e => {
    this.setState({ cats: e.curenTarger.value.toLowerCase() });
  };
  handleForm = () => {
    this.setState((cats: ''));
  };
  render() {
    return (
      <header class="searchbar">
        <form onSubmit={this.handleForm} onclass="form">
          <button type="submit" class="button">
            <span class="button-label">Search</span>
          </button>

          <input
            class="input"
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}
