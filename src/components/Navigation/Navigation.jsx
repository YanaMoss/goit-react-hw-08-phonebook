import { NavLink } from 'react-router-dom';
import { HeaderNavigation } from './Navigation.styled';
export const Navigation = ({ children }) => (
  <HeaderNavigation>
    <NavLink exact to="/">
      <h1>PhoneBook</h1>
    </NavLink>
    {children}
  </HeaderNavigation>
);
