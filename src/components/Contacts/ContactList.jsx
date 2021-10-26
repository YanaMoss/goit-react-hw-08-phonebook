import React from 'react';
import { useSelector } from 'react-redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ItemContact } from './Contacts.styled';
import { ItemListContact } from './Contacts.styled';
import { Button } from '../Button/Button';
import { List } from './Contacts.styled';
import { getListContact } from '../../redux/phonebook-selectors';
import {
  useGetContactsQuery,
  useDeleteContactMutation,
} from '../../redux/phonebook-operation';

export function ContactList() {
  const { data } = useGetContactsQuery();
  const [deleteContact] = useDeleteContactMutation();
  const contacts = useSelector(state => getListContact(data, state));

  return (
    <List>
      {contacts &&
        contacts.map(({ id, name, number }) => (
          <ItemListContact key={id}>
            <ItemContact>{name}:</ItemContact>
            <ItemContact>{number}</ItemContact>
            <Button
              title={'Delete'}
              type="button"
              onClick={() => deleteContact(id)}
            />
          </ItemListContact>
        ))}
    </List>
  );
}

ContactList.propTypes = {
  phonebook: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.func,
      name: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
    }),
  ),
};

export default connect(ContactList);
