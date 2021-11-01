import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router';
import { Switch } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Loader from 'react-loader-spinner';
import { authOperations } from './redux/auth';
import { Container } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AppBar } from './components/AppBar/AppBar';
import { PublicRoute } from './components/PublicRoute';
import { PrivateRoute } from './components/PrivateRoute.js';

const RegistrationPage = lazy(() =>
  import('./views/RegistrationPageView.jsx' /*webpackChunkName: "home-page"*/),
);
const SignInPage = lazy(() =>
  import('./views/SignUpPageView.jsx' /*webpackChunkName: "home-page"*/),
);
const CreateContactsPage = lazy(() =>
  import('./views/CreateContactPageView.jsx' /*webpackChunkName: "home-page"*/),
);
const ContactsPage = lazy(() =>
  import('./views/ContactsPageView.jsx' /*webpackChunkName: "home-page"*/),
);
const LogoutPage = lazy(() =>
  import('./views/LogoutView.jsx' /*webpackChunkName: "home-page"*/),
);

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);
  return (
    <>
      <Container>
        <AppBar />
        <Suspense
          fallback={
            <Loader
              type="Puff"
              color="#00BFFF"
              height={100}
              width={100}
              timeout={3000}
            />
          }
        >
          <Switch>
            <PublicRoute path="/" exact restricted>
              <Redirect to="/autorization" />
            </PublicRoute>
            <PublicRoute exact path="/registration" restricted>
              <RegistrationPage />
            </PublicRoute>
            <PublicRoute exact path="/autorization" restricted>
              <SignInPage />
            </PublicRoute>
            <PrivateRoute path="/create-contact" exact>
              <CreateContactsPage />
            </PrivateRoute>
            <PrivateRoute path="/contacts" redirect exact>
              <ContactsPage />
            </PrivateRoute>
            <PrivateRoute path="/logout" exact>
              <LogoutPage />
            </PrivateRoute>
          </Switch>
        </Suspense>
      </Container>
      <ToastContainer />
    </>
  );
}
