import { Suspense } from 'react';
import { NavLinkListStyled, NavLinkStyled } from './Navigation.styled';
import { Outlet } from 'react-router-dom';

export default function Navigation() {
  return (
    <div>
      <NavLinkListStyled>
        <NavLinkStyled to="/">
          <h2>Home</h2>
        </NavLinkStyled>
        <NavLinkStyled to="/tweets">
          <h2>Tweets</h2>
        </NavLinkStyled>
      </NavLinkListStyled>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
}
