import React from "react";
import styled from "styled-components";
import { Button } from "@mui/material";
import BgImg from "../assert/work.jpg";

const StyledHome = styled.div`
  height: 60vh;
  width: 100%;
  background-image: linear-gradient(
      to right bottom,
      rgba(89, 190, 71, 0.8),
      rgba(20, 100, 139, 0.8)
    ),
    url(${BgImg});
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const H1 = styled.h1`
  color: #fff;
  letter-spacing: 2px;
`;

const Home = () => {
  return (
    <StyledHome>
      <Container>
        <H1>Welcome to Homepage</H1>
      </Container>
    </StyledHome>
  );
};

export { Home };
