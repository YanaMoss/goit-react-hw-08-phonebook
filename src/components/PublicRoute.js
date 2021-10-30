import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router';

export const PublicRoute = ({
  children,
  restricted = false,
  ...routeProps
}) => {
  const isLoggedIn = useSelector(state => state.isLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;
  return (
    <Route {...routeProps}>
      {shouldRedirect ? <Redirect to="/contacts" /> : children}
    </Route>
  );
};
