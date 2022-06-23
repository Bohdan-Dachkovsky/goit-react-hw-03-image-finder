import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import axios from 'axios';

export default class ImagineGalleryItem extends Component {
  state = { apiInfo: '' };

  getCatFoto = () => {
    fetch(
      'https://pixabay.com/api/?key=26335917-be25fd704b1936d7f202ea389&q=cats&image_type=photo'
    )
      .then(res => res.json())
      .then(res => this.setState({ apiInfo: res.hits }));
    // .then(data => this.setState({ apiInfo: data }));
  };
  componentDidMount() {
    this.getCatFoto();
  }
  render() {
    return (
      <div>
        {this.state.apiInfo &&
          this.state.apiInfo.map(item => (
            <div>
              <li key={item.id}>
                <img src={item.webformatURL} alt={item.tags} />
              </li>
            </div>
          ))}
      </div>
    );
  }
}
