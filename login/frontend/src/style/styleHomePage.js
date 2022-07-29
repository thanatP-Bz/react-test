import styled from "styled-components";
import BgImg from "../assert/work.jpg";

export const StyledHome = styled.div`
  height: 90vh;
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

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const H1 = styled.h1`
  color: #fff;
  letter-spacing: 2px;
`;
