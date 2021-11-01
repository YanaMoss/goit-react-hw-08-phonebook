import { NavLink } from 'react-router-dom';
import { NavItem, NavList } from './AuthNavigation.styled';

export const AuthNavigation = () => {
  return (
    <NavList>
      <NavItem>
        <NavLink
          exact
          to="/autorization"
          className="NavLink"
          activeClassName="NavLink--active"
        >
          Sign in
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          exact
          to="/registration"
          className="NavLink"
          activeClassName="NavLink--active"
        >
          Registration
        </NavLink>
      </NavItem>
    </NavList>
  );
};
