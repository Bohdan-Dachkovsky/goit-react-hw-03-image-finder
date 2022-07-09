import React, { Component } from 'react'
// import { v4 as uuidv4 } from 'uuid';
import Modal from './components/Modal/Modal'
import ImagineGallery from './components/ImagineGallery/ImagineGallery.jsx'
import Searchbar from './components/Searchbar/Searchbar'
import WatchProps from './components/Loader/Watch.jsx'
import './index.css'

export default class App extends Component {
  state = {
    pool: '',
    modalImages: {},
    showModal: true,
    isLoading: false,
  }
  loaderChange = (prevState) => {
    this.setState({ isLoading: !prevState })
  }
  // onChangeModal = () => {
  //   // onActive(this.state.showModal);
  //   this.setState((prevState) => {
  //     return { showModal: !prevState }
  //   })
  // }
  onLargeImg = ({ largeImageURL, tags }) => {
    this.setState({
      showModal: true,
      modalImages: { largeImageURL, tags },
    })
  }
  handlerSubmit = (pool) => {
    this.setState({ pool })
  }
  handlerActive = (showModal) => {
    this.setState({ showModal: !showModal })
  }

  onToggleModal = () => {
    // onActive(this.state.showModal);
    this.setState((prevState) => {
      return { showModal: !prevState }
    })
  }
  // componentDidMount() {
  //   window.addEventListener('keydown', (e) => {
  //     if (e.code === 'Escape') {
  //       this.onToggleModal()
  //     }
  //   })
  // }

  render() {
    const { isLoading } = this.state.isLoading
    const { showModal } = this.state
    // onActive={this.onChangeModal.bind(this)}
    return (
      <>
        <Searchbar onSubmit={this.handlerSubmit.bind(this)} />
        {showModal && <Modal onActive={this.onToggleModal.bind(this)} />}
        {isLoading ? (
          <WatchProps />
        ) : (
          <ImagineGallery
            searchName={this.state.pool}
            onLoader={this.loaderChange.bind(this)}
            onBox={this.handlerActive.bind(this)}
            onShow={this.onLargeImg.bind(this)}
          />
        )}
      </>
    )
  }
}
