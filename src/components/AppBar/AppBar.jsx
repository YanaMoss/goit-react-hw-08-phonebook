import React from 'react';
import { useSelector } from 'react-redux';
import { Navigation } from '../Navigation/Navigation.jsx';
import { UserMenu } from '../Navigation/UserMenu.jsx';
import { AuthNavigation } from '../Navigation/AuthNavigation.jsx';

export function AppBar() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  return (
    <div>
      <Navigation children={isLoggedIn ? <UserMenu /> : <AuthNavigation />} />
    </div>
  );
}
