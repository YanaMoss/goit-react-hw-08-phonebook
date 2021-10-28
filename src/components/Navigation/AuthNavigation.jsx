import { NavLink } from 'react-router-dom';

export const AuthNavigation = () => (
  <NavLink
    exact
    to="/autorization"
    className="NavLink"
    activeClassName="NavLink--active"
  >
    Sing in
  </NavLink>
);
