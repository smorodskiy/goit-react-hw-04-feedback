import React from 'react';

// Check types of props
import PropTypes from 'prop-types';

export const Notification = ({ message }) => {
  return <span>{message}</span>;
};

// Types
Notification.propTypes = {
  message: PropTypes.string,
};
