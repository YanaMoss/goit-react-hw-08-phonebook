import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
// import SingUpPage from '../components/SignUp/SignUp';
import { useSignUpMutation } from '../redux/auth/auth-operation';
import loginForm from '../components/data/loginForm.json';
import InputForm from '../components/InputForm/InputForm';

export default function SingUpPageView() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signUp] = useSignUpMutation();

  const handleChange = ({ name }, value) => {
    console.log(value);
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
    console.log({ email, password });
    e.preventDefault();
    signUp({ email, password });
    reset(e);
  };

  const reset = e => {
    setEmail('');
    setPassword('');
    e.target[0].value = '';
    e.target[1].value = '';
  };
  return (
    <section>
      <Form onSubmit={handleSubmit}>
        <>
          {loginForm.map(({ name }) => (
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
