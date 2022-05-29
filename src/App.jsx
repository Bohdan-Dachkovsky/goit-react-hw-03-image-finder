import React, { Component } from 'react';
// import { v4 as uuidv4 } from 'uuid';
// import  from './ContactList/ContactList';
import Button from 'components/Button/Button';
import ImagineGallery from 'components/ImagineGallery/ImagineGallery';
import ImagineGalleryItem from 'components/ImagineGalleryItem/ImagineGalleryItem';
// import Loader from 'components/Loader/Loader';
import Modal from 'components/Modal/Modal';
import Searchbar from 'components/Searchbar/Searchbar';
import 'index.css';
class App extends Component {
  render() {
    return (
      <div>
        <Button />
        <ImagineGallery />
        <ImagineGalleryItem />
        {/* {isLoading ? <loader /> : renderUser} */}
        <Modal />
        <Searchbar />
      </div>
    );
  }
}
export default App;
