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

  render() {
    const { showModal } = this.state;
    return <>{showModal && <NativeModal button={this.onToggleModal} />}</>;
  }
}
