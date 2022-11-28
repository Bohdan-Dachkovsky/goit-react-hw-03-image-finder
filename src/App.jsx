import React, { Component } from 'react'
// import { v4 as uuidv4 } from 'uuid';
import Modal from './components/Modal/Modal'
import ImagineGallery from './components/ImagineGallery/ImagineGallery.jsx'
import Searchbar from './components/Searchbar/Searchbar'
// import WatchProps from './components/Loader/Watch.jsx'
import ClipLoader from 'react-spinners/ClipLoader'
import Button from './components/Button/Button.jsx'
import './index.css'
import axios from 'axios'

const override = {
  display: 'block',
  margin: '0 auto',
  borderColor: 'red',
}

export default class App extends Component {
  state = {
    pool: '',
    modalImages: {},
    showModal: false,
    isLoading: false,
    items: [],
    error: null,
    page: 1,
  }

  loaderChange = () => {
    this.setState((prevState) => ({ isLoading: !prevState.isLoading }))
  }

  onLargeImg = ({ largeImageURL, tags }) => {
    console.log(this.state.items)
    this.setState({
      showModal: true,
      modalImages: { largeImageURL, tags },
    })
  }

  handlerSubmit = (pool) => {
    this.setState({ pool: pool, page: 1, items: [] })
  }
  handlerActive = () => {
    this.setState((showModal) => ({ showModal: !showModal }))
  }

  onToggleModal = () => {
    this.setState((prevState) => ({ showModal: !prevState.showModal }))
  }

  // componentDidMount() {
  //   const { page } = this.state
  //   axios
  //     .get(
  // `https://pixabay.com/api/?key=26335917-be25fd704b1936d7f202ea389&q=pool&page=${page}&per_page=12&image_type=photo`,
  //     )
  //     .then(({ data }) => {
  //       this.setState({ items: data.hits })
  //     })
  //     .catch((error) => console.log(error.messages))
  //   window.addEventListener('keydown', (e) => {
  //     if (e.code === 'Escape') {
  //       this.onToggleModal()
  //     }
  //   })
  // }

  componentDidUpdate(prevProps, prevState) {
    const { page, pool } = this.state

    if (pool !== prevState.pool || page !== prevState.page) {
      this.setState({ isLoading: true })
      axios
        .get(
          `https://pixabay.com/api/?key=26335917-be25fd704b1936d7f202ea389&q=${pool}&page=${page}&per_page=12&image_type=photo`,
          {
            timeout: 1000,
          },
        )
        .then(({ data }) => {
          this.setState((prevState) => ({
            items: [...prevState.items, ...data.hits],
            isLoading: false,
          }))
        })
        .catch((error) => this.setState({ error: error.message }))
    }
  }

  loadPage = () => {
    this.setState((prevState) => ({ page: prevState.page + 1 }))
  }

  render() {
    const { items, showModal, error, isLoading } = this.state

    return (
      <div className="pageApp">
        <Searchbar onSubmit={this.handlerSubmit} />
        {showModal && (
          <Modal
            images={this.state.modalImages}
            onActive={this.onToggleModal}
          />
        )}
        {isLoading ? (
          <span className="loaderSpinner">
            <ClipLoader
              color={'#ffffff'}
              loading={isLoading}
              cssOverride={override}
              size={160}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </span>
        ) : (
          <ImagineGallery
            items={items}
            error={error}
            onLoader={this.loaderChange}
            onBox={this.handlerActive}
            onShow={this.onLargeImg}
            basement=<Button className="btn" onClick={this.loadPage} />
          ></ImagineGallery>
        )}
      </div>
    )
  }
}
