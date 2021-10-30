import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';

export const UserMenu = () => {
  const dispatch = useDispatch();
  return (
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
          <Link to="/logout" onClick={() => dispatch(authOperations.logOut())}>
            Log out
          </Link>
        </NavLink>
      </li>
    </ul>
  );
};
