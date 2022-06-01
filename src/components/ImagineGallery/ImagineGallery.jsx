import React, { Component } from 'react';
// import PropTypes from 'prop-types';

export default class ImagineGallery extends Component {
  render() {
    return (
      <ul class="gallery" type="submit">
        {this.props.children}
      </ul>
    );
  }
}
