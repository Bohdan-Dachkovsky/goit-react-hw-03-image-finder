import React, { Component } from 'react'
import css from './popup.module.css'

export default class NativeModal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', (e) => {
      if (e.code === 'Escape') {
        this.props.button()
      }
    })
  }
  render() {
    return (
      <div className={css.popup}>
        <div className={css.overlay}>
          <div className={css.formBody}>
            <button className={css.close} onClick={this.props.button}>
              ⨷
            </button>
            <img src="" alt="" loading="eager" />
          </div>
        </div>
      </div>
    )
  }
}
