import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import NativeModal from '../NativeModal/NativeModal.jsx';

export default class Modal extends Component {
  state = {
    showModal: true,
  };
  onToggleModal = () => {
    this.setState(showModal => {
      return { showModal: !showModal };
    });
  };
  componentDidMount() {
    window.addEventListener('keydown', e => {
      if (e.code === 'Escape') {
        this.onToggleModal();
      }
    });
  }

  render() {
    const nodeModal = document.getElementById('another-root');
    const { showModal } = this.state;
    return (
      <>
        {' '}
        {showModal &&
          createPortal(<NativeModal button={this.onToggleModal} />, nodeModal)}
      </>
    );
  }
}
