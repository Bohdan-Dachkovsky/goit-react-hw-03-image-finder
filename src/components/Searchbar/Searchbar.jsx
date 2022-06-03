import React, { Component } from 'react';

// import PropTypes from 'prop-types';
import stylebar from './style-bar.module.css';
export default class Searchbar extends Component {
  state = {
    cats: '',
  };
  handleChange = target => {
    const { name, value } = target;
    this.setState({
      [name]: value.toLowerCase(),
    });
  };
  handleForm = event => {
    event.preventDefault();

    if (this.state.cats === '') {
      alert('Коти відсутні!');
      return;
    }
    this.props.onSubmit(this.state.cats);
    this.setState({ cats: '' });
  };
  render() {
    const { cats } = this.state;
    const { handleForm, handleChange } = this;
    return (
      <header className={stylebar.searchbar}>
        <form onSubmit={handleForm} className={stylebar.form}>
          <button type="submit" className={stylebar.button}>
            <span className={stylebar.buttonLabel}>Search</span>
          </button>

          <input
            className={stylebar.input}
            type="text"
            name="cats"
            value={cats}
            placeholder="Search images and photos"
            onChange={handleChange}
          />
        </form>
      </header>
    );
  }
}
