import { Form, Button, FloatingLabel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function RegistrationForm() {
  return (
    <section>
      <Form>
        <>
          <FloatingLabel
            controlId="floatingInput"
            label="Email address"
            className="mb-3"
          >
            <Form.Control
              size="lg"
              type="email"
              placeholder="name@example.com"
            />
          </FloatingLabel>
          <FloatingLabel controlId="floatingPassword" label="Password">
            <Form.Control size="lg" type="password" placeholder="Password" />
          </FloatingLabel>
          <FloatingLabel controlId="floatingPassword" label="Confirm password">
            <Form.Control
              size="lg"
              type="confirm password"
              placeholder="Confirm password"
            />
          </FloatingLabel>
        </>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </section>
  );
}
