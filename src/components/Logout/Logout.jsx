import { Link } from 'react-router-dom';
export default function LogoutPage() {
  return (
    <section>
      <p>You have successfully logged out.</p>
      <Link>Go back to the main page</Link>
    </section>
  );
}
