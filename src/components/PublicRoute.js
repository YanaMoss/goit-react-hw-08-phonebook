import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router';

export const PublicRoute = ({
  children,
  restricted = false,
  ...routeProps
}) => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;
  console.log(shouldRedirect);
  return (
    <Route {...routeProps}>
      {shouldRedirect ? <Redirect to="/contacts" /> : children}
    </Route>
  );
};
