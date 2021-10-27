import { useState } from 'react';
import { useAddContactMutation } from '../../redux/phonebook/phonebook-operation';
import inputForms from '../data/inputForms.json';
import { Form } from './AddContactForm.styled';
import { Label } from './AddContactForm.styled';
import { Input } from './AddContactForm.styled';
import { ButtonPhonebook } from '../Button/Button.styled';

export default function AddContact() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [addContact] = useAddContactMutation();

  const handleChange = ({ name }, value) => {
    switch (name) {
      case 'name':
        setName(() => value);
        break;
      case 'number':
        setNumber(() => value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    addContact({ name, number });
    reset(e);
  };
  const reset = e => {
    setName('');
    setNumber('');
    e.currentTarget.name.value = '';
    e.currentTarget.number.value = '';
  };

  return (
    <Form onSubmit={handleSubmit}>
      {inputForms.map(({ id, type, name, pattern, title, required }) => (
        <Label htmlFor={id} key={name}>
          <h3>{name}</h3>
          <Input
            id={id}
            type={type}
            name={name}
            pattern={pattern}
            title={title}
            required={required}
            placeholder={name}
            onChange={event => handleChange({ name }, event.target.value)}
          />
        </Label>
      ))}
      <ButtonPhonebook type="submit">Add contact</ButtonPhonebook>
    </Form>
  );
}
