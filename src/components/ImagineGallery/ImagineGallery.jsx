import React, { Component } from 'react';
import css from './gallery.module.css';
// import PropTypes from 'prop-types';
// import axios from 'axios';
import { getPosts } from '../../shared/services/post.js';
export default class ImagineGallery extends Component {
  state = {
    // apiInfo: '',
    items: [],
    error: null,
    page: 1,
    isLoading: false,
  };
  componentDidMount() {
    this.fetchPosts();
  }
  componentDidUpdate(prevProps, prevState) {
    const { page } = this.state;
    if (page > prevState.page) {
      this.fetchPosts();
    }
  }
  async fetchPosts() {
    const { page } = this.state;
    try {
      const data = await getPosts(page);
      this.setState(({ items }) => {
        return { items: [...items, ...data] };
      });
    } catch (error) {
      this.setState({ error: error });
    }
  }
  loadPage(prevState) {
    this.setState({ page: prevState.page + 1 });
  }

  render() {
    const { items, error, isLoading } = this.state;
    const { onLoader } = this.props;
    return (
      <div>
        {error && console.log('Виникла помилка, cпробуйте будь ласка пізніше')}
        {items &&
          items.map(({ id, imagineURL, tags }) => (
            <div className={css.box}>
              <li onClick={onLoader} key={id}>
                <img src={imagineURL} alt={tags} />
              </li>
            </div>
          ))}
        {!isLoading && items.length >= 9 && (
          <button onClick={this.loadPage}></button>
        )}
      </div>
    );
  }
}
