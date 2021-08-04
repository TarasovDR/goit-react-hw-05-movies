import { NavLink } from 'react-router-dom';
import { Nav, UlNav, LiNav } from './Navigation.styled';

const Navigation = () => {
  return (
    <Nav>
      <UlNav>
        <LiNav>
          <NavLink
            exact
            to="/"
            className="navLink"
            activeClassName="activeNavLink"
          >
            Home
          </NavLink>
        </LiNav>
        <LiNav>
          <NavLink
            to="/movies"
            className="navLink"
            activeClassName="activeNavLink"
          >
            Movies
          </NavLink>
        </LiNav>
      </UlNav>
    </Nav>
  );
};

export default Navigation;
