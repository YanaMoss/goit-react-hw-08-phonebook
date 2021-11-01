import { Form, FloatingLabel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function inputForm({ name, onChange }) {
  return (
    <FloatingLabel controlId="floatingInput" label={name} className="mb-3">
      <Form.Control
        size="lg"
        type="name"
        name={name}
        placeholder={name}
        onChange={onChange}
      />
    </FloatingLabel>
  );
}
