import React from 'react'
import PropTypes from 'prop-types'
// import styles from './ContactForm.module.css';
import bcss from './button.module.css'
const Button = ({ onClick, children = <span>button Load More</span> }) => {
  return (
    <>
      <button onClick={onClick} className={bcss.button} type="submit">
        Load More
      </button>
    </>
  )
}
export default Button
Button.defaultProps = {
  children: <span>button Load More</span>,
}
Button.propTypes = {
  onClick: PropTypes.func.isRequired,
}
