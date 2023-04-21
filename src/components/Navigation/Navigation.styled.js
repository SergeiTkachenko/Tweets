import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavLinkStyled = styled(NavLink)`
  text-decoration: none;

  margin-bottom: 20px;

  font-weight: 600;
  padding: 5px 10px;
  border-radius: 6px;
  color: black;
  background-color: #3bb4fa;
  text-transform: uppercase;

  transition: color 300ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 300ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1);

  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;

    padding: 10px 20px;
  }

  @media screen and (min-width: 1280px) {
  }

  &.active {
    color: white;
    background-color: #3460da;
    box-shadow: rgba(45, 78, 224, 0.25) 0px 10px 20px 10px,
      rgba(12, 63, 231, 0.3) 0px 10px 7px -2px;
  }

  &:hover,
  &:focus {
    color: white;
    background-color: #3460da;
    box-shadow: rgba(45, 78, 224, 0.25) 0px 10px 20px 10px,
      rgba(12, 63, 231, 0.3) 0px 10px 7px -2px;
  }
`;

export const NavLinkListStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;
