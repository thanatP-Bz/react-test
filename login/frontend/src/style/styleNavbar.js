import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledNavbar = styled.div`
  width: 100%;
  background-color: rgb(86, 209, 86);
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
`;

export const LogoLink = styled(Link)`
  padding-left: 2rem;
  color: #fff;
  font-size: 1.5rem;
  text-decoration: none;
`;

export const LinkContainer = styled.div`
  padding-right: 2rem;
`;

export const NavLink = styled(Link)`
  color: green;
  padding: 0.5rem 2rem;
  background-color: #fff;
  margin: 0px 7px;
  text-decoration: none;
  border-radius: 100px;
`;
