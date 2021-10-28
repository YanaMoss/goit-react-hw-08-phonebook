import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import InputForm from '../components/InputForm/InputForm';
import registerForm from '../components/data/registerForm.json';
import { authOperations } from '../redux/auth';

export default function RegistrationPageView() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = ({ name }, value) => {
    console.log(value);
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
    console.log({ name, email, password });
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    reset(e);
  };

  const reset = e => {
    setName('');
    setEmail('');
    setPassword('');
    console.log(e.target[0].value);
    e.target[0].value = '';
    e.target[1].value = '';
    e.target[2].value = '';
  };
  return (
    <section>
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
    </section>
  );
}
