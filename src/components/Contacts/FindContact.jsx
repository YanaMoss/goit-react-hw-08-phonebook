import React from 'react';
import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import { filterContact } from '../../redux/phonebook/phonebook-actions';
import { Input } from '../AddContact/AddContactForm.styled';
import InputForm from '../InputForm/InputForm';

export function FindContact({ title }) {
  const dispatch = useDispatch();
  return (
    <div>
      <InputForm
        name={'Find contact by name'}
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
