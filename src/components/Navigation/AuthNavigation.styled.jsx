import styled from '@emotion/styled';

export const NavList = styled.ul`
  display: flex;
  padding-top: 10px;
`;

export const NavItem = styled.li`
  display: flex;
  padding: 5px;
  margin-right: 10px;
  &::after{
     content: '';
     width: 100%
     height: 2px;
     color: #ffffff
  }
`;
