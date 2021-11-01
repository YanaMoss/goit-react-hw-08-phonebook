import React from 'react';
import { useSelector } from 'react-redux';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { BsFillTrashFill, BsFillFileEarmarkPersonFill } from 'react-icons/bs';
import { ItemContact } from './Contacts.styled';
import { ItemListContact } from './Contacts.styled';
import { Button } from '../Button/Button';
import { List } from './Contacts.styled';
import { getListContact } from '../../redux/phonebook/phonebook-selectors';
import {
  useGetContactsQuery,
  useDeleteContactMutation,
} from '../../redux/phonebook/phonebook-operation';

export function ContactList() {
  const { data } = useGetContactsQuery();
  const [deleteContact] = useDeleteContactMutation();

  const contacts = useSelector(state => getListContact(data, state));
  const contactDelete = id => {
    deleteContact(id);
    toast.success('Сontact deleted.');
  };
  return (
    <List>
      {contacts &&
        contacts.map(({ id, name, number }) => (
          <ItemListContact key={id}>
            <BsFillFileEarmarkPersonFill />
            <ItemContact>{name}:</ItemContact>
            <ItemContact>{number}</ItemContact>
            <Button
              title={'Delete'}
              type="button"
              onClick={() => contactDelete(id)}
              className="Add"
            >
              <BsFillTrashFill />
            </Button>
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
