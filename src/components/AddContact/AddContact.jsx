import { useState } from 'react';
import { useAddContactMutation } from '../../redux/phonebook/phonebook-operation';
import inputForms from '../data/inputForms.json';
import { Form, FloatingLabel } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { ButtonPhonebook } from '../Button/Button.styled';
import { Redirect } from 'react-router';
import { Section } from '../Section/Section';

export default function AddContact() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [addContact] = useAddContactMutation();
  const [openForm, setOpenForm] = useState(true);

  const handleChange = ({ name }, value) => {
    switch (name) {
      case 'Name':
        setName(() => value);
        break;
      case 'Number':
        setNumber(() => value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log({ name, number });
    addContact({ name, number });
    toast.success('Contact added.');
    reset(e);
  };
  const reset = e => {
    setName('');
    setNumber('');
    setOpenForm(false);
  };

  return (
    <Section>
      {openForm ? (
        <Form onSubmit={handleSubmit}>
          {inputForms.map(({ id, type, name, pattern, title, required }) => (
            <FloatingLabel
              htmlFor={id}
              key={name}
              label={name}
              className="mb-3"
            >
              <Form.Control
                size="lg"
                id={id}
                type={type}
                name={name}
                pattern={pattern}
                title={title}
                required={required}
                placeholder={name}
                onChange={event => handleChange({ name }, event.target.value)}
              />
            </FloatingLabel>
          ))}
          <ButtonPhonebook type="submit">Add contact</ButtonPhonebook>
        </Form>
      ) : (
        <Redirect to="/contacts"></Redirect>
      )}
    </Section>
  );
}
