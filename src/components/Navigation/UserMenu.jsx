import { NavLink } from 'react-router-dom';

export const UserMenu = () => (
  <ul>
    <li>
      <NavLink
        exact
        to="/contacts"
        className="NavLink"
        activeClassName="NavLink--active"
      >
        Contacts
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
);
