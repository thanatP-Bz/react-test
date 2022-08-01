import React from "react";
import {
  StyledNavbar,
  Navigation,
  LogoLink,
  LinkContainer,
  NavLink,
} from "../style/styleNavbar";
import { useLogout } from "../hook/useLogout";
import { useAuthContext } from "../context/authContext";

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const logoutHandler = () => {
    logout();
  };

  return (
    <StyledNavbar>
      <Navigation>
        <LogoLink to="/">LOGO</LogoLink>

        {!user && (
          <LinkContainer>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/signup">Sign Up</NavLink>
          </LinkContainer>
        )}

        {user && (
          <div>
            <span>{user.email}</span>
            <button onClick={logoutHandler}>log out</button>
          </div>
        )}
      </Navigation>
    </StyledNavbar>
  );
};

export default Navbar;
