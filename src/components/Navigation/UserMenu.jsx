import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
import { NavItem, NavList } from './AuthNavigation.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();

  return (
    <NavList>
      <NavItem>
        <NavLink
          exact
          to="/contacts"
          className="NavLink"
          activeClassName="NavLink--active"
        >
          Contacts
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink exact to="/logout">
          <Link to="/logout" onClick={() => dispatch(authOperations.logOut())}>
            Log out
          </Link>
        </NavLink>
      </NavItem>
    </NavList>
  );
};
