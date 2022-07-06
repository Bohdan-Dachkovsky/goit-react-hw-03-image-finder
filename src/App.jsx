import React, { Component } from 'react';
// import { v4 as uuidv4 } from 'uuid';
import Modal from './components/Modal/Modal';
import ImagineGallery from './components/ImagineGallery/ImagineGallery.jsx';
import Searchbar from './components/Searchbar/Searchbar';
import WatchProps from './components/Loader/Watch.jsx';
import './index.css';

export default class App extends Component {
  state = {
    pool: '',
    isLoading: false,
  };
  loaderChange = prevState => {
    this.setState({ isLoading: !prevState });
  };
  handlerSubmit = pool => {
    this.setState({ pool });
  };

  render() {
    const { isLoading } = this.state.isLoading;
    return (
      <>
        <Searchbar onSubmit={this.handlerSubmit.bind(this)} />
        <ToastContainer
          position="top-right"
          autoClose={3500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Modal />
        {isLoading ? (
          <WatchProps />
        ) : (
          <ImagineGallery
            searchName={this.state.pool}
            onLoader={this.loaderChange.bind(this)}
          />
        )}
      </>
    );
  }
}
