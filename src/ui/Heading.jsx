import { styled, css } from "styled-components";

const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      color: red;
      background-color: yellow;
      font-size: 10rem;
    `}
  ${(props) =>
    props.as === "h2" &&
    css`
      color: green;
      background-color: blue;
      font-size: 3rem;
    `}
    ${(props) =>
    props.as === "h3" &&
    css`
      color: orange;
      background-color: black;
      font-size: 1rem;
      font-weight: 900;
    `}
`;

export default Heading;
