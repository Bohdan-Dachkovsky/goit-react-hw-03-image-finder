import React, { Component } from 'react'
// import { v4 as uuidv4 } from 'uuid';
import Modal from './components/Modal/Modal'
import ImagineGallery from './components/ImagineGallery/ImagineGallery.jsx'
import Searchbar from './components/Searchbar/Searchbar'
import WatchProps from './components/Loader/Watch.jsx'
import './index.css'
import axios from 'axios'
export default class App extends Component {
  state = {
    pool: '',
    modalImages: {},
    showModal: false,
    isLoading: false,
    items: [],
    error: null,
    page: 6,
    isLoading: false,
  }
  loaderChange = (prevState) => {
    this.setState({ isLoading: !prevState })
  }

  onLargeImg = ({ largeImageURL, tags }) => {
    this.setState({
      showModal: true,
      modalImages: { largeImageURL, tags },
    })
  }
  handlerSubmit = (pool) => {
    this.setState({ pool })
  }
  handlerActive = () => {
    this.setState((showModal) => ({ showModal: !showModal }))
  }

  onToggleModal = () => {
    this.setState((prevState) => ({ showModal: !prevState }))
  }

  componentDidMount() {
    const { page } = this.state
    axios
      .get(
        `https://pixabay.com/api/?key=26335917-be25fd704b1936d7f202ea389&q=pool&page=${page}&per_page=12&image_type=photo`,
      )
      .then(({ data }) => {
        console.log(data)
        this.setState({ items: data.hits })
      })
      .catch((error) => console.log(error.messages))
    window.addEventListener('keydown', (e) => {
      if (e.code === 'Escape') {
        this.onToggleModal()
      }
    })
  }
  componentDidUpdate(prevProps, prevState) {
    const searchName = this.state.pool
    const { page } = this.state

    console.log(page)
    if (page !== prevState.page) {
      axios
        .get(
          `https://pixabay.com/api/?key=26335917-be25fd704b1936d7f202ea389&q=${searchName}&page=${page}&per_page=12&image_type=photo`,
        )
        .then(({ data }) => {
          console.log(data)
          this.setState({ items: data.hits })
        })
        .catch((error) => this.setState({ error: error.message }))
    }
  }
  loadPage = (prevState) => {
    this.setState({ page: prevState.page + 1 })
  }
  render() {
    const { items, showModal, error, isLoading } = this.state

    return (
      <>
        <Searchbar onSubmit={this.handlerSubmit} />
        {showModal && <Modal onActive={this.onToggleModal} />}
        {isLoading ? (
          <WatchProps />
        ) : (
          <ImagineGallery
            items={items}
            error={error}
            onLoader={this.loaderChange}
            onBox={this.handlerActive}
            onShow={this.onLargeImg}
          />
        )}
      </>
    )
  }
}
