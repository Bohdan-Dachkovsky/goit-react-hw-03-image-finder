import React, { Component } from 'react';
// import { v4 as uuidv4 } from 'uuid';
import Modal from 'components/Modal/Modal';
import ImagineGallery from './components/ImagineGallery/ImagineGallery.jsx';
// import ImagineGalleryItem from 'components/ImagineGalleryItem/ImagineGalleryItem';
import Searchbar from 'components/Searchbar/Searchbar';
import './index.css';

export default class App extends Component {
  render() {
    return (
      <div>
        <Searchbar />
        <ImagineGallery></ImagineGallery>
        <Modal />
      </div>
    );
  }
}
