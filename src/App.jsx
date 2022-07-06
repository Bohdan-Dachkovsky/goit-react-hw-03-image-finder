import React, { Component } from 'react';
// import { v4 as uuidv4 } from 'uuid';
import Modal from './components/Modal/Modal';
import ImagineGallery from './components/ImagineGallery/ImagineGallery.jsx';
import Searchbar from './components/Searchbar/Searchbar';
import WatchProps from './components/Loader/Watch.jsx';
import './index.css';

export default class App extends Component {
  state = {
    cats: '',
    isLoading: false,
  };
  loaderChange = prevState => {
    this.setState({ isLoading: !prevState });
  };
  handlerSubmit = cats => {
    this.setState({ cats });
  };

  render() {
    const { isLoading } = this.state.isLoading;
    return (
      <>
        <Searchbar onSubmit={this.handlerSubmit.bind(this)} />
        <Modal />
        {isLoading ? (
          <WatchProps />
        ) : (
          <ImagineGallery onLoader={this.loaderChange.bind(this)} />
        )}
      </>
    );
  }
}
