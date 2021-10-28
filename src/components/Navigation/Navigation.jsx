import { NavLink } from 'react-router-dom';

export const Navigation = ({ children }) => (
  <header>
    <ul>
      <li>
        <NavLink exact to="/" className="NavLink">
          <h1>PhoneBook</h1>
        </NavLink>
      </li>
      <li>{children}</li>
    </ul>
  </header>
);
