import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import InputForm from '../components/InputForm/InputForm';
import registerForm from '../components/data/registerForm.json';
import { authOperations } from '../redux/auth';
import { Section } from '../components/Section/Section';

export default function RegistrationPageView() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  const handleChange = ({ name }, value) => {
    switch (name) {
      case 'Name':
        setName(() => value);
        break;
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
    dispatch(authOperations.register({ name, email, password }));
    reset(e);
  };

  const reset = e => {
    setName('');
    setEmail('');
    setPassword('');
    e.target[0].value = '';
    e.target[1].value = '';
    e.target[2].value = '';
  };
  return (
    <Section>
      <Form onSubmit={handleSubmit}>
        <>
          {registerForm.map(({ name }) => (
            <InputForm
              name={name}
              onChange={event => handleChange({ name }, event.target.value)}
            />
          ))}
        </>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      )}
    </Section>
  );
}
