import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavLinkStyled = styled(NavLink)`
  text-decoration: none;

  margin-bottom: 20px;
  display: flex;
  flex-wrap: wrap;

  padding: 10px 20px;

  font-weight: 600;
  border-radius: 6px;
  color: black;
  background-color: #3bb4fa;
  text-transform: uppercase;

  transition: color 300ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 300ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1);

  &.active {
    color: white;
    background: linear-gradient(
      114.99deg,
      #471ca9 -0.99%,
      #5736a3 54.28%,
      #4b2a99 78.99%
    );
    box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  }

  &:hover,
  &:focus {
    color: white;
    background: linear-gradient(
      114.99deg,
      #471ca9 -0.99%,
      #5736a3 54.28%,
      #4b2a99 78.99%
    );
    box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  }
`;

export const NavLinkListStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;
