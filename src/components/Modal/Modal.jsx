import React, { Component } from 'react';
// import PropTypes from 'prop-types';
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
    const { showModal } = this.state;
    return <> {showModal && <NativeModal button={this.onToggleModal} />}</>;
  }
}
