import { Link } from 'react-router-dom';
export default function HomePage() {
  return (
    <section>
      <h2>Welcome to PhoneBook!</h2>
      <p>
        We know how to store contacts. If you are here for the first time,
        please <Link to="/registration">register</Link>.
      </p>
    </section>
  );
}
