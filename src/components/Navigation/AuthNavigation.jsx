import { NavLink } from 'react-router-dom';
import { useRouteMatch } from 'react-router';

export const AuthNavigation = () => {
  const { url } = useRouteMatch();
  console.log(url);
  return (
    <ul>
      <li>
        <NavLink
          exact
          to="/autorization"
          className="NavLink"
          activeClassName="NavLink--active"
        >
          Sign in
        </NavLink>
      </li>
      <li>
        <NavLink
          exact
          to="/registration"
          className="NavLink"
          activeClassName="NavLink--active"
        >
          Registration
        </NavLink>
      </li>
    </ul>
  );
};
