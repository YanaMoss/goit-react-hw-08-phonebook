import React from 'react';
import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import { filterContact } from '../../redux/phonebook-actions';
import { Input } from '../AddContact/AddContactForm.styled';

export function FindContact({ title }) {
  const dispatch = useDispatch();
  return (
    <div>
      <h3>{title}</h3>
      <Input
        type="text"
        onChange={e => dispatch(filterContact(e.target.value))}
      />
    </div>
  );
}

FindContact.propTypes = {
  title: PropTypes.string.isRequired,
};

export default connect(FindContact);
