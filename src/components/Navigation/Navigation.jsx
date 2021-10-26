import { NavLink } from 'react-router-dom';

export const Navigation = () => (
  <header>
    <ul>
      <li>
        <NavLink exact to="/" className="NavLink">
          <h1>PhoneBook</h1>
        </NavLink>
      </li>
      <li>
        <NavLink
          exact
          to="/autorization"
          className="NavLink"
          activeClassName="NavLink--active"
        >
          Sing in
        </NavLink>
      </li>
      <li>
        <NavLink
          exact
          to="/logout"
          className="NavLink"
          activeClassName="NavLink--active"
        >
          Log out
        </NavLink>
      </li>
    </ul>
  </header>
);
