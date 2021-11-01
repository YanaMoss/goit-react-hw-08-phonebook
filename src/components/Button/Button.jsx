import React from 'react';
import PropTypes from 'prop-types';
import { ButtonPhonebook } from './Button.styled';

export const Button = ({ type, onClick, children }) => (
  <ButtonPhonebook type={type} onClick={onClick}>
    {children}
  </ButtonPhonebook>
);

Button.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
