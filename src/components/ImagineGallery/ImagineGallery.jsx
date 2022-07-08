import React, { Component } from 'react';
import css from './gallery.module.css';
// import PropTypes from 'prop-types';
import axios from 'axios';
// import { getPosts } from '../../shared/services/post.js';
export default class ImagineGallery extends Component {
  state = {
    // apiInfo: '',
    items: [],
    error: null,
    page: 1,
    isLoading: false,
  };
  componentDidMount() {
    axios
      .get(
        'https://pixabay.com/api/?key=26335917-be25fd704b1936d7f202ea389&q=pool&image_type=photo'
      )
      .then(({ data }) => {
        this.setState({ items: data });
      })
      .catch(error => console.log(error.messages));
  }
  componentDidUpdate(prevProps, prevState) {
    const { page } = this.state;
    if (page > prevState.page) {
      // this.fetchPosts();
    }
  }

  //  fetchPosts() {
  //   const { page, items } = this.state;
  //   // let { search } = this.props.searchName;
  //   try {
  //     const data = await getPosts(page);
  //     this.setState(({ items }) => {
  //       return { items: [...items, ...data] };
  //     });
  //   } catch (error) {
  //     this.setState({ error: error });
  //   }
  // }

  // loadPage(prevState) {
  //   this.setState({ page: prevState.page + 1 });
  // }

  render() {
    const { items, error, isLoading } = this.state;
    const { onLoader } = this.props;
    const photos = items.map(({ id, imagineURL, tags }) => (
      <div className={css.box}>
        <li onClick={onLoader} key={id}>
          <img src={imagineURL} alt={tags} />
        </li>
      </div>
    ));
    return (
      <>
        {error && console.log('Виникла помилка, cпробуйте будь ласка пізніше')}
        {items && { photos }}

        {!isLoading && items.length >= 9 && (
          <button onClick={this.loadPage}></button>
        )}
      </>
    );
  }
}
