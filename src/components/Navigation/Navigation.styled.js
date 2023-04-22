import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavLinkStyled = styled(NavLink)`
  text-decoration: none;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 196px;
  height: 50px;

  padding: 10px 20px;

  font-weight: 600;
  border-radius: 10px;
  color: black;
  background-color: #3bb4fa;
  text-transform: uppercase;

  transition: color 300ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 300ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1);

  &.active {
    color: white;
    background: linear-gradient(115deg, #471ca9 -1%, #5736a3 55%, #4b2a99 79%);
    box-shadow: -2px 7px 20px rgba(0, 0, 0, 0.23);
  }

  &:hover,
  &:focus {
    color: white;
    background: linear-gradient(115deg, #471ca9 -1%, #5736a3 55%, #4b2a99 79%);
    box-shadow: -2px 7px 20px rgba(0, 0, 0, 0.23);
  }
`;

export const NavLinkListStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;
