import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import axios from 'axios';

export default class ImagineGalleryItem extends Component {
  state = { apiInfo: '' };

  getCatFoto = () => {
    fetch(
      'https://pixabay.com/api/?q=cat&page=1&key=26335917-be25fd704b1936d7f202ea389&image_type=photo&orientation=horizontal&per_page=12'
    )
      .then(response => {
        return response.json();
      })
      .then(function (jsonData) {
        return JSON.stringify(jsonData);
      })
      .then(data => this.setState({ apiInfo: data }));
  };

  render() {
    return (
      <div>
        {this.state.apiInfo &&
          this.state.apiInfo.map(item => <div> {item.img} </div>)}
      </div>
    );
  }
}
