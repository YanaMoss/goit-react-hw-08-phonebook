import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import InputForm from '../components/InputForm/InputForm';
import registerForm from '../components/data/registerForm.json';
import { useRegisterMutation } from '../redux/auth/auth-operation';

export default function RegistrationPageView() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [register] = useRegisterMutation();

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
    register({ name, email, password });
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
