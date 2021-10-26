/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Loader from 'react-loader-spinner';
import { Navigation } from '../Navigation/Navigation.jsx';
// import { Container } from 'react-dom';

const HomePage = lazy(() =>
  import('../../views/HomePageView.jsx' /*webpackChunkName: "home-page"*/),
);
const RegistrationPage = lazy(() =>
  import(
    '../../views/RegistrationPageView.jsx' /*webpackChunkName: "home-page"*/
  ),
);
const SignInPage = lazy(() =>
  import('../../views/SignInPageView.jsx' /*webpackChunkName: "home-page"*/),
);
const CreateContactsPage = lazy(() =>
  import(
    '../../views/CreateContactPageView.jsx' /*webpackChunkName: "home-page"*/
  ),
);
const ContactsPage = lazy(() =>
  import('../../views/ContactsPageView.jsx' /*webpackChunkName: "home-page"*/),
);
const LogoutPage = lazy(() =>
  import('../../views/LogoutView.jsx' /*webpackChunkName: "home-page"*/),
);
const NotFoundView = lazy(() =>
  import('../../views/NotFoundView.jsx' /*webpackChunkName: "NotFoundView"*/),
);

export const AppBar = () => (
  <div>
    <Navigation />
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
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/registration" exact>
          <RegistrationPage />
        </Route>
        <Route path="/autorization" exact>
          <SignInPage />
        </Route>
        <Route path="/create-contact" exact>
          <CreateContactsPage />
        </Route>
        <Route path="/contacts" exact>
          <ContactsPage />
        </Route>
        <Route path="/logout" exact>
          <LogoutPage />
        </Route>
        <Route>
          <NotFoundView />
        </Route>
      </Switch>
    </Suspense>
  </div>
);
