import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import axios from 'axios';

export default class ImagineGalleryItem extends Component {
  // state = {
  //   cats: [],
  //   err: null,
  // };

  // fetchNewCat() {
  //   axios
  //     .get('https://api.thecatapi.com/v1/images/search')
  //     .then(response => {
  //       console.log('Search complete!');
  //       console.log(response);
  //     })
  //     .catch(err => {
  //       console.log('Search failed!');
  //       console.log(err);
  //     });
  // }
  render() {
    return (
      <li>
        <button>Add cats</button>
        {/* {this.state.cats.map(cat => (
          <img> src = {cat.src}</img>
        ))} */}
      </li>
    );
  }
}
