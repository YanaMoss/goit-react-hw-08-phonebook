import React from 'react';
import PropTypes from 'prop-types';
import { SectionApp } from './Section.styled';

export const Section = ({ title, children }) => (
  <SectionApp>
    <h2>{title}</h2>
    {children}
  </SectionApp>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
