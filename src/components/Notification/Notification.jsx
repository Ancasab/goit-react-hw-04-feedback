// import React from 'react'
import css from './Notification.module.css'
import PropTypes from "prop-types";

export const Notification = ({message}) => {
  return (
      <p className={css.notificationMessage}>{ message}</p>
  )
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

// export default Notification