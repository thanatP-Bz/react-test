import React from "react";
import {
  StyledNavbar,
  Navigation,
  LogoLink,
  LinkContainer,
  NavLink,
} from "../style/styleNavbar";

const Navbar = () => {
  return (
    <StyledNavbar>
      <Navigation>
        <LogoLink to="/">LOGO</LogoLink>

        <LinkContainer>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/signup">Sign Up</NavLink>
        </LinkContainer>
      </Navigation>
    </StyledNavbar>
  );
};

export default Navbar;
