/* eslint-disable no-undef */
import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth';
import loginForm from '../components/data/loginForm.json';
import InputForm from '../components/InputForm/InputForm';
import { Section } from '../components/Section/Section';

export default function SingUpPageView() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = ({ name }, value) => {
    switch (name) {
      case 'Email':
        setEmail(() => value);
        break;
      case 'Password':
        setPassword(() => value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    reset(e);
  };

  const reset = e => {
    setEmail('');
    setPassword('');
    e.target[0].value = '';
    e.target[1].value = '';
  };
  return (
    <Section>
      <Form onSubmit={handleSubmit}>
        <>
          {loginForm.map(({ name, id }) => (
            <InputForm
              key={id}
              name={name}
              onChange={event => handleChange({ name }, event.target.value)}
            />
          ))}
        </>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Section>
  );
}
